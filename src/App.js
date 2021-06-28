import React from 'react'
import { Landing, SignIn, SignUp } from './pages'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/register' component={SignUp} />
        <Route path='/signin' component={SignIn} />
      </Switch>
    </Router>
  )
}


export default App