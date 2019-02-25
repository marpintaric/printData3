import React, { Component } from 'react'
import './App.css'
import Data from "./podaci.js"
import InputData from "./InputData"

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      podaci: [],
      ispisPodataka: false,
      family: null,
      ispisObjekta: false
    }

    this.ispisPodatakaHandler = this.ispisPodatakaHandler.bind(this)
    this.checkOutFamily = this.checkOutFamily.bind(this)

  }
  componentDidMount (){
    this.setState({ podaci: Data.podaci})
  }

 
  ispisPodatakaHandler = () => {
    let {ispisPodataka} = this.state
    this.setState({
      ispisPodataka: !ispisPodataka
      
    })
  }

    checkOutFamily () {
      const {lastName, address} = this.state.podaci[8]
      console.log(lastName, address)
      let family = this.state.podaci.filter(clanovi => 
        { 
          console.log(lastName,clanovi.lastName)
          return clanovi.lastName === lastName && clanovi.address === address 
        })
      console.log(family)

      let ob = {
        lastName: lastName,
        address : address,
        names: [...family]
      }

      let{ispisObjekta} = this.state
      this.setState({
        ispisObjekta: !ispisObjekta,
        family : ob
      })


    }


  render() {
    const {podaci, ispisPodataka, ispisObjekta, family} = this.state;
    return (
      <div className="App">
        <header className="App-header">
         Personal information
        </header>
        <button onClick={this.ispisPodatakaHandler}>Ispis podaci</button>
          <ul>
            {ispisPodataka &&
              podaci.map(hit => {
             return <li key={hit.id}>
              <p>Ime: {hit.name}</p>
              <p>Prezime: {hit.lastName}</p>
              <p>Adresa: {hit.address}</p> <br />
            </li>})
            }
          </ul>
          <button onClick={this.checkOutFamily}>Obitelj</button>
          <ul>
            {
              ispisObjekta &&
                family.names.map((clanovi,index)=> {
                  return <li key={index}>
                  <p>Ime:{clanovi.name}</p>
                  <p>Prezime:{clanovi.lastName}</p>
                  <p>Adresa:{clanovi.address}</p>
                  </li>
                })
            }
          </ul>
         <InputData />
      </div>
    );
  }
}

export default App;
