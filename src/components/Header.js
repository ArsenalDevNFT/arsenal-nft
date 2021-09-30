import './Header.css';
import { Fragment } from 'react';
import { useWeb3React } from "@web3-react/core"
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import { injected } from "../components/wallets/connectors"

function Header(props) {


    return (
        <Fragment>
            
            <header>
                <div className='main-logo'>
                </div>
                <nav className='connectwallet'>
                    <button>Connect Wallet</button>
                </nav>
            </header>
        </Fragment >
    )
}

export default Header;