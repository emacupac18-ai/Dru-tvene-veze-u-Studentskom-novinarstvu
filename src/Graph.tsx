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

    const simulation = d3.forceSimulation<Node>(nodes)
      .force("link", d3.forceLink<Node, Link>(links).id(d => d.id).distance(120))
      .force("charge", d3.forceManyBody().strength(-400))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(50));

    const link = g.append("g")
      .attr("stroke", "#444")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", 2);

    const node = g.append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .attr("cursor", "pointer")
      .on("click", (event, d) => {
        if (onNodeClick) onNodeClick(d);
      })
      .call(drag(simulation));

    node.append("circle")
      .attr("r", d => d.type === "platform" ? 25 : (d.type === "professional" ? 20 : 12))
      .attr("fill", d => {
        if (d.type === "platform") {
          return d.id === "p1" ? "#ff4d4d" : (d.id === "p2" ? "#4dabff" : "#F27D26");
        }
        if (d.type === "professional") {
          return "#F27D26"; // Gold/Orange for pros
        }
        return "#444";
      })
      .attr("stroke", "#fff")
      .attr("stroke-width", 2);

    node.append("text")
      .text(d => d.name)
      .attr("x", d => d.type === "platform" ? 30 : 20)
      .attr("y", 5)
      .attr("fill", "#fff")
      .style("font-size", d => d.type === "platform" ? "14px" : "12px")
      .style("font-family", "Inter, sans-serif")
      .style("font-weight", d => (d.type === "platform" || d.type === "professional") ? "600" : "400")
      .style("pointer-events", "none")
      .style("text-shadow", "0 0 4px #000");

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
