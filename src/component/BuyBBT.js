import React from 'react'

export default function BuyBBT() {
    return (
        <div id='buy-cont'>
            <div className="row my-5">
                <div className="col-md-6">
                    <h2>How to Buy <span>Booby Trap</span>?</h2>
                    <ul>
                        <li>Download and set up <a href='https://metamask.io/'>MetaMask</a> or <a href='https://trustwallet.com/'>Trust Wallet</a> </li>
                        <li>Purchase BNB (BEP-20) and send to your wallet address</li>
                        <li>Revisit this section of our website, or <a href='https://pancakeswap.finance/swap?outputCurrency=0x609b88f5a4aBB7A55bA0c6d255C3F1b1bC7A4D76'>PancakeSwap</a></li>
                        <li>Insert the amount of BNB you would like to swap for $BBT</li>
                        <li>Change the slippage amount to between 1%-15%. Depending on the buy and sell pressure, higher slippage may be necessary</li>
                        <li>Press “Swap” and confirm the transaction in your wallet</li>
                        <li>Congratulations - Welcome to the BoobyTrap Community!</li>
                    </ul>
                    <p>If you prefer the PancakeSwap option, click “select a currency”, and enter and import the $EFT contract address:</p>
                    <a href="https://bscscan.com/address/0x609b88f5a4abb7a55ba0c6d255c3f1b1bc7a4d76#code">0x609b88f5a4aBB7A55bA0c6d255C3F1b1bC7A4D76</a>
                </div>
                <div className="col-md-6">
                    <div className="swapPoo">
                            <iframe
                                src="https://poocoin.app/embed-swap?outputCurrency=0x609b88f5a4aBB7A55bA0c6d255C3F1b1bC7A4D76"
                                width="420"
                                height="630"
                            ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}