import React, { Component } from 'react';
import MultiComp from './components/MultiComp';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comp1: false,
      comp2: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(key) {
    this.setState({ [key]: !this.state[key] });
  }

  render() {
    const { comp1, comp2 } = this.state;

    return (
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-md-6">
            <button type="button" className="btn btn-default" onClick={() => this.toggle('comp1')}>toggle comp 1</button>
            {comp1 && <MultiComp name="comp1" klass="klass1" />}
          </div>
          <div className="col-md-6">
            <button type="button" className="btn btn-default" onClick={() => this.toggle('comp2')}>toggle comp 2</button>
            {comp2 && <MultiComp name="comp2" klass="klass2" />}
          </div>
        </div>
      </div>
    );
  }
}
