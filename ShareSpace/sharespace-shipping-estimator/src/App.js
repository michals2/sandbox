import React, { Component } from "react";
import "./App.css";

// Custom Components
import Input from "./components/Input";

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
        dimensions: {
          l: 0,
          w: 0,
          h: 0
        }
      }
    };
    this.handleInputTypeChange = this.handleInputTypeChange.bind(this);
    this.handleInputDimChange = this.handleInputDimChange.bind(this);
  }

  handleInputTypeChange(event, index, value) {
    const newInputItem = { ...this.state.inputItem };
    newInputItem.type = value;
    this.setState({ inputItem: newInputItem });
  }

  handleInputDimChange(event, index, value) {
    const newInputItem = { ...this.state.inputItem };
    newInputItem.dimensions = value;
    this.setState({ inputItem: newInputItem });
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
              handleInputTypeChange={this.handleInputTypeChange}
              handleInputDimChange={this.handleInputDimChange}
            />
          </Card>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
