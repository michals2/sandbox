class Property {
  constructor(propertyName, group, value, purchasable = true) {
    this.propertyName = propertyName;
    this.group = group;
    this.value = value;
    this.purchasable = purchasable;
  }
}

// function Property(propertyName, group, value, purchasable = true) {
//   this.propertyName = propertyName;
//   this.group = group;
//   this.value = value;
//   this.purchasable = purchasable;
// }

class Specialty {
  constructor(specialtyName, action, inJail = false) {
    this.specialtyName = specialtyName;
    this.action = action;
    this.inJail = inJail;
  }
}

class Player {
  constructor(name) {
    this.name = name;
    this.money = 1500;
    this.properties = [];
    this.position = 0;
  }
  advancePlayer(distance) {
    this.position += distance;
  }
  rollDice() {
    return Math.floor(Math.random() * 6);
  }
}

class Monopoly {
  constructor(playerNames) {
    this.players = playerNames.map(playerName => new Player(playerName));
    this.players.forEach((player, i) => (player.position = i));
    this.turn = 0;
    this.names = [
      new Specialty("Go", "Collect 200"),
      new Property("Mediteranean Avenue", "Brown", 60),
      new Specialty("Community Chest", "Draw Community Chest"),
      new Property("Baltic Avenue", "Brown", 60),
      new Specialty("Income Tax", "Pay 200"),
      new Property("Reading Railroad", "Railroad", 200, false),
      new Property("Oriental Avenue"),
      new Specialty("Chance", "Draw Chance"),
      "Vermont Avenue",
      "Connecticut Avenue",
      new Specialty("Jail / Just Visiting", "None"),
      "St. Charles Place",
      new Property("Electric Company", "Utilities", 150, false),
      "States Avenue",
      "Virginia Avenue",
      new Property("Pennsylvania Railroad", "Railroad", 200, false),
      "St. James Place",
      new Specialty("Community Chest", "Draw Community Chest"),
      "Tennessee Avenue",
      "New York Avenue",
      "Free Parking",
      "Kentucky Avenue",
      new Specialty("Chance", "Draw Chance"),
      "Indiana Avenue",
      "Illinois Avenue",
      new Property("B&O Railroad", "Railroad", 200, false),
      "Atlantic Avenue",
      "Ventnor Avenue",
      new Property("Water Works", "Utilities", 150, false),
      "Marvin Gardens",
      "Go to Jail",
      "Pacific Avenue",
      "North Carolina Avenue",
      new Specialty("Community Chest", "Draw Community Chest"),
      "Pennsylvania Avenue",
      new Property("Short Line Railroad", "Railroad", 200, false),
      "Chance",
      "Park Place",
      "Luxury Tax",
      "Boardwalk"
    ];
  }
}

const game1 = new Monopoly(["Jim", "Suzy", "Bill"]);
console.log(game1.players);
