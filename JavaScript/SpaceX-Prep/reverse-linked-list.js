function Node(val) {
  this.v = val;
  this.n = null;
}

function arrToList(arr) {
  const list = new Node(arr[0]);
  let curr = list;
  for (let i = 1; i < arr.length; i++) {
    curr.n = new Node(arr[i]);
    curr = curr.n;
  }
  return list;
}

function reverseLinkedList(list) {
  let curr = list;
  let prev = null;
  while (curr) {
    const next = curr.n; // save next
    curr.n = prev; // reverse pointer
    prev = curr; // increment prev to curr
    curr = next; // increment node to next node
  }
  return prev;
}

const list1 = arrToList(["a", "b", "c"]);
console.log(list1);
reversedList1 = reverseLinkedList(list1);
console.log(reversedList1);
