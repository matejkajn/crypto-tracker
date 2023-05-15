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