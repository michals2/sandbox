function firstDuplicate(a) {
  const arrI = a.reduceRight(
    (a, c, i) => {
      console.log("*******")
      if (a.prev.includes(c) && (a.index === -1 || i < a.index)) a.index = i;
      a.prev.unshift(c);
      console.log(a)
      console.log(c)
      return a;
    },
    { index: -1, prev: [] }
  ).index;
  console.log(arrI)
  return arrI === -1 ? -1 : a[arrI];
}

console.log(firstDuplicate([2, 3, 3, 1, 5, 2]), 3);
// console.log(firstDuplicate([2, 4, 3, 5, 1]), -1);
// console.log(firstDuplicate([1, 1, 2, 2, 1]), 1);
