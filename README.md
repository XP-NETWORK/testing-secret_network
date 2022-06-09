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

## Secret Network testnet Explorer
```

```

## Minting an NFT on Secret
```
yarn mint
```
To veiw the result on the chain explorer replace the hash below with the one form the terminal (transactionHash: 'CE92DD04090F98328C2613094198F3124849DAC9E2E299E9441AF738CE730D10').

Example: https://secretnodes.com/secret/chains/pulsar-2/transactions/CE92DD04090F98328C2613094198F3124849DAC9E2E299E9441AF738CE730D10

## Transferring an NFT from Secret to BSC
```
yarn secret-bsc
```
To veiw the result on the chain explorer replace the hash below with the one form the terminal (transactionHash: '3476773BC9F325E2251476A1C2CB12C0158778129DCF0BACADEEE29FAF72D715')

Example: https://secretnodes.com/secret/chains/pulsar-2/transactions/3476773BC9F325E2251476A1C2CB12C0158778129DCF0BACADEEE29FAF72D715

Received on BSC: https://testnet.bscscan.com/tx/0x6ae6bc8dc9e9b1ddc2e9a9eba3bdb9b8ad3ba7c468e0702e663241ec4cb335bf


## Transferring an NFT from BSC to Secret
```
yarn bsc-secret
```

Departed from BSC: https://testnet.bscscan.com/tx/0x76b7f09912a0810556afffad1c10edbb67a2e49614bf3bfc1965e92b922e3171

Arrived on Secret: https://secretnodes.com/secret/chains/pulsar-2/blocks/3214328/transactions/2501FFEE7FC10F242ECA14197F08292D2CE928A78E6427BF09A594AFA1F23C6F