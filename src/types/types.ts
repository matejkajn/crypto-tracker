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