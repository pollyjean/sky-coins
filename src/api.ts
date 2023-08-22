const BASE_URL = "https://api.coinpaprika.com/v1";

export interface ICoinList {
  id: string;
  name: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export interface ICoinInfo {
  symbol: string;
  name: string;
  rank: number;
  logo: string;
  open_source: boolean;
  description: string;
}

export const fetchCoinList = async () => {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
};

export const fetchCoinInfo = async (coinId: string) => {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) => response.json());
};

// {
//   "id": "btc-bitcoin",
//   "name": "Bitcoin",
//   "symbol": "BTC",
//   "rank": 1,
//   "is_new": false,
//   "is_active": true,
//   "type": "coin",
//   "logo": "https://static.coinpaprika.com/coin/btc-bitcoin/logo.png",
//   "tags": [
//     {
//       "id": "segwit",
//       "name": "Segwit",
//       "coin_counter": 10,
//       "ico_counter": 0
//     },
//     {
//       "id": "cryptocurrency",
//       "name": "Cryptocurrency",
//       "coin_counter": 1018,
//       "ico_counter": 40
//     },
//     {
//       "id": "proof-of-work",
//       "name": "Proof Of Work",
//       "coin_counter": 495,
//       "ico_counter": 14
//     },
//     {
//       "id": "payments",
//       "name": "Payments",
//       "coin_counter": 170,
//       "ico_counter": 39
//     },
//     {
//       "id": "sha256",
//       "name": "Sha256",
//       "coin_counter": 46,
//       "ico_counter": 1
//     },
//     {
//       "id": "mining",
//       "name": "Mining",
//       "coin_counter": 274,
//       "ico_counter": 18
//     },
//     {
//       "id": "lightning-network",
//       "name": "Lightning Network",
//       "coin_counter": 6,
//       "ico_counter": 0
//     }
//   ],
//   "team": [
//     {
//       "id": "satoshi-nakamoto",
//       "name": "Satoshi Nakamoto",
//       "position": "Founder"
//     },
//     {
//       "id": "wladimir-j-van-der-laan",
//       "name": "Wladimir J. van der Laan",
//       "position": "Blockchain Developer"
//     },
//     {
//       "id": "jonas-schnelli",
//       "name": "Jonas Schnelli",
//       "position": "Blockchain Developer"
//     },
//     {
//       "id": "marco-falke",
//       "name": "Marco Falke",
//       "position": "Blockchain Developer"
//     },
//     {
//       "id": "rahul",
//       "name": "Rahul",
//       "position": "Node js Developer"
//     },
//     {
//       "id": "ashutosh",
//       "name": "Ashutosh",
//       "position": "Whale Miner"
//     }
//   ],
//   "description": "Bitcoin is a cryptocurrency and worldwide payment system. It is the first decentralized digital currency, as the system works without a central bank or single administrator.",
//   "message": "",
//   "open_source": true,
//   "started_at": "2009-01-03T00:00:00Z",
//   "development_status": "Working product",
//   "hardware_wallet": true,
//   "proof_type": "Proof of Work",
//   "org_structure": "Decentralized",
//   "hash_algorithm": "SHA256",
//   "links": {
//     "explorer": [
//       "https://blockchair.com/bitcoin/?from=coinpaprika",
//       "https://blockchain.com/explorer",
//       "https://blockstream.info/",
//       "https://live.blockcypher.com/btc/",
//       "https://btc.cryptoid.info/btc/"
//     ],
//     "facebook": [
//       "https://www.facebook.com/bitcoins/"
//     ],
//     "reddit": [
//       "https://www.reddit.com/r/bitcoin"
//     ],
//     "source_code": [
//       "https://github.com/bitcoin/bitcoin"
//     ],
//     "website": [
//       "https://bitcoin.org/"
//     ],
//     "youtube": [
//       "https://www.youtube.com/watch?v=Gc2en3nHxA4&"
//     ]
//   },
//   "links_extended": [
//     {
//       "url": "https://bitcoin.org/en/blog",
//       "type": "blog"
//     },
//     {
//       "url": "https://blockchair.com/bitcoin/?from=coinpaprika",
//       "type": "explorer"
//     },
//     {
//       "url": "https://blockchain.com/explorer",
//       "type": "explorer"
//     },
//     {
//       "url": "https://blockstream.info/",
//       "type": "explorer"
//     },
//     {
//       "url": "https://live.blockcypher.com/btc/",
//       "type": "explorer"
//     },
//     {
//       "url": "https://btc.cryptoid.info/btc/",
//       "type": "explorer"
//     },
//     {
//       "url": "https://www.facebook.com/bitcoins/",
//       "type": "facebook"
//     },
//     {
//       "url": "https://bitcointalk.org",
//       "type": "message_board"
//     },
//     {
//       "url": "https://www.reddit.com/r/bitcoin",
//       "type": "reddit",
//       "stats": {
//         "subscribers": 5724344
//       }
//     },
//     {
//       "url": "https://github.com/bitcoin/bitcoin",
//       "type": "source_code",
//       "stats": {
//         "contributors": 1145,
//         "stars": 70996
//       }
//     },
//     {
//       "url": "https://twitter.com/bitcoincoreorg",
//       "type": "twitter",
//       "stats": {
//         "followers": 161310
//       }
//     },
//     {
//       "url": "https://electrum.org/#download",
//       "type": "wallet"
//     },
//     {
//       "url": "https://bitcoin.org/",
//       "type": "website"
//     },
//     {
//       "url": "https://www.youtube.com/watch?v=Gc2en3nHxA4&",
//       "type": "youtube"
//     }
//   ],
//   "whitepaper": {
//     "link": "https://static.coinpaprika.com/storage/cdn/whitepapers/215.pdf",
//     "thumbnail": "https://static.coinpaprika.com/storage/cdn/whitepapers/217.jpg"
//   },
//   "first_data_at": "2010-07-17T00:00:00Z",
//   "last_data_at": "2023-08-21T12:20:00Z"
// }
