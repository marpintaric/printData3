import React, { Component } from 'react'



class family extends Component {
  constructor(props){
    super(props);
    this.state = {
      podaci: [],
      ispisPodataka: false,
      family: null,
      ispisObjekta: false
    }

    this.checkOutFamily = this.checkOutFamily.bind(this)

  }
  componentDidMount (){
    const podaci = localStorage.getItem('podaci')
     this.setState({podaci: podaci ? [...JSON.parse(podaci)] : []}, )
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
    const { ispisObjekta, family} = this.state;
    return (
      <div className="App">
        
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
         {/* <InputData /> */}
      </div>
    );
  }
}

export default family;
