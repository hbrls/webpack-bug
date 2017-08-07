import React, { Component } from 'react';
import lazyComp1 from 'bundle-loader?lazy&name=comp1!./Comp1';
import lazyComp2 from 'bundle-loader?lazy&name=comp2!./Comp2';


const LAZY_COMPONENTS = {
  'comp1': lazyComp1,
  'comp2': lazyComp2,
};


export default class MultiComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: props.default || null,
    };
  }

  componentDidMount() {
    const lazy = LAZY_COMPONENTS[this.props.name];
    if (lazy) {
      lazy((loaded) => {
        const Component = loaded.default;
        this.setState({ component: <Component /> })
      })
    }
  }

  render() {
    return this.state.component;
  }
}
