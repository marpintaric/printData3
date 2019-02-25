import React, { Component } from 'react'
import store from '../utils/store';


export class InputData extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.saveDatafun = this.saveDatafun.bind(this)
    //this.findId = this.findId.bind(this)

    this.state = {
      saveData: {
        id: "",
        name: "",
        lastName: "",
        address: "",
        zip: "",
        birthDate: ""
      },
      data: [],
      dataExits: false,

    }
  }

  componentDidMount() {
    const podaci = localStorage.getItem('podaci')
    this.setState({ podaci: podaci ? [...JSON.parse(podaci)] : [] })
    const parsedPodaci = JSON.parse(podaci)

    console.log(parsedPodaci[parsedPodaci.length - 1].id)
  }

  saveDatafun() {
    const { podaci, saveData } = this.state

    if (store.userExist(saveData.name, saveData.lastName)) {
      console.log('existing');
    } else {
      store.addUserToList(saveData);
    }

    if (saveData.name.trim().length > 0 &&
      saveData.lastName.trim().length &&
      saveData.address.trim().length &&
      saveData.zip.trim().length &&
      saveData.birthDate.trim().length) {
      if (localStorage == null) {
        podaci.push(saveData)
        this.setState({ podaci })
        localStorage.setItem('podaci', JSON.stringify(podaci));
      }
      else {
        let dataExist = podaci.filter(n => n.lastName === saveData.lastName && n.name === saveData.name)
        console.log('dataExist', dataExist)

        if (dataExist.length === 0) {

          //  { let findIdpodaci = podaci.lenght;
          //      findId = () => {
          //       findIdpodaci--,
          //        console.log(findIdpodaci)

          saveData['id'] = podaci[podaci.length - 1].id + 1
          console.log('saveData', saveData)

          podaci.push(saveData)
          this.setState({ podaci })
          localStorage.setItem('podaci', JSON.stringify(podaci));
        }
        else {
          this.setState({ dataExits: true })
        }

      }
    }
  }
  onChange(event) {
    event.preventDefault()
    const { saveData } = this.state

    saveData[event.target.name] = event.target.value
    console.log(event.target.value)
    this.setState({
      saveData
    })

  }

  render() {
    const { saveData, dataExits } = this.state
    return (
      <div>
        {
          dataExits === true &&
          <div><span>Postoji već taj podatak</span><br /></div>
        }
        <input
          type="text"
          name="name"
          placeholder="firstName"
          value={saveData.name}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="lasttName"
          value={saveData.lastName}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="address"
          placeholder="address"
          value={saveData.address}
          onChange={this.onChange}
        />
        <input
          type="text"
          name="zip"
          placeholder="zip"
          value={saveData.zip}
          onChange={this.onChange}
        />

        <input
          type="date"
          name="birthDate"
          placeholder="birthDate"
          value={saveData.birthDate}
          onChange={this.onChange}
        /> <br />
        <button
          value="submit"
          onClick={this.saveDatafun}>Posalji</button>

      </div>
    )
  }
}