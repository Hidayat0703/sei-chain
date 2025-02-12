// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgWithdrawDelegatorReward } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgFundCommunityPool } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgWithdrawValidatorCommission } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgSetWithdrawAddress } from "./types/cosmos/distribution/v1beta1/tx";
const types = [
    ["/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", MsgWithdrawDelegatorReward],
    ["/cosmos.distribution.v1beta1.MsgFundCommunityPool", MsgFundCommunityPool],
    ["/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", MsgWithdrawValidatorCommission],
    ["/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", MsgSetWithdrawAddress],
];
export const MissingWalletError = new Error("wallet is required");
export const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    }
    else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgWithdrawDelegatorReward: (data) => ({ typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawDelegatorReward", value: MsgWithdrawDelegatorReward.fromPartial(data) }),
        msgFundCommunityPool: (data) => ({ typeUrl: "/cosmos.distribution.v1beta1.MsgFundCommunityPool", value: MsgFundCommunityPool.fromPartial(data) }),
        msgWithdrawValidatorCommission: (data) => ({ typeUrl: "/cosmos.distribution.v1beta1.MsgWithdrawValidatorCommission", value: MsgWithdrawValidatorCommission.fromPartial(data) }),
        msgSetWithdrawAddress: (data) => ({ typeUrl: "/cosmos.distribution.v1beta1.MsgSetWithdrawAddress", value: MsgSetWithdrawAddress.fromPartial(data) }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
