import React from 'react'
import Header from '../containers/AddTodo'
import MainSection from '../containers/ContentWrapper'

const App = () => (
  <div className="ui grid">
      <div className="sixteen wide column"> <Header /></div>
      <MainSection />
  </div>
  )

export default App
