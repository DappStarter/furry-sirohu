require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture strong regret situate unfair inside light army giggle'; 
let testAccounts = [
"0xf188d10d490f5d968cc533bb5fc06b0ae97e4471c1efc92144c9039542f68571",
"0x84872c61daa13561640e32154cd4c0296cb3b5c0c3067724c21c77167881dd40",
"0x8260f41900cccafe6c5fa0cd810b342c0dfe7ec9e8b9276ce007b04a6d53809e",
"0xf3e2955aeace0323e8f3507cae8c7b485957696cff7d4b0813e7c03b5434fdee",
"0x8138f0ef70f20ba1ac75c9116ee8f738d7873ddd4b3a24858a8d6ff161353219",
"0xa6250ed178832cb68e8e6ea8fbcf6223a536d65cd8d315afdda6025841bf5d09",
"0x3ee5c087981c6edf41a39839fe14230fb2617d477b2193b59cc4c2e3c10eab4c",
"0xb6f1f72424035877e07ee785a1a34880cfdd0c107736a2dca73750c17ab40291",
"0x50be4b5c90882206bf3430957f525a4d872db19d1f344b0e6b5cb53acb2f3284",
"0xbd252f083b2b2b9a229f982f7d725c24b4f6399477b800784a630f609903131e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
