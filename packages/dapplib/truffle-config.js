require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture student razor soccer pulse hunt canoe army gasp'; 
let testAccounts = [
"0x0a8e997a333ac6d897394019eb23b977a9789cf9b07820b916007c0cb37db5c5",
"0xf39341ade62b25a1107ea74e6653198064d951caa8f73169db862800b6d790dd",
"0x5377a0b70ff8daf40e5c713fe3ef882db3b6fac1555cf8ec8a2f989989eb801d",
"0xc4a3d3ad4d79e47733ec044fb6377c6a3d4abd35300e9e6cbb542141f6fe8c0f",
"0x2a00275b9039c8084c10dccd6e15510f66461f08dd99630dd232a3463e613936",
"0x597fcac3742280c734522559c9b668c0e5a7952f74d39c4094357a4a742826bf",
"0x37e2196ce13664645e2ef4e58e21fed4a4b6fabc3bdb13b122893c16d79d5dd1",
"0xcce8988e3fe03c5b87d3920758f00caa90aa4250410c72e53cb83028ea1ea9fe",
"0x35a3a5d81bae1d13dde6c2807977bf19171246202d1276aa8d2b52d8adfe6ea7",
"0x708898896a34f518003fce795e44226084573dd04c8a641665433741edd3ff2e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


