import React, { Component } from 'react'
import { store } from '../utils/store';
import ListItem from './ListItem';


export class printData extends Component {
  state = {
    users: [],
    sorted: "name",
    filtered: "",
  }

  componentDidMount() {
    this.setState({ users: store.getUserList() });
  }

  onInputChange = (event) => {
    this.setState({ filtered: event.target.value });
  }

  onSortChange = (event) => {
    this.setState({ sorted: event.target.value })
  };

  render() {
    const { users, sorted, filtered } = this.state;


    console.log(
      users.map(user => user.name)
    );

    return (
      <div className="App">
        <select
          value={sorted}
          onChange={this.onSortChange}>
          <option value="name">Ime</option>
          <option value="lastName">Prezime</option>
          <option value="address">Adresa</option>
        </select>
        <input
          type="search"
          placeholder="Upiši tekst"
          value={filtered}
          onChange={this.onInputChange}
        />
        <ul>
          {users.filter(user => user[sorted].toLowerCase().includes(filtered.toLowerCase()))
            .map(user => (<ListItem key={user.id} user={user} name="wuhu" />))}
        </ul>
      </div>
    );
  }
}

