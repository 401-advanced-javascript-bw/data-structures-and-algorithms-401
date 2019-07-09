'use strict';

module.exports = function dfsGraph(adjacencyList) {
  const vertices = new Set();
  const currentVertex = Object.keys(adjacencyList[0]);

  if (vertices.has(currentVertex)) {
    return vertices;
  }

  vertices.add(currentVertex);

  currentVertex.forEach(Vertex => {
    dfsGraph(adjacencyList);
  });
};
