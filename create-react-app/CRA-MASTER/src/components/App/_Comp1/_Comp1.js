import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import React from "react";

import * as actionGenerators from "model/actions/actionGenerators";

class _Comp1 extends React.Component {
  componentWillMount() {
    this.props.actionGenerators.fetchStuff();
  }

  renderData() {
    console.log(this);
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
    return (
      <div className="">
        {this.props.stuff.length > 0
          ? this.renderData()
          : <div className="">No Data</div>}
      </div>
    );
  }
}

_Comp1.propTypes = {
  actionGenerators: PropTypes.object,
  stuff: PropTypes.array
};

function mapStateToProps(state) {
  return {
    stuff: state.stuff
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actionGenerators: bindActionCreators(actionGenerators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(_Comp1);
