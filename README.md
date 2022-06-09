# Testing XP.NETWORK Bridge & Secret Network integration

This project is a step by step reproducable instruction for testing the NFT Bridge functionality in respect to the Secret network blockchain.

## Initiating the project
```
mkdir testing_secret_network
cd testing_secret_network/
yarn init -y
```

## Installing the required libraries
```
yarn add "git+https://github.com/xp-network/xpjs#bleeding-edge" @elrondnetwork/erdjs ethers @taquito/taquito @temple-wallet/dapp dotenv
```