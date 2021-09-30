import './Header.css';
import { Fragment } from 'react';

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