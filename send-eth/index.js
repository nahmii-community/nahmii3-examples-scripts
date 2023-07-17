let Web3 = require("web3");

let rpc = "https://ngeth.testnet.n3.nahmii.io/";

const provider = new Web3.providers.HttpProvider(rpc);
const web3 = new Web3(provider);

// Add your private key here
web3.eth.accounts.wallet.add("private-key");

// Send 5 ETH
web3.eth
  .sendTransaction({
    from: "your-address",
    to: "to-address",
    value: web3.utils.toWei("5", "ether"),
    gas: 8000000,
  })
  .then(function (receipt) {
    console.log(receipt);
  });