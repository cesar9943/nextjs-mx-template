// Default Elrond network configuration (constants).
// Change if you need, but by default, you shouldn't have to do that.
type chainsTypes = "devnet" | "testnet" | "mainnet";
export const chainType: chainsTypes =
  (process.env.NEXT_PUBLIC_ELROND_CHAIN as chainsTypes) || "devnet";

export const networkConfig = {
  devnet: {
    contractAddr: {},
    tokens: {},
  },

  testnet: {
    contractAddr: {},
    tokens: {},
  },

  mainnet: {
    contractAddr: {},
    tokens: {},
  },
};

export const selectedNetwork = networkConfig[chainType];

//general configs
export const walletConnectV2ProjectId =
  process.env.NEXT_PUBLIC_WALLET_CONNECT_TV2;
export const apiTimeout = 6000;
export const TOOLS_API_URL = "https://tools.elrond.com";
export const sampleAuthenticatedDomains = [TOOLS_API_URL];

//site configs
export const host = process.env.NEXT_PUBLIC_HOST;

// HTML metata and og tags, default values for MetaHead.tsx component
export const defaultMetaTags = {
  title: "Printa",
  description: "Printa",
  image: `${host}/img.jpg`, // url to image need to be update with real image
};
