import React, { Component } from 'react';
import MultiComp from './components/MultiComp';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comp1: false,
      comp2: false,
      random: '',
    };

    this.toggle = this.toggle.bind(this);
    this.load = this.load.bind(this);
  }

  toggle(key) {
    this.setState({ [key]: !this.state[key] });
  }

  load() {
    const random = `comp${Math.floor(Math.random() * 10)}`;
    this.setState({ random });
  }

  render() {
    const { comp1, comp2, random } = this.state;

    return (
      <div className="container">
        <hr />
        <div className="row">
          <div className="col-md-6 example">
            <button type="button" className="btn btn-default" onClick={() => this.toggle('comp1')}>toggle comp 1</button>
            <br />
            {comp1 && <MultiComp name="comp1" klass="klass1" />}
          </div>
          <div className="col-md-6 example">
            <button type="button" className="btn btn-default" onClick={() => this.toggle('comp2')}>toggle comp 2</button>
            <br />
            {comp2 && <MultiComp name="comp2" klass="klass2" />}
          </div>
        </div>
        <hr/>
        <div className="row">
          <div className="col-md-6 example">
            <button type="button" className="btn btn-default" onClick={() => this.load()}>load random: {random}</button>
            {random && <MultiComp name={random} />}
          </div>
        </div>
      </div>
    );
  }
}
