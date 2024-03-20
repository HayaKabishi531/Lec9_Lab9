import {ethers} from 'ethers'

const derivationPath = {
    ADA: "m/1852'/1815'/0'/",
    AVAX: "m/44'/9000'/0'/",
    BTC: "m/44'/0'/0'/",
    BCH: "m/44'/145'/0'/",
    BNB: "m/44'/714'/0'/",
    DASH: "m/44'/5'/0'/",
    DOGE: "m/44'/3'/0'/",
    DOT: "m/44'/354'/0'/",
    EOS: "m/44'/194'/0'/",
    ETH: "m/44'/60'/0'/",
    LTC: "m/44'/2'/0'/",
    MATIC: "m/44'/60'/0'/",
    SOL: "m/44'/501'/0'/"
  }


  
export const CreateMnemonic = async () => {
    const randomWallet = ethers.Wallet.createRandom()
    return randomWallet.mnemonic.phrase
}

export const CreateWallet = async (coin,  mnemonic, index = 0) => {
    if (!mnemonic) mnemonic = await CreateMnemonic()

    const path = `${derivationPath[coin]}0/${index}`

    const wallet = ethers.Wallet.fromMnemonic(mnemonic, path)
    const privateKey = wallet.privateKey
    const publicKey = wallet.publicKey
    const address = wallet.address

    return { coin, path, privateKey, publicKey, address }

}
