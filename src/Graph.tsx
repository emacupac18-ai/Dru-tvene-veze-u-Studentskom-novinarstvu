import { useEffect, useRef } from "react";
import * as d3 from "d3";

export interface Node extends d3.SimulationNodeDatum {
  id: string;
  name: string;
  type: "platform" | "person" | "professional";
}

export interface Link extends d3.SimulationLinkDatum<Node> {
  source: string | Node;
  target: string | Node;
}

interface GraphProps {
  nodes: Node[];
  links: Link[];
  onNodeClick?: (node: Node) => void;
}

export default function Graph({ nodes, links, onNodeClick }: GraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const g = svg.append("g");

    // Zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on("zoom", (event) => {
        g.attr("transform", event.transform);
      });

    svg.call(zoom);

    // Analyze connection status of each node relative to main platforms
    const nodeConnections = new Map<string, { p1: boolean; p2: boolean }>();
    nodes.forEach(n => {
      nodeConnections.set(n.id, { p1: false, p2: false });
    });

    links.forEach(l => {
      const sId = typeof l.source === "object" ? (l.source as Node).id : (l.source as string);
      const tId = typeof l.target === "object" ? (l.target as Node).id : (l.target as string);

      if (sId === "p1" || tId === "p1") {
        const otherId = sId === "p1" ? tId : sId;
        const conn = nodeConnections.get(otherId) || { p1: false, p2: false };
        conn.p1 = true;
        nodeConnections.set(otherId, conn);
      }
      if (sId === "p2" || tId === "p2") {
        const otherId = sId === "p2" ? tId : sId;
        const conn = nodeConnections.get(otherId) || { p1: false, p2: false };
        conn.p2 = true;
        nodeConnections.set(otherId, conn);
      }
    });

    // Color definitions
    const getColor = (d: Node) => {
      if (d.id === "p1") return "#ef4444"; // Strong Platform 1 Red
      if (d.id === "p2") return "#3b82f6"; // Strong Platform 2 Blue

      const conn = nodeConnections.get(d.id);
      const isP1 = conn?.p1;
      const isP2 = conn?.p2;

      if (isP1 && isP2) return "#a855f7"; // purple for both (Sara, Karla)
      if (isP1) return "#f87171"; // soft red for platform 1
      if (isP2) return "#60a5fa"; // soft blue for platform 2

      if (d.type === "professional") return "#fbbf24"; // golden yellow for general pros
      return "#9ca3af"; // neutral gray
    };

    // Advanced dynamic layout coordinates positioning (pyramid-like twin orbit layout)
    const getTargetX = (d: Node, w: number) => {
      if (d.id === "p1") return w / 2 - 160;
      if (d.id === "p2") return w / 2 + 160;

      const conn = nodeConnections.get(d.id);
      const isP1 = conn?.p1;
      const isP2 = conn?.p2;

      if (isP1 && isP2) return w / 2; // Purple bridged nodes centered horizontally
      if (isP1) return w / 2 - 180; // platform 1 network clustered left
      if (isP2) return w / 2 + 180; // platform 2 network clustered right

      if (d.id === "prof1") return w / 2 + 80;
      if (d.id === "prof2") return w / 2 - 220;
      if (d.id === "prof4") return w / 2 + 220;

      return w / 2;
    };

    const getTargetY = (d: Node, h: number) => {
      if (d.id === "p1" || d.id === "p2") return h / 2 - 20;

      const conn = nodeConnections.get(d.id);
      const isP1 = conn?.p1;
      const isP2 = conn?.p2;

      // Make a beautiful pyramid / bridge:
      if (isP1 && isP2) return h / 2 - 140; // Purple connected nodes elevated high like a communication bridge / arch
      if (d.type === "professional") return h / 2 + 100; // professionals grouped beautifully as foundational rows at the bottom
      
      return h / 2 + 20; // students floating in a friendly orbit around their centers
    };

    const simulation = d3.forceSimulation<Node>(nodes)
      .force("link", d3.forceLink<Node, Link>(links).id(d => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("x", d3.forceX<Node>((d) => getTargetX(d, width)).strength(0.35))
      .force("y", d3.forceY<Node>((d) => getTargetY(d, height)).strength(0.35))
      .force("collision", d3.forceCollide<Node>().radius(d => d.type === "platform" ? 45 : 35));

    // Custom coloring for links too! Make them fit the cluster colors.
    const getLinkStroke = (l: Link) => {
      const sId = typeof l.source === "object" ? (l.source as Node).id : (l.source as string);
      const tId = typeof l.target === "object" ? (l.target as Node).id : (l.target as string);

      const sConn = nodeConnections.get(sId);
      const tConn = nodeConnections.get(tId);

      const isS_Both = sConn?.p1 && sConn?.p2;
      const isT_Both = tConn?.p1 && tConn?.p2;

      if (sId === "p1" && tId === "p2") return "rgba(168, 85, 247, 0.5)"; // Purple link between platforms

      if (isS_Both || isT_Both || sId === "Karla" || tId === "Karla" || sId === "Sara" || tId === "Sara") {
        return "rgba(168, 85, 247, 0.45)"; // Soft purple for connections involving bridges
      }

      if (sId === "p1" || tId === "p1" || (sConn?.p1 && !sConn?.p2) || (tConn?.p1 && !tConn?.p2)) {
        return "rgba(239, 68, 68, 0.25)"; // Gentle red for P1 connections
      }

      if (sId === "p2" || tId === "p2" || (sConn?.p2 && !sConn?.p1) || (tConn?.p2 && !tConn?.p1)) {
        return "rgba(59, 130, 246, 0.25)"; // Gentle blue for P2 connections
      }

      return "rgba(255, 255, 255, 0.15)";
    };

    const link = g.append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", d => getLinkStroke(d))
      .attr("stroke-width", d => {
        const sId = typeof d.source === "object" ? (d.source as Node).id : (d.source as string);
        const tId = typeof d.target === "object" ? (d.target as Node).id : (d.target as string);
        // Platform to Platform or Platform to Bridge can be slightly thicker
        if ((sId === "p1" && tId === "p2") || sId === "Karla" || tId === "Karla" || sId === "Sara" || tId === "Sara") return 3;
        return 1.5;
      });

    const node = g.append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .attr("cursor", "pointer")
      .on("click", (event, d) => {
        if (onNodeClick) onNodeClick(d);
      })
      .call(drag(simulation));

    // Custom halos for platforms and bridged nodes
    node.append("circle")
      .attr("r", d => d.type === "platform" ? 38 : (d.id === "Karla" || d.id === "Sara" ? 22 : 0))
      .attr("fill", "none")
      .attr("stroke", d => getColor(d))
      .attr("stroke-width", 1)
      .attr("stroke-opacity", 0.3)
      .style("filter", "drop-shadow(0 0 8px currentColor)")
      .style("animation", "pulse 4s infinite ease-in-out");

    node.append("circle")
      .attr("r", d => d.type === "platform" ? 25 : (d.type === "professional" ? 18 : 12))
      .attr("fill", d => getColor(d))
      .attr("stroke", "#ffffff")
      .attr("stroke-width", d => d.type === "platform" ? 3 : (d.id === "Karla" || d.id === "Sara" ? 2.5 : 1.5))
      .style("filter", d => d.type === "platform" ? "drop-shadow(0 0 10px rgba(0,0,0,0.5))" : "none");

    // Elegant text labels with clean layout
    node.append("text")
      .text(d => d.name)
      .attr("x", d => d.type === "platform" ? 32 : 18)
      .attr("y", 4)
      .attr("fill", "#fff")
      .style("font-size", d => d.type === "platform" ? "12px" : "11px")
      .style("font-family", "Inter, sans-serif")
      .style("font-weight", d => (d.type === "platform" || d.type === "professional" || d.id === "Karla" || d.id === "Sara") ? "600" : "400")
      .style("pointer-events", "none")
      .style("text-shadow", "0 1px 4px rgba(0,0,0,0.95)");

    simulation.on("tick", () => {
      link
        .attr("x1", d => (d.source as Node).x!)
        .attr("y1", d => (d.source as Node).y!)
        .attr("x2", d => (d.target as Node).x!)
        .attr("y2", d => (d.target as Node).y!);

      node
        .attr("transform", d => `translate(${d.x},${d.y})`);
    });

    function drag(simulation: d3.Simulation<Node, undefined>) {
      function dragstarted(event: any) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      function dragged(event: any) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      function dragended(event: any) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
      }

      return d3.drag<SVGGElement, Node>()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

    const resizeObserver = new ResizeObserver(() => {
      if (containerRef.current) {
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        svg.attr("width", w).attr("height", h);
        simulation.force("center", d3.forceCenter(w / 2, h / 2));
        simulation.alpha(0.1).restart();
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      simulation.stop();
      resizeObserver.disconnect();
    };
  }, [nodes, links, onNodeClick]);

  return (
    <div ref={containerRef} id="graph-container" className="w-full h-full bg-[#050505] overflow-hidden relative">
      <svg ref={svgRef} className="w-full h-full block" />
    </div>
  );
}
