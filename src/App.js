import React, { Component } from "react";
import SimpleStorageContract from "./contracts/MedicalChain.json";
import getWeb3 from "./getWeb3";
import { NavBar } from './Components/NavBar/NavBar';
import { Home } from './Components/Home/Home';
import { Doctor } from './Components/Doctor/Doctor';
import { Donate } from './Components/Donate/Donate.jsx';
import Admin from './Components/Admin/Admin';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Portis from '@portis/web3';
import Web3 from 'web3';

class App extends Component {
  constructor(){
    super();
    this.state = { storageValue: 0, web3: null, accounts: null, contract: null };
  }
  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.

      // this.biconomy = new Biconomy(Web3, {apiKey: "LbOkM_BNx.b0a7a913-3db2-420e-a1d6-9ba4c8485367"});
      // const Web3 = new Web3(this.biconomy);
      const customNode = {
        nodeUrl: 'https://rpc-mumbai.matic.today/',
        chainId: 80001,
      };
      
      const portis = new Portis('a7d2b587-1e58-465a-8b1e-2456836445bc', customNode);
      this.web3 = new Web3(portis.provider);
      // this.web3 = await getWeb3();
        // Use web3 to get the user's accounts.
        this.accounts = await this.web3.eth.getAccounts();
        console.log("Accounts from metamask: " + this.accounts);
        // Get the contract instance.
        this.networkId = await this.web3.eth.net.getId();
        console.log("Matic network ID: " + this.networkId);

        this.donorInstance = new this.web3.eth.Contract(
        SimpleStorageContract.abi,
        SimpleStorageContract.networks[this.networkId] && SimpleStorageContract.networks[this.networkId].address,
        );
        console.log("Contract Instance : " + this.donorInstance);
         
        // await this.handleDonorCount();

        // Set web3, accounts, and contract to the state, and then proceed with an
        // example of interacting with the contract's methods.

      this.setState({
        web3: this.web3,
        contractAddress: SimpleStorageContract.networks[this.networkId].address
      });
      console.log("Web3 Obj : " + this.state.web3);
      portis.isLoggedIn().then(({ error, result }) => {
        console.log(error, result);
      });
      
      // alert("Donor data retrieved from contract");
    } catch (error) {
      // Catch any errors for any of the above operations.
      console.error(error);
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.  ${ JSON.stringify(error)}`
      );
      
    }
  };

  render() {
    // if (!this.state.web3) {
    //   return <div>Loading Web3, accounts, and contract...</div>;
    // }
    return (
      <div>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path='/' component={() => <Home contract={this.donorInstance} accounts = {this.accounts} web3={this.state.web3}/>} />
            <Route path="/doctor" component={() => <Doctor contract={this.donorInstance} accounts = {this.accounts} web3={this.state.web3}/>} />
            <Route path="/admin" component={() => <Admin contract={this.donorInstance} accounts = {this.accounts}  web3={this.state.web3} />} />
            <Route path="/donate" component={() => <Donate contract={this.donorInstance} accounts = {this.accounts} web3={this.state.web3} />} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
