import React, { useState } from "react";
import { Box, Nav, Main, Button, Grommet, Heading, Image, Footer, Paragraph, TextInput, Tabs, Tab } from "grommet";
import { customTheme } from "./theme";
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import { master } from './contracts';
import Timer from "./components/Timer";

function App() {
  
  let currentAccount;
  let provider;
  let chainid;

  let masterContract;

  const [connected, setConnected] = useState(false);
  const [initialized, setinitialized] = useState(false);
  const [disableTimer, setDisableTimer] = useState(true);
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const Init = async () => {

    setinitialized(true);
    
    chainid = await window.ethereum.request({ method: 'eth_chainId' });
    chainid = parseInt(chainid, 16)

    provider = await detectEthereumProvider({ mustBeMetaMask: true });
    if (provider) {
      startApp(provider);
    } else {
      console.log('Please install MetaMask!');
    }
    function startApp(provider) {
      const web3 = new Web3(provider);
      masterContract = new web3.eth.Contract(master.abi, '0xd1352Bb7A1b3519e53FED5f13658B7FB3B1504dF');
      // remember to replace abi and addresses
      if (provider !== window.ethereum) {
        console.error('Do you have multiple wallets installed?');
      }
    }
      
    window.ethereum
      .request({ method: 'eth_accounts' })
      .then(handleAccountsChanged)
      .catch((err) => {
        console.error(err);
    });
  }

  if (initialized === false) {
    Init();
  }
  
  if (initialized === false) {
    window.ethereum.once('chainChanged', handleChainChanged);
  }
  function handleChainChanged(chainid) {
    if (chainid === 4002) {
      handleAccountsChanged();
    } else {
      window.location.reload();
    }
    
  }

  if (initialized === false) {
    window.ethereum.on('accountsChanged', handleAccountsChanged);
  }
  function handleAccountsChanged(accounts) {
    if (chainid === 4002) {
      if (accounts.length === 0) {
        console.log('Please connect to MetaMask.');
        setConnected(false)
      }
      else if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];
        setConnected(true);
        timerinit();
      }
    } else {
      console.log('Please connect to FTM Mainnet');
    }
  }

  function connect() {
    window.ethereum
      .request({ method: 'eth_requestAccounts' })
      .then(handleAccountsChanged)
      .catch((err) => {
        if (err.code === 4001) {
          console.log('Please connect to MetaMask.');
        } else {
          console.error(err);
        }
      });
  }

  function timerinit() {
    let timedifference = 0;
    let timeremaining = 0;
    if (localStorage.getItem('timestart') != null) {
      timedifference = Math.floor(Date.now() / 1000) - localStorage.getItem('timestart');
      timeremaining = localStorage.getItem('cooldown') - timedifference;
    };
    if (timeremaining > 0) {      
      setMinutes(Math.floor(timeremaining / 60));
      setSeconds(timeremaining % 60);
      setDisableTimer(false);
    } else {
      setDisableTimer(true);
    };
  }




  return (
    <Grommet theme={customTheme} full>
      <Box overflow="auto" align="stretch" justify="start" direction="column" background={{ "color": "dark-2" }} fill responsive>
        <Nav align="center" flex="shrink" justify="between" direction="row" pad={{ "horizontal": "medium" }} overflow="visible" fill="horizontal" height={{"min":"xsmall"}}>
          <Heading level="3" size="medium" textAlign="center" color="white">
            Arsenal
          </Heading>
          {
            connected ?
              <Button label="Connected" active={false} disabled={false} primary color="white" />
              :
              <Button onClick={() => connect()} label="Connect Wallet" active={false} disabled={false} primary color="white" />
          }
        </Nav>            
        <Main flex="grow" overflow="visible" align="stretch" justify="start" direction="column" fill="horizontal">
              <Box align="center" justify="center" direction="column" flex="grow" overflow="hidden" responsive fill="horizontal">
                {
                  disableTimer ?
                    <div></div>
                    :
                    <Heading level="2" textAlign="center" color="white" size="medium" margin={{ "bottom": "small" }}>
                      Able to mint in:
                    </Heading>
                }
                {
                  disableTimer ?
                    <Heading level="2" size="large" textAlign="center" color="white" margin={{ "bottom": "medium", "top": "small" }}>
                      Mint Open!
                    </Heading>
                    :
                    <Timer initialMinute={minutes} initialSeconds={seconds} timerDisabler={setDisableTimer}></ Timer>
                }
              </Box>
              <Box align="center" justify="center" direction="column" flex="grow" overflow="hidden" responsive fill="horizontal">
                <Heading level="1" size="medium" textAlign="center" color="white" margin="small">
                  Mint your Arsenal!
                </Heading>
              </Box>
              <Main pad="medium" align="center" justify="center" direction="row-responsive" overflow="hidden" fill="horizontal" flex="grow">

              </Main>
              <Footer align="center" direction="row" flex justify="center" gap="medium" pad="large">
                <Heading level="3" size="small" textAlign="center" color="white">
                  Social Media stuff goes here
                </Heading>
              </Footer>
        </Main>
      </Box>
    </Grommet>
  );
}

export default App;
