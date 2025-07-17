---
title: 3Jane Protocol — Revolutionizing DeFi lending
showDateAndReadTime: true
---
Lending has played a critical role in the traditional economic model, where centralized banks/credit unions set the rates and terms of how individuals can acquire loans. This seemed great for a while, but similar to much of the crypto ethos that led to DeFi, people believed crypto was essential in solving a lot of the risks associated with the system. This led to decentralized lending, which is the lending & borrowing of cryptocurrencies on blockchain-based platforms that remove intermediaries in the system.

The issue with traditional crypto lending, however, is that it often demands over-collateralized terms, which significantly restrict liquidity and hamper innovation. The global unsecured credit market, valued at approximately 4.75 trillion USD, remains largely untapped by decentralized finance (DeFi). In fact, according to Messari, the TVL (with borrowed tokens taken into account) for the DeFi lending space is only 60.493B USD. Enter 3Jane Protocol—a groundbreaking Ethereum-based credit market designed to democratize crypto lending by shifting from asset-backed to universal cash flow–based credit.
## How does TradFi Lending work?

To first understand the state of DeFi lending, you first need to understand how TradFi lending works and the qualms surrounding it. Traditional finance (TradFi) lending typically involves banks providing credit to an individual with terms driven by the bank's analysis of the individual's creditworthiness. Based on this, the bank sets terms and introduces terms and collateral that the individual pays if the loan defaults. This process often entails extensive paperwork, credit evaluations, and strict regulatory compliance, which can significantly delay loan approval and access to funds. Additionally, these traditional mechanisms frequently exclude individuals and small businesses lacking sufficient collateral or established credit histories, thereby limiting their ability to secure necessary funding. In general, the major issue is that banks have high barriers to entry and limited flexibility, which underscore major inefficiencies within traditional lending systems, creating substantial gaps in market accessibility.
## The State of DeFi Lending

In DeFi lending, most of the lending terms are still strictly over-collateralized, which means the borrower is staking more tokens as collateral than the borrowed amount. The reason for this is due to the absence of an enforcement mechanism that ensures the interest repayment is paid beyond the collateral that is provided. While the incentive of crypto loans is the flexibility with non-fixed repayments and loan expiration, the hassle exists in the consistent focus on borrowers ensuring their collateral exceeds the borrowed amount plus accrued interest.

This over-collateralization problem severely restricts the effective capital use. It restricts borrowers who intend on shorting tokens, gaining exposure to different assets without selling their positions, or leveraging their holdings. Despite its efficiencies compared to TradFi, DeFi still remains highly inefficient for broader economic participation, especially for borrowers lacking sufficient crypto collateral.

The current solutions for DeFi lending are protocols like Compound and Aave. What they offer are decentralized liquidity pools where users can borrow and lend assets. Borrowers deposit collateral into liquidity pools, which accrues yield, but must maintain sufficient collateral to avoid liquidations. Liquidations are where third parties repay debts in exchange for discounted collateral. While innovative concepts like flash loans provide unique opportunities (still have the problem of often being exploited for arbitrage or price manipulation), the fundamental over-collateralization problem persists, significantly restricting DeFi’s scalability and real-world adoption.
## Understanding 3Jane Protocol

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc4Dxl8RtSLHI46m5nb6vx5jbCCN2PSVCwkw-duHN_JSicM6HX3bC_EUKUZd4HpN4fDAR0ZPR_S1ZuiT9MbUoErBx5LWcEcpJ3vUbRjBtwgbu41xva4ZkLIMjSIq7CeM31hSw5Wyw?key=wyUosjoXvBXEKlc22fI2yJKq)
At its core, 3Jane offers unsecured and un-collateralized USDC credit lines underwritten against verifiable crypto holdings, bank assets, future cash flows, and traditional credit scores. The protocol introduces a sophisticated approach to lending, significantly enhancing capital efficiency by incorporating a comprehensive assessment of financial profiles through both on-chain and off-chain data.
### How Does 3Jane Work?
3Jane functions through three central components:
#### 1. Core Money Market
Suppliers:
- Users deposit USDC, minting USD3, a stable yield-coin, guaranteeing priority rights to interest repayments. For those accepting higher risks, staking USD3 into sUSD3 provides leveraged yields while acting as a hedge against defaults.
Borrowers:
- U.S.-based borrowers seamlessly link Ethereum wallets and bank accounts via Plaid or MetaMask, swiftly obtaining unsecured credit lines without traditional collateral.
#### 2. The 3CA Credit Algorithm

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfMoIBvqbhclVvE9Cegvfy5UftKBtEruyVlSQ8G5yvf-UdPxxxk4P4BHAG9cjEv-RQAcgFtJq2wZGBjPM52j6ztQA4eq6uwlXF1VQAAy7oLqFgqGmhxB2W0-JOCfJ-0TWOZxF7k?key=wyUosjoXvBXEKlc22fI2yJKq)

3Jane's 3CA underwriting algorithm is the first to combine on-chain data from Blockchain Bureau and Cred Protocol with off-chain VantageScore 3.0 credit data, which is encrypted with zero-knowledge proofs (zkTLS). Zero-knowledge Transport Layer Security (zkTLS) allows secure and private communication of sensitive financial data by enabling verification of data integrity without revealing the actual data itself. In particular, 3Jane uses Reclaim Protocol, a novel proxy-based zkTLS solution, that retrieves and attests the integrity of HTTPS responses with sensitive credit data directly from websites such as Credit Karma or banks through Plaid. The approach greatly improves the privacy of the users by not exposing or storing any personal identifiable information directly within the protocol itself while still providing a high level of cryptographic authentication. This holistic risk profiling allows for dynamic, risk-weighted credit lines based on users' entire financial universes, wedding transparency and privacy in decentralized lending.
#### 3. Credit Slashing and Debt Recovery

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcvR6SHa77Sgvv35LN1yuSN0GWgUxuJWRXOZ7TCx9GSI8CI-I9GdzSZM2Ws0wRSBCZQsbC_xaaqDHfes9eTQkVczmprSNBSObd98lL9_knC5e6W2hPq4ZrdNKHHR7-K-Nj06q9J0w?key=wyUosjoXvBXEKlc22fI2yJKq)

In order to stay solvent, 3Jane has a two-stage default avoidance policy:
- Credit Downgrade: At default, the protocol triggers a downgrade in the credit rating of the borrower by 3Jane specifically by 3. This reduced rating directly decreases their future borrowing power and raises their interest rates. Other than that, defaulted loans also go through an on-chain Dutch auction system whereby licensed U.S. collection agencies get a chance to bid competitively for the privilege of recovering such non-performing loans.
- NPL Auctions: Non-performing loans undergo an on-chain Dutch auction process, allowing licensed U.S. collection agencies to competitively bid for the recovery rights to these non-performing loans. The Dutch auction process operates as follows:
	- The Dutch auction begins with a high fee that the collection agency receives upon successfully recovering the debt. This fee gradually decreases (unlike a traditional auction where the fee increases) at regular intervals based on predetermined time frames until the agency finds an attractive rate
	- While the on-chain auction is going on, the collection agency is doing an assessment of the borrower's profile based on both on-chain/off-chain credit profile, assets, and cash flow details. This is all happening without personally identifying information initially due to zKTLS. When the agency finds the attractive fee suitable in addition to an optimal recovery strategy and cost assessment, they accept the auction at that rate.
    - This causes the auction to end, and the information about the borrower is privately disclosed to the collection agency. Then the agency pursues an ensemble of strategies such as contacting the borrower directly, reporting the default to off-chain credit bureaus, seeking regulatory enforcement, etc. Upon successful recovery, the agency takes in the contingency fee, while the remainder is sent on-chain to the 3Jane Protocol to reimburse suppliers.
This wide-ranging approach ensures that credit discipline is upheld while keeping the protocol solvent.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcdG1p9K4T8_v6Wkzu0rf_EXHLIttbP7SkNBwh-0rsv4wj_KQUgikVPPgLpt6038Eh80Um2D34Kq9RfbYA-TxOwCU7FlmSZ6jUMzj4yqfPdT8OUlSHvbPTxBsqdZ5ClWC8KKJ-uKQ?key=wyUosjoXvBXEKlc22fI2yJKq)
## Bridging Web3 and Traditional Finance (TradFi)

3Jane has a characteristic of fully integrating blockchain technology with fiat financial infrastructures. Leveraging powerful analytical models coupled with state-of-the-art zero-knowledge cryptography, the protocol reliably processes sophisticated financial portfolios, creating unprecedented credibility for lending in a decentralized format. This allows for true un-collateralized lending, as 3Jane relies on a way more means of underwriting an individual's creditworthiness than other DeFi lending protocols.
## Capital Efficiency Gains in 3Jane

3Jane's disrupting credit mechanism provides not only the yield farmers and traders but extends to asset-light participants like future businesses and AI agents as well. Through screening borrowers based on prospective cash flows rather than immobile assets, 3Jane dramatically expands participation in markets and boosts economic activity through greater liquidity.
## Real-world Applications: Borrower Examples

Asset-Rich Farmer:
- Traditional financing has limited borrowing capacity and high collateral. With 3Jane, detailed financial profiling offers much higher unsecured lines of credit at good interest rates.
Trader:
- Instead of collateralizing high-value crypto assets, traders are given broad unsecured borrowing powers by 3Jane's sophisticated credit assessment, releasing more capital flexibility and effectiveness.
## Looking Forward

The future for 3Jane is to continue down the path toward sole cash flow underwriting, further democratizing access to credit for high-productivity firms and AI agents. By doing so, 3Jane is building itself into a pillar of a decentralized, internet-native financial architecture, making the door wider for a new generation of economic actors underserved by traditional finance.