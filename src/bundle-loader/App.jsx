import React, { Component } from 'react';
import MultiComp from './components/MultiComp';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page1: false,
      page2: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(key) {
    this.setState({ [key]: !this.state[key] });
  }

  render() {
    const { page1, page2 } = this.state;

    return (
      <div>
        <h1>bundle-loader example</h1>
        <div>
          <button type="button" onClick={() => this.toggle('page1')}>toggle page 1</button>
          {page1 && <MultiComp name="comp1" />}
        </div>
        <hr/>
        <div>
          <button type="button" onClick={() => this.toggle('page2')}>toggle page 2</button>
          {page2 && <MultiComp name="comp2" />}
        </div>
      </div>
    );
  }
}
