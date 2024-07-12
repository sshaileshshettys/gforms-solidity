
# Google Form Smart Contract

## Solidity Smart Contract

This project contains a Solidity smart contract (`GoogleForm.sol`) designed to emulate a Google Form on the blockchain. Solidity is a statically-typed programming language used for writing smart contracts on various blockchain platforms, including Ethereum.

### Features

- **Submit Form**: Users can submit their name, USN (University Serial Number), phone number, and email address.
- **Retrieve Entries**: Only the contract owner can retrieve all form entries submitted.
- **Change Ownership**: Allows the current owner to transfer ownership of the contract to a new address.

## Deployment

### Using Ganache and Truffle

1. **Setup**

   - Install Ganache for a local Ethereum blockchain environment.
   - Install Truffle for compiling, deploying, and managing smart contracts.

2. **Compile and Deploy**

   - Compile the `GoogleForm.sol` contract using Truffle.
   - Deploy the contract to the local Ganache blockchain network.

   ```bash
   truffle compile
   truffle migrate --network ganache
   ```

   Ensure you have configured Ganache correctly in the Truffle configuration file (`truffle-config.js` or `truffle.js`).

3. **Contract Address and Owner**

   - Note down the deployed contract address and the owner's address (your address when deploying locally).

## Interaction

For detailed instructions on interacting with the deployed contract using Web3.js, please navigate to the `google-form-api` folder.

