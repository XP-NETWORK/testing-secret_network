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


## Transferring an NFT from BSC to Secret
```
yarn bsc-secret
```