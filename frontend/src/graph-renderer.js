import dracula from "graphdracula";

export default function renderGraph(edges) {
  document.getElementById("canvas").innerHTML = "";

  let graph = new dracula.Graph();

  edges.forEach((edge) => {
    graph.addEdge(edge.Node[0], edge.Node[1]);
  });

  let layouter = new dracula.Layout.Spring(graph);
  layouter.layout();

  let renderer = new dracula.Renderer.Raphael(
    document.getElementById("canvas"),
    graph,
    500,
    500
  );
  renderer.draw();
}
