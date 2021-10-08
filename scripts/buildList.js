const { version } = require("../package.json");

const mainnet = require("../tokens/mainnet.json");
const matic = require("../tokens/matic.json");
const bsc = require("../tokens/bsc.json");

module.exports = function buildList() {
  const [major, minor, patch] = version.split(".");
  return {
    name: "XATA Token List",
    timestamp: new Date().toISOString(),
    version: {
      major: +major,
      minor: +minor,
      patch: +patch,
    },
    tags: {},
    logoURI:
      "https://raw.githubusercontent.com/automata-network/conveyor-assets/master/automata.png",
    keywords: ["xata", "automata", "default"],
    tokens: [...mainnet, ...matic, ...bsc].sort((t1, t2) => {
      // sort them by symbol for easy readability
      if (t1.chainId === t2.chainId) {
        return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
      }
      return t1.chainId < t2.chainId ? -1 : 1;
    }),
  };
};
