import React, { Component } from "react";
import "./App.css";

// Custom Components
import Input from "./components/Input";
import ItemTable from "./components/ItemTable";

// Material-UI components
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Card, CardHeader } from "material-ui/Card";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      distance: "",
      // distance: 30,
      items: [],
      totalCharge: 0,
      // inputItem: {
      //   type: "Lamp",
      //   dimL: 2,
      //   dimH: 4,
      //   dimW: 7
      // }
      inputItem: {
        type: "",
        dimL: "",
        dimH: "",
        dimW: ""
      }
    };
    this.handleInputItemChange = this.handleInputItemChange.bind(this);
    this.handleItemSubmit = this.handleItemSubmit.bind(this);
    this.handleDistanceChange = this.handleDistanceChange.bind(this);
    this.handleItemRemove = this.handleItemRemove.bind(this);
  }

  handleItemRemove(index) {
    const newItems = [
      ...this.state.items.slice(0, index),
      ...this.state.items.slice(index + 1)
    ];
    this.setState({ items: newItems }, this.updateTotalCharge);
  }

  handleDistanceChange(val) {
    this.setState({ distance: val }, this.updateItemCharges);
  }

  handleInputItemChange(pl, field) {
    const newInputItem = { ...this.state.inputItem };
    newInputItem[field] = pl;
    this.setState({ inputItem: newInputItem });
  }

  handleItemSubmit() {
    // assumptions
    const maxDimension = 60;

    // organize arguments
    const distance = +this.state.distance;
    const item = this.state.inputItem;
    const dimensions = [+item.dimH, +item.dimL, +item.dimW];
    const validTypes = ["Box", "Couch", "Chair", "Lamp", "Bed"];

    // check input item fields
    if (isNaN(distance)) return alert("Distance isn't a number");
    if (dimensions.some(item => isNaN(item)))
      return alert("Dimensions invalid");
    // if (isNaN(item.dimH) || isNaN(item.dimL) || isNaN(item.dimW))
    //   return alert("Dimensions invalid");

    if (!validTypes.includes(item.type)) return alert("Item type not selected");

    const itemCharge = this.calcualteItemCharge(
      this.state.distance,
      this.state.inputItem
    );

    this.setState(
      {
        items: [...this.state.items, { ...this.state.inputItem, itemCharge }]
      },
      this.updateTotalCharge
    );
  }

  updateItemCharges() {
    // create a deep clone and update the item charge
    const newItems = this.state.items.map(e => {
      const newItem = { ...e };
      newItem.itemCharge = this.calcualteItemCharge(
        +this.state.distance,
        newItem
      );
      return newItem;
    });

    this.setState({ items: newItems }, this.updateTotalCharge);
  }

  updateTotalCharge() {
    const totalCharge = this.state.items.reduce((a, c) => a + c.itemCharge, 0);
    this.setState({ totalCharge });
  }

  calcualteItemCharge(distance, item) {
    // givens
    const serviceCharges = {
      Couch: 50,
      Chair: 50,
      Lamp: 100,
      Bed: 20,
      Box: 0
    };
    const costPerSqFtPerMile = 2;

    // assumptions
    const rotatable = {
      Couch: false,
      Chair: true,
      Lamp: true,
      Bed: true,
      Box: true
    };

    // organize function arguments
    const { type } = item;
    const dimensions = [+item.dimL, +item.dimH, +item.dimW];

    // calculate the area the item takes up on the truck
    // use 2 largest dimensions to calculate area
    let area = rotatable[item]
      ? dimensions.sort((a, b) => a - b).slice(0, 2).reduce((a, c) => a * c)
      : item.dimL * item.dimW;

    // calculate charges
    const serviceCharge = serviceCharges[type];
    const distanceCharge = area * distance * costPerSqFtPerMile;
    const totalCharge = serviceCharge + distanceCharge;
    return totalCharge;
  }

  render() {
    return (
      <div className="App">
        <MuiThemeProvider>
          <Card style={{ padding: "10px" }}>
            <CardHeader
              title="Sharespace Shipping Cost Estimator"
              subtitle="Note: All costs are estimates only"
            />
            <Input
              distance={this.state.distance}
              inputItem={this.state.inputItem}
              handleInputItemChange={this.handleInputItemChange}
              handleItemSubmit={this.handleItemSubmit}
              handleDistanceChange={this.handleDistanceChange}
            />
            <ItemTable
              items={this.state.items}
              totalCharge={this.state.totalCharge}
              handleItemRemove={this.handleItemRemove}
            />
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
