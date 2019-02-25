import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css'
import Header from './componets/Header';
import { InputData } from './componets/InputData'
import family from './componets/family'
import { printData } from './componets/printData'
import { store } from './utils/store';

class App extends Component {

  componentDidMount() {
    store.getUserList();
  }

  render() {
    return (

      <div className="App">
        <Header />
        <Switch>

          {/* <Route to='/' render={()=>
        <Redirect path='/InputData'/>
      }/> */}
          <Route path='/InputData' component={InputData} />
          <Route path='/family' component={family} />
          <Route to='/' component={printData} />
        </Switch>
      </div>


    );
  }
}

export default App;
