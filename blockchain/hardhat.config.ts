import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    hardhat: {},
    // sepolia: {
    //   url: process.env.ALCHEMY_SEPOLIA_URL,
    //   accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    // },
  },
};

export default config;
