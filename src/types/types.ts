import { describe } from "node:test"

export type GeneralStats = {
    status: string,
    data: {
        referenceCurrencyRate: number,
        totalCoins: number,
        totalMarkets: number,
        totalExchanges: number,
        totalMarketCap: string,
        total24hVolume: string
        btcDominance: number,
    }
}

export type Currencies = {
    status: string,
    data: {
        stats: string,
        currencies: Currency[]
    }
}

export type Currency = {
    uuid: string,
    type: string,
    iconUrl:string | null
    name: string,
    symbol: string,
    sign: string | null
}

export type Coins = {
    status: string,
    data: {
        stats: string,
        coins: Coin[]
    }
}

export type Coin = {
    uuid: string,
    symbol: string,
    name: string,
    color: string,
    iconUrl: string,
    marketCap: string,
    price: string,
    listedAt: number,
    tier: number,
    change: string,
    rank: number,
    sparkline: {
        [key: string]: string
    }
    lowVolume: boolean,
    coinrankingUrl: string,
    dayVolume: string,
    btcPrice: string
}

export type CoinDetail = {
    status: string,
    data: {
        coin: {
            uuid: string,
            symbol: string,
            name: string,
            description: string,
            color: string,
            iconUrl: string,
            websiteUrl: string,
            links: {
            [key: string]: {
                name: string,
                url: string,
                type: string,
            } 
            }
            supply: {
                [key: string]: {
                    confirmed: boolean,
                    circulating: string,
                    total: string,
                }
            },
            hVolume: string,
            marketCap: string,
            price: string,
            btcPrice: string,
            change: string,
            rank:1
            numberOfMarkets:9800
            numberOfExchanges:190
            sparkline: {
                [key: string]: string
            }
            allTimeHigh: {
                price: string,
                timestamp: number
            }
            coinrankingUrl: string,
        }
    }
}

export type CoinHistory = {
    status:"success"
    data: {
        change: string,
        history: {
            [key: number]: 
                CoinHistoryGraphPoint
        }
    }
}

export type CoinHistoryGraphPoint = {
    price: string,
    timestamp: number,
}

export type CoinNews = {
    status: string,
    data: CoinNew[]
    
}

export type CoinNew = {
    url: string,
    title: string,
    description: string,
    thumbnail: string,
    createdAt: string
}

