import { config } from "dotenv";
import { SecretNetworkClient, Wallet } from "secretjs";
import { AppConfigs } from "xp.network/dist";
import { Chain, TestNetRpcUri } from "xp.network/dist/consts";
import { ChainFactory, ChainFactoryConfigs } from "xp.network/dist/factory";
config();

(async () => {

    const factory = ChainFactory(AppConfigs.TestNet(), await ChainFactoryConfigs.TestNet())

    const scrt = await factory.inner(Chain.SECRET);

    const wallet = new Wallet(process.env.mime!)

    const client = await SecretNetworkClient.create({
        chainId: "pulsar-2",
        grpcWebUrl: TestNetRpcUri.SECRET,
        wallet: wallet,
        walletAddress: wallet.address
    });

    const mint = await scrt.mintNft(client, {
        url: "https://meta.polkamon.com/meta?id=10001852306"
    });

    console.log(mint);
    process.exit(0);

})().catch(error => {

    console.error("Error:", error);
    process.exit(1);
    
});