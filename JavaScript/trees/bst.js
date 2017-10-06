function Tree(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

Tree.prototype.addNode = function(val) {
  let curr = this;
  while (curr) {
    if (val < curr.val && curr.left === null) {
      curr.left = new Tree(val);
      return;
    } else if (val > curr.val && curr.right === null) {
      curr.right = new Tree(val);
      return;
    }
  }
};

const tree1 = new Tree(4);
console.log(tree1);
tree1.addNode(3);
console.log(tree1);
