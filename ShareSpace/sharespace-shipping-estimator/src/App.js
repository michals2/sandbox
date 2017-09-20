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
      items: [],
      totalCharge: 0,
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
  }

  handleDistanceChange(val) {
    // console.log(typeof val)
    this.setState({ distance: val }, this.updateItemCharges);
  }

  handleInputItemChange(pl, field) {
    const newInputItem = { ...this.state.inputItem };
    newInputItem[field] = pl;
    this.setState({ inputItem: newInputItem });
  }

  handleItemSubmit() {
    // organize arguments
    const distance = this.state.distance;
    const item = this.state.inputItem;
    const validTypes = ["Box", "Couch", "Chair", "Lamp", "Bed"];

    // check input item fields
    if (isNaN(distance)) return alert("Distance isn't a number");
    if (isNaN(item.dimH) || isNaN(item.dimL) || isNaN(item.dimW))
      return alert("Dimensions invalid");
    if (!validTypes.includes(item.type)) return alert("Item type not selected");

    const itemCharge = this.calcualteItemCharge(
      this.state.distance,
      this.state.inputItem
    );

    console.log(itemCharge);
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
      newItem.charge = this.calcualteItemCharge(this.state.distance, newItem);
      return newItem;
    });

    this.setState({ items: newItems }, this.updateTotalCharge);
  }

  updateTotalCharge() {
    console.log("updating total");
    const totalCharge = this.state.items.reduce((a, c) => a + c.itemCharge, 0);
    this.setState({ totalCharge });
  }

  calcualteItemCharge(distance, item) {
    // givens
    const serviceCharges = {
      Couch: 50,
      Chair: 50,
      Lamp: 100,
      Bed: 20
    };
    const costPerSqFtPerMile = 2;

    // organize function arguments
    const { type } = item;
    const dimensions = [item.dimL, item.dimH, item.dimW];

    console.log(type);

    // use 2 largest dimensions to calculate area
    const area = dimensions
      .sort((a, b) => b - a)
      .slice(0, 2)
      .reduce((a, c) => a * c);

    // calculate charges
    const serviceCharge = serviceCharges[type];
    const distanceCharge = area * distance * costPerSqFtPerMile;
    const totalCharge = serviceCharge + distanceCharge;
    console.log({ area, serviceCharge, distanceCharge, totalCharge });
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
            />
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
