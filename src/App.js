import { Fragment } from 'react';
import './App.css';
import About from './components/About';
import Community from './components/Community';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

//function getLibrary(provider) {
//  return new Web3(provider)
//}

function App() {

  return (
    <Fragment>
      <Header />
      <main>
        <Jumbotron />
        <About />
        <Community />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;