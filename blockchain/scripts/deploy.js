const { ethers } = require('hardhat')

async function main() {
  const ContractFactory = await ethers.getContractFactory('GameContract')
  const contract = await ContractFactory.deploy()
  await contract.waitForDeployment()

  const address = await contract.getAddress()
  console.log(address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error)
    process.exit(1)
  })
