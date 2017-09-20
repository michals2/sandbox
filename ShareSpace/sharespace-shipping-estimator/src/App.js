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
      items: [],
      total: 0,
      inputItem: {
        type: "",
        dimL: 0,
        dimH: 0,
        dimW: 0
      }
    };
    this.handleInputItemChange = this.handleInputItemChange.bind(this);
    this.handleItemSubmit = this.handleItemSubmit.bind(this);
  }

  handleInputItemChange(pl, field) {
    const newInputItem = { ...this.state.inputItem };
    newInputItem[field] = pl;
    this.setState({ inputItem: newInputItem });
  }

  handleItemSubmit() {
    this.setState({
      items: [...this.state.items, { ...this.state.inputItem }]
    });
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
              inputItem={this.state.inputItem}
              handleInputItemChange={this.handleInputItemChange}
              handleItemSubmit={this.handleItemSubmit}
            />
            <ItemTable items={this.state.items} />
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
