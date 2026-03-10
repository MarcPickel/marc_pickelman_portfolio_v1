//import { useState } from 'react'

import './App.css'

import Header from "./features/Header/Header.tsx";
import Main from "./features/Main/Main.tsx";
import Footer from "./features/Footer/Footer.tsx";

function App() {

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Main />
        {/*<About />*/}
        {/*<MidwestPage />*/}
        {/*<LiteraturePage />*/}
        {/*<LinguisticsPage />*/}
        <Footer />
      </div>
    </div>
  )
}

export default App
