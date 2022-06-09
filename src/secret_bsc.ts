import { config } from "dotenv";
import BigNumber from "bignumber.js";
import { SecretNetworkClient, Wallet } from "secretjs";
import { AppConfigs } from "xp.network/dist";
import { Chain, TestNetRpcUri } from "xp.network/dist/consts";
import { ChainFactory, ChainFactoryConfigs } from "xp.network/dist/factory";
import { NftInfo } from "xp.network/dist/helpers/chain";
import { SecretNftInfo } from "xp.network/dist/helpers/secret";
config();

(async () => {

    const factory = ChainFactory(
        AppConfigs.TestNet(),
        await ChainFactoryConfigs.TestNet()
    );

    const bsc = await factory.inner(Chain.BSC);
    const scrt = await factory.inner(Chain.SECRET);

    const wallet = new Wallet(process.env.mime!);

    const client = await SecretNetworkClient.create({
        chainId: "pulsar-2",
        grpcWebUrl: TestNetRpcUri.SECRET,
        wallet: wallet,
        walletAddress: wallet.address
    });

    const chosenOne: NftInfo<SecretNftInfo> = {
        collectionIdent: "secret146snljq0kjsva7qrx4am54nv3fhfaet7srx4n2",
        native: {
            contract: "secret146snljq0kjsva7qrx4am54nv3fhfaet7srx4n2",
            contractHash: "af076a49141264ec048270318f1358c9be193893c3f829425cab53ee5eb05e5c",
            token_id: "6" //"INSERT MINTED SECRET NFT TOKEN ID HERE"
        },
        uri: "https://meta.polkamon.com/meta?id=10001852306"

    };

    console.log("Approving...");
    const approve = await scrt.preTransfer(
        client,
        chosenOne,
        new BigNumber(0)
    );

    console.log("Approved:", approve);

    console.log(`Transferring NFT From SCRT to BSC:`, chosenOne);
    const response = await factory.transferNft(
        scrt,
        bsc,
        chosenOne,
        client,
        process.env.PK!
    );

    console.log("Transfer result:", response);
    process.exit(0);

})().catch(error => {

    console.error("Error:", error);
    process.exit(1);

});