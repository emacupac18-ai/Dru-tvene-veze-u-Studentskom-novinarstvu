# Društvene mreže u studentskom novinarstvu te utjecaj na profesionalnu karijeru

**Author:** [User Name]
**Date:** May 18, 2026

## Abstract
This report details the development and theoretical framework of the "Media Network Explorer," an interactive application designed to visualize and analyze the social fabric of student media platforms. By integrating D3.js for topological visualization and Google Gemini for natural language relational analysis, the application provides unique insights into organizational connectivity. Particular focus is placed on "node bridging" where individuals like Karla link disparate networks, facilitating information flow.

## Introduction
The landscape of student media is often fragmented across multiple platforms. Understanding how these entities interact is crucial for organizational synergy. The problem addressed by this application is the lack of visible structure in human-media relationships. Traditional spreadsheets fail to capture the nuances of "bridge members"—individuals who hold positions in multiple organizations. The primary objective is to create a digital twin of this social network that is both visually intuitive and queryable via artificial intelligence.

## Method
### Technical Architecture
The application is built using a modern full-stack approach:
1.  **Frontend Logic:** React 19 was employed for component lifecycle management, ensuring reactive UI updates when nodes are selected.
2.  **Visualization Layer:** D3.js (Data-Driven Documents) was used to implement a force-directed graph. The simulation utilizes `forceManyBody` (repulsion), `forceLink` (connectivity), and `forceCenter` to create a dynamic, self-organizing layout.
3.  **AI Integration:** The Google Gemini API (`@google/genai`) serves as the "Intelligence Layer." It maps the JSON graph data to natural language contexts, allowing users to query relationships.

### Data Model
The network consists of a directed graph $G = (V, E)$ where:
-   $V$ (Vertices) represent either "Platforms" or "People."
-   $E$ (Edges) represent membership or collaborative links.
-   The "Karla" node serves as a critical bridge vertex connecting Platform 1 and Platform 2.

## Discussion: Connectivity and Human Relations
The analysis reveals a "Small World" network phenomenon within the student media ecosystem. 

### The Bridge Phenomenon
A key finding in the graph's topology is the role of Karla. In social network theory, bridging nodes have high betweenness centrality. Karla acts as a liaison between Platform 1 and Platform 2. This connectivity suggests that Platform 2 has more "leakage" or shared knowledge with Platform 1 than other isolated platforms might.

### AI Grounding
By utilizing ideas inspired by NotebookLM-style knowledge grounding, the application doesn't just show lines; it understands them. When prompted about Karla and Sara, the AI identifies their shared platform (Platform 2) and highlights the organizational path. This semantic layer transforms raw data into actionable social intelligence.

## Conclusion
The Media Network Explorer effectively bridges the gap between raw organizational data and social understanding. Future iterations should focus on real-time data ingestion and mapping temporal changes in membership to observe how network density evolves over a semester.

## References
1.  Google. (2024). *Gemini API Documentation*. Retrieved from https://ai.google.dev
2.  Bostock, M. (2025). *D3.js: Data-Driven Documents*. 
3.  NotebookLM Documentation. (2025). *Knowledge Grounding Strategies*. https://notebooklm.google.com/
4.  Scott, J. (2017). *Social Network Analysis*. SAGE Publications.
