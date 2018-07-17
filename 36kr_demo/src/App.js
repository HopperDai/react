import React, { Component } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Index from './component/Index'
import Detail from './component/Detail';

import { BrowserRouter,Switch,Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header></Header>
          <Switch>
            <Route exact path='/' component={Index}></Route>
            <Route path='/detail/:id/' component={Detail}></Route>
          </Switch>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
