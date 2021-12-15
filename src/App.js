import React, { useState } from "react";
import { Box, Nav, Main, Button, Grommet, Heading, Image, Footer, TextInput } from "grommet";
import { customTheme } from "./theme";
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import { master } from './contracts';
import Timer from "./components/Timer";
import { Twitter, Tooltip } from 'grommet-icons';

function App() {
  
  //let currentAccount;
  let provider;
  let chainid;

  //let masterContract;

  const [masterContract, setMasterContract] = useState();
  const [currentAccount, setCurrentAccount] = useState();

  const [connected, setConnected] = useState(false);
  const [initialized, setinitialized] = useState(false);
  const [disableTimer, setDisableTimer] = useState(true);
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  const [lookup, setLookup] = useState("");
  const [activenft, setActivenft] = useState("");
  const [mintingamount, setMintingamount] = useState("");

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
      setMasterContract( new web3.eth.Contract(master.abi, '0xBb796E285dB07225853a901f29CbFb64408dF00C') );
      
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
        setCurrentAccount(accounts[0]);
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

  function mintnft(amount) {
    let price = 100000000000000000;
    masterContract.methods.mint(amount).send( {from: currentAccount, value: amount*price} );
  }

  function mintpresalenft() {
    let price = 100000000000000000;
    masterContract.methods.mint(1).send( {from: currentAccount, value: price} );
  }

  function nftfetch(id) {
    let a = "https://arsenalnft.art/nft/";
    let b = ".png";

    return a + id + b;
  }






  return (
    <Grommet theme={customTheme} full>
      <Box overflow="auto" align="stretch" justify="start" direction="column" background={{"image":"url('https://arsenalnft.art/backgroundimage.png')","position":"top"}} fill responsive>
        <Nav align="center" flex="shrink" justify="between" direction="row" pad={{ "horizontal": "medium" }} overflow="visible" fill="horizontal" height={{"min":"medium"}} >
          <Heading>
          </Heading>
        </Nav>            
        <Main flex="grow" overflow="visible" align="stretch" justify="start" direction="column" fill="horizontal">
          <Box align="center" justify="center" direction="column" flex="shrink" overflow="hidden" responsive fill="horizontal" pad="large">
            {
              connected ?
                <Button label="Connected" active={false} disabled={false} primary color="#8b572a" />
                :
                <Button onClick={() => connect()} label="Connect Wallet" active={false} disabled={false} primary color="#8b572a" />
            }
          </Box>
          <Box align="center" justify="center" direction="column" flex="shrink" overflow="hidden" responsive fill="horizontal" pad="large">
            {
              disableTimer ?
                <div></div>
                :
                <Heading level="2" textAlign="center" color="black" size="medium" margin={{ "bottom": "small" }}>
                  Able to mint in:
                </Heading>
            }
            {
              disableTimer ?
                <Heading level="2" size="large" textAlign="center" color="black" margin={{ "bottom": "medium", "top": "small" }}>
                  Mint Open!
                </Heading>
                :
                <Timer initialMinute={minutes} initialSeconds={seconds} timerDisabler={setDisableTimer}></ Timer>
            }
          </Box>
          <Box align="center" justify="center" direction="column" flex="shrink" overflow="hidden" responsive fill="horizontal">
            <Heading level="1" size="medium" textAlign="center" color="black" margin="small">
              View your Arsenal!
            </Heading>
          </Box>
          <Main pad="medium" align="center" justify="center" direction="column" overflow="hidden" fill="horizontal" flex="grow" gap="medium" >
            <Box align="center" justify="center" direction="column" gap="medium">
              <Image src={activenft} />
              <TextInput placeholder="Input NFT # to display" size="large" textAlign="center" type="text" value={lookup} onChange={event => setLookup(event.target.value)} />
              <Button onClick={() => setActivenft(nftfetch(lookup))} label="Display" size="large" primary color="black" />
            </Box>
          </Main>
          <Main pad="medium" align="center" justify="center" direction="column" overflow="hidden" fill="horizontal" flex="grow" gap="medium" >
            <Box align="center" justify="center" direction="column" gap="medium">
              <Heading level="1" size="medium" textAlign="center" color="black" margin="small">
                Mint your Arsenal!
              </Heading>
              <TextInput placeholder="Input amount(limit 10 at a time)" size="large" textAlign="center" type="text" value={mintingamount} onChange={event => setMintingamount(event.target.value)} />
              <Box align="center" justify="center" direction="row" gap="medium">
                <Button onClick={() => mintnft(mintingamount)} label="Click here to Mint!" size="large" primary color="black" />
              </Box>
              <Button onClick={() => mintpresalenft()} label="Click here if you are in Pre-sale!" size="large" primary color="#8b572a" />
            </Box>
          </Main>
          <Footer align="end" direction="row" flex justify="center" gap="medium" pad="large">
            <Button primary color="black" icon={<Twitter />} label="" href="https://twitter.com/arsenal_nft" />
            <Button primary color="black" icon={<Tooltip />} label="" href="https://discord.gg/6XPPFQX48X" />
          </Footer>
        </Main>
      </Box>
    </Grommet>
  );
}

export default App;
