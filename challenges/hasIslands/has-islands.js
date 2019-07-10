'use strict';

module.exports = function hasIslands(graph) {
  const keys = Object.keys(graph);
  let visitedVertices = [];

  graph.forEach(vertex => {
    if (!vertex) {
      return false;
    }
  });
  visitedVertices.push(graph[0].key);
  addVisited(graph[0], visitedVertices, graph);

  if (visitedVertices.length === keys.length) {
    return true;
  } else {
    return false;
  }
};

function addVisited(key, visitedVertices, graph) {
  let current = this.head;
  while (current !== null) {
    if (!visitedVertices.includes(current.value)) {
      visitedVertices.push(current.value);
    }
    addVisited(graph[current.value], visitedVertices, graph);
    current = this.next;
  }
  return visitedVertices;
}
