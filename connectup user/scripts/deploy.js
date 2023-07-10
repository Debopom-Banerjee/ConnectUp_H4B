const { ethers } = require('hardhat')

const main = async () => {
    const connectupFactory = await ethers.getContractFactory('connectupERC721')
    const ConnectupContract = await connectupFactory.deploy()

    console.log('CONNECTUP CONTRACT ADDRESS:',ConnectupContract.address)


}
main()
  .then(() => process.exit(0))
  .catch(error => {

    console.log('Error in deploying Contract >>', error)
    process.exit(1)
})