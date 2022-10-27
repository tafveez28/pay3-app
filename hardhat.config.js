//https://eth-goerli.g.alchemy.com/v2/ct-V3PL5suBRO7B03QbC1SXn8JdZbGLB
 

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/ct-V3PL5suBRO7B03QbC1SXn8JdZbGLB',
      accounts: ['f20518041a1d198d92dee0d3ea26d575400e125c1c308f08ce018b2de5392bcb'],
    },
  },
};