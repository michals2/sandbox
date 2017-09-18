/**
 * Write a function implementing the _________ data structure" 
 *  Stack
 *  Binary Tree
 * Now rewrite your work without using loops (recursively)
*/

// function Stack() {
//   this.storage = [];
// }
// Stack.prototype.add = function(value) {
//   this.storage.unshift(value);
// };
// Stack.prototype.remove = function() {
//   this.storage.shift();
// };
// const stack1 = new Stack();
// stack1.add("a");
// stack1.add("b");
// stack1.add("c");
// console.log(stack1);
// stack1.remove();
// stack1.remove();
// console.log(stack1);

function BinaryTree(head) {
  this.v = head;
  this.l = null;
  this.r = null;
}

BinaryTree.prototype.addWithLoop = function(val) {
  curr = this;
  while (curr) {
    if (val < curr.v) {
      if (!curr.l) {
        curr.l = new BinaryTree(val);
        break;
      } else {
        curr = curr.l;
      }
    } else {
      if (!curr.r) {
        curr.r = new BinaryTree(val);
        break;
      } else {
        curr = curr.r;
      }
    }
  }
};

BinaryTree.prototype.addWithRecursion = function(val) {
  // base cases
  if (val < this.v && !this.l) {
    this.l = new BinaryTree(val);
    return;
  }
  if (val >= this.v && !this.r) {
    this.r = new BinaryTree(val);
    return;
  }
  // recursive cases
  if (val < this.v) {
    this.l.addWithRecursion(val);
  } else {
    this.r.addWithRecursion(val);
  }
};

const binaryTree1 = new BinaryTree(5);
console.log(binaryTree1);
// binaryTree1.addWithLoop(3);
// binaryTree1.addWithLoop(6);
// console.log(binaryTree1);
binaryTree1.addWithRecursion(3);
binaryTree1.addWithRecursion(6);
console.log(binaryTree1);

/*************************************************************/

BinaryTree.prototype.depthFirstPre = function(val) {
  if (this) {
    console.log(this.v);
    let left = false;
    let right = false;
    if (this.v === val) return true;
    if (this.l) left = this.l.depthFirstPre(val);
    if (this.r) right = this.r.depthFirstPre(val);
    return left || right;
  }
  return false;
};
BinaryTree.prototype.depthFirstIn = function(val) {
  if (this) {
    console.log(this.v);
    let left = false;
    let right = false;
    if (this.l) left = this.l.depthFirstIn(val);
    if (this.v === val) return true;
    if (this.r) right = this.r.depthFirstIn(val);
    return left || right;
  }
  return false;
};
BinaryTree.prototype.depthFirstPost = function(val) {
  if (this) {
    console.log(this.v);
    let left = false;
    let right = false;
    if (this.l) left = this.l.depthFirstPost(val);
    if (this.r) right = this.r.depthFirstPost(val);
    if (this.v === val) return true;
    return left || right;
  }
  return false;
};

BinaryTree.prototype.breadthFirst = function(val) {};

console.log(binaryTree1.depthFirstPre(6));
console.log(binaryTree1.depthFirstIn(6));
console.log(binaryTree1.depthFirstPost(6));
