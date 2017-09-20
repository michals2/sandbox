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
    this.setState({ distance: val });
  }

  handleInputItemChange(pl, field) {
    const newInputItem = { ...this.state.inputItem };
    newInputItem[field] = pl;
    this.setState({ inputItem: newInputItem });
  }

  handleItemSubmit() {
    const itemCharge = this.calcualteItemCharge(
      this.state.distance,
      this.state.inputItem
    );
    this.setState({
      items: [...this.state.items, { ...this.state.inputItem, itemCharge }]
    });
  }

  calcualteItemCharge(distance, item) {
    // givens
    const serviceCharges = {
      Couch: 50,
      Char: 50,
      Lamp: 100,
      Bed: 20
    };
    const costPerSqFtPerMile = 2;

    // organize function arguments
    const { type } = item;
    const dimensions = [item.dimL, item.dimH, item.dimW];

    // use 2 largest dimensions to calculate area
    const area = dimensions
      .sort((a, b) => b - a)
      .slice(0, 2)
      .reduce((a, c) => a * c);

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
            <ItemTable items={this.state.items} />
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
