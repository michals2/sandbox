// rcc
// class component skeleton
import React, { Component } from 'react';

class componentName extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default componentName;


// rccp
// class component skeleton with prop types after the class
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class componentName extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

componentName.propTypes = {

};

export default componentName;


// rcjc
// class component skeleton without import and default export lines
class componentName extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}


// rcfc
// class component skeleton that contains all the lifecycle methods
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class componentName extends Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentWillUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

componentName.propTypes = {

};

export default componentName;

// rwwd
// class component without import statements
class componentName extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {
    return(
      <div>

      </div>
    );
  }
}

componentName.propTypes = {

};

export default componentName;

// rsc
// stateless component skeleton
import React from 'react';

const componentName = () => {
  return (
    <div>
      
    </div>
  );
};

export default componentName;

// rscp
// stateless component with prop types skeleton
import React from 'react';
import PropTypes from 'prop-types';

const componentName = props => {
  return (
    <div>
      
    </div>
  );
};

componentName.propTypes = {
  
};

export default componentName;

// rpt
// empty propTypes declaration
.propTypes = {
  
};

// con
// class default constructor with props
constructor(props) {
  super(props);
  
}


// conc
// class default constructor with props and context
constructor(props, context) {
  super(props, context);
  
}


// est
// empty state object

// cwm
// componentWillMount method

// cdm
// componentDidMount method

// cwr
// componentWillReceiveProps method

// scu
// shouldComponentUpdate method

// cwup
// componentWillUpdate method

// cdup
// componentDidUpdate method

// cwun
// componentWillUnmount method

// ren
// render method

// sst
// this.setState with object as parameter

// ssf
// this.setState with function as parameter

// props
// this.props

// state
// this.state

// bnd
// binds the this of method inside the constructor

