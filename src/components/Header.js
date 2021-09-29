import './Header.css';
import logo from '../images/logo.png';
import { Fragment } from 'react';
import { useWeb3React } from "@web3-react/core"
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import { injected } from "../components/wallets/connectors"

function Header({ Component, pageProps }, props) {
    const { active, account, library, connector, activate, deactivate } = useWeb3React()

    function getLibrary(provider) {
        return new Web3(provider)
      }

    async function connect() {
        try {
          await activate(injected)
        } catch (ex) {
          console.log(ex)
        }
      }
    
      async function disconnect() {
        try {
          deactivate()
        } catch (ex) {
          console.log(ex)
        }
      }

    return (
        <Web3ReactProvider getLibrary={getLibrary}>
        <Component {...pageProps} />
        </Web3ReactProvider>
        <Fragment>
            
            <header>
                <div className='main-logo'>
                    <img src={logo} alt='Logo' />
                </div>
                <nav className='connectwallet'>
                    <button onClick={connect}>Connect Wallet</button>
                </nav>
            </header>
        </Fragment >
    )
}

export default Header;