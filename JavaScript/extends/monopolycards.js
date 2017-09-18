class Square {
  constructor(name, type, id) {
    this.name = name;
    this.type = type;
    this.id = id;
  }
}

class PurchasableSquare extends Square {
  constructor(cost, name, type, id) {
    super(name, type, id);
    this.cost = cost;
  }
}

class PropertySquare extends PurchasableSquare {
  constructor(cost, name, type, id, color, rent, group, house) {
    super(cost, name, type, id);
    this.color = color;
    this.rent = rent;
    this.group = group;
    this.house = house;
  }
}

class RailroadSquare extends PurchasableSquare {
  constructor(cost, name, type, id, group) {
    super(cost, name, type, id);
    this.group = group;
  }
}

// const atlanticSquare = new PropertySquare(
//   200,
//   "Atlantic",
//   "property",
//   4,
//   "yellow",
//   [50, 75, 100, 150],
//   [3, 4, 6],
//   50
// );

const boardData = [
  new PropertySquare(
    200,
    "Atlantic",
    "property",
    4,
    "yellow",
    [50, 75, 100, 150],
    [3, 4, 6],
    50
  ),
  { type: "property" }
];
