import { config } from "dotenv";
import { Wallet } from "ethers";
import { AppConfigs } from "xp.network/dist";
import { Chain } from "xp.network/dist/consts";
import { ChainFactory, ChainFactoryConfigs } from "xp.network/dist/factory";
config();

(async () => {

    const factory = ChainFactory(
        AppConfigs.TestNet(),
        await ChainFactoryConfigs.TestNet()
    );

    const bsc = await factory.inner(Chain.BSC);
    const scrt = await factory.inner(Chain.SECRET);

    const wallet = new Wallet(process.env.SK!, bsc.getProvider());

    const nfts = await factory.nftList(bsc, await wallet.getAddress());
    console.log(`Found NFTs: ${nfts.length}.`);


    const chosenOne = nfts[nfts.length - 1];

    console.log(`Transferring NFT From BSC to SECRET: `, chosenOne);

    const response = await factory.transferNft(
        bsc,
        scrt,
        chosenOne,
        wallet,
        "secret1erj4m9z544pwhllrjy9xj7a2enz9a9m9wyxjtk"
    );

    console.log(response);
    process.exit(0);

})().catch(error => {

    console.error("Error:", error);
    process.exit(1);

});