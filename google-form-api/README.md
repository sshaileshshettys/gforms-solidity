
# Google Form on Blockchain

This project demonstrates how to interact with a smart contract deployed on a blockchain network (Ganache in this case) using an Express.js API.

## Features

- Submit form data to a smart contract on the blockchain.
- Retrieve form entries stored on the blockchain.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js & npm
- Ganache (for local blockchain development)
- MetaMask or any Ethereum wallet for testing
- Truffle (optional, for contract compilation and migration)

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AdarshSavalagi/Etherium-solidity.git
   cd google-form-api
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment Variables:**

   Create a `.env` file in the root directory with the following variables:

   ```plaintext
   INFURA_URL=<your_infura_url>
   CONTRACT_ADDRESS=<your_contract_address>
   PORT=3000
   ```

   Replace `<your_infura_url>`, `<your_private_key>` with appropriate values.

4. **Compile Smart Contract:**

   Ensure your smart contract (`GoogleForm.sol`) is compiled and artifacts are available in `build/contracts/GoogleForm.json`.

5. **Start the Express Server:**

   ```bash
   cd google-form-api
   ```
   ```bash
   node index.js
   ```

   This will start the server at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please feel free to fork the repository and submit pull requests.
