handleInputChange(event, index, value) {
  console.log(value);
  const newInputItem = { ...this.state.inputItem };
  newInputItem[value.field] = value.val;
  this.setState({ inputItem: newInputItem });
}

<SelectField
floatingLabelText="Item Type"
value={props.inputItem.type}
onChange={props.handleInputChange}
>
<MenuItem value={{ field: "type", val: "box" }} primaryText="Box" />
<MenuItem value={{ field: "type", val: "couch" }} primaryText="Couch" />
<MenuItem value={{ field: "type", val: "chair" }} primaryText="Chair" />
<MenuItem value={{ field: "type", val: "lamp" }} primaryText="Lamp" />
<MenuItem value={{ field: "type", val: "bed" }} primaryText="Bed" />
</SelectField>