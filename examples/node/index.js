const Matic = require('maticjs')

const maticProvider = 'https://testnet.matic.network'
const parentProvider = 'https://kovan.infura.io/matic'
const rootChainAddress = '0x24e01716a6ac34d5f2c4c082f553d86a557543a7'
const syncerUrl = 'localhost:9001/api/v1'
const watcherUrl = 'localhost:9000/api/v1'

const token = '0xC4375B7De8af5a38a93548eb8453a498222C4fF2'
const user = '0x7ed7f36694153ba6eff6ca6726b60f6e2bb17fcf'
const amount = '10000000000000000'
const from = '0x6e0c217de3235f1d8a95605d10bcc1b36ff7996f'

// Create object of Matic
const matic = new Matic({
  maticProvider,
  parentProvider,
  rootChainAddress,
  syncerUrl,
  watcherUrl,
})

matic.wallet = '<Private key>'

var transactionHash = null

// Send Tokens
matic.transferTokens(token, user, amount, {
  from,
  onTransactionHash: () => {
    // action on Transaction success
  },
})

// Approve token
matic.approveTokensForDeposit(token, amount, {
  from,
  onTransactionHash: () => {
    // action on Transaction success
  },
})

// Deposit tokens
matic.depositTokens(token, from, amount, {
  from,
  onTransactionHash: () => {
    // action on Transaction success
  },
})

// Withdraw tokens
matic.startWithdraw(token, amount, {
  from,
  onTransactionHash: txHash => {
    transactionHash = txHash
  },
})

// submit Proof

matic.withdraw(transactionHash, {
  from,
  onTransactionHash: () => {
    // action on Transaction success
  },
})
