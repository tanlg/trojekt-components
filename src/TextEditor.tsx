import React, { Component } from 'react';

export default class extends Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    const name = '麻凡的麻烦生活';
    return <button>{name}</button>;
  }
}
