export const balanceInEth = (balance) => {
    return Math.round(balance / 10000000000000) / 100000;
  }

export const shortAddress = (address) => {
    return address.substring(0,5) + "..." + address.substring(address.length-3, address.length)
}