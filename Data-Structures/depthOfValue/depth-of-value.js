'use stirct';

const findValue = (node = null, value = undefined, depth = 0) => {
  if (node === null || value === undefined) {
    return null;
  }
  if (node.value === value) {
    return depth;
  }

  const left = findValue(node.left, value, depth + 1);

  const right = findValue(node.right, value, depth + 1);

  return left || right;
};

module.exports = findValue;
