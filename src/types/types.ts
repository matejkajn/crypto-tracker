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