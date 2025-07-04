import React, { useState } from 'react'
import './App.css'
import Body from './components/Body'
import { Provider } from 'react-redux'
import appstore from './utils/AppStore'

function App() {

  return(
     <Provider store={appstore}>
       <Body/>
       </Provider>
  )
}

export default App
