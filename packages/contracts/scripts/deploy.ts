import { ethers } from 'hardhat';

async function main() {
  const NftCollectionFactory = await ethers.getContractFactory('NonFungibleTimeCollection');
  const nftCollection = await NftCollectionFactory.deploy();

  await nftCollection.deployed();
  console.log('NonFungibleTimeCollection deployed to:', nftCollection.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});