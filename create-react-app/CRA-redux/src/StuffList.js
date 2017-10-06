import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import React from "react";

import * as stuffActions from "./actions/stuffActions";

class stuffList extends React.Component {
  componentWillMount() {
    this.props.stuffActions.fetchStuff();
  }

  renderData() {
    return (
      <div>
        {this.props.stuff.map(e =>
          <div key={e.id}>
            {e.title}
          </div>
        )}
      </div>
    );
  }

  render() {
    console.log(this);
    return (
      <div className="">
        {this.props.stuff.length > 0
          ? this.renderData()
          : <div className="">No Data</div>}
      </div>
    );
  }
}

stuffList.propTypes = {
  stuffActions: PropTypes.object,
  stuff: PropTypes.array
};

function mapStateToProps(state) {
  return {
    stuff: state.stuff
  };
}

function mapDispatchToProps(dispatch) {
  return {
    stuffActions: bindActionCreators(stuffActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(stuffList);
