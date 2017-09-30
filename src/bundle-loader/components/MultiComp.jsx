import React, { Component } from 'react';
import lazyComp0 from 'bundle-loader?lazy&name=comp0!./Comp0';
import lazyComp1 from 'bundle-loader?lazy&name=comp1!./Comp1';
import lazyComp2 from 'bundle-loader?lazy&name=comp2!./Comp2';
import lazyComp3 from 'bundle-loader?lazy&name=comp3!./Comp3';
import lazyComp4 from 'bundle-loader?lazy&name=comp4!./Comp4';
import lazyComp5 from 'bundle-loader?lazy&name=comp5!./Comp5';
import lazyComp6 from 'bundle-loader?lazy&name=comp6!./Comp6';
import lazyComp7 from 'bundle-loader?lazy&name=comp7!./Comp7';
import lazyComp8 from 'bundle-loader?lazy&name=comp8!./Comp8';
import lazyComp9 from 'bundle-loader?lazy&name=comp9!./Comp9';


const LAZY_COMPONENTS = {
  'comp0': lazyComp0,
  'comp1': lazyComp1,
  'comp2': lazyComp2,
  'comp3': lazyComp3,
  'comp4': lazyComp4,
  'comp5': lazyComp5,
  'comp6': lazyComp6,
  'comp7': lazyComp7,
  'comp8': lazyComp8,
  'comp9': lazyComp9,
};


export default class MultiComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      component: props.default || null,
    };
  }

  load(name) {
    const lazy = LAZY_COMPONENTS[name];
    if (lazy) {
      lazy((loaded) => {
        const Component = loaded.default;
        this.setState({ component: <Component {...this.props} /> })
      })
    }
  }

  componentDidMount() {
    this.load(this.props.name);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.name !== this.props.name) {
      this.load(nextProps.name);
    }
  }

  render() {
    return this.state.component;
  }
}
