const codeMap={
    USD : "US",
    EUR : "EU",
    GBP : "GB",
    AUD : "AU",
    CAD : "CA",
    RUB : "RU",
    JPY : "JP",
    CNY : "CN",
    INR : "IN",
    BDT : "BD",
    DKK : "DK",
    HKD : "HK",
    NZD : "NZ", 
    NOK : "NO",
    PLN : "PL",
    SGD : "SG",
    ZAR : "ZA",
    SEK : "SE",
    CHF : "CH",
    MXN : "MX",
    CZK : "CZ",
}

const CountryCodeMapper = (currency) => {
    return codeMap[currency];
}

export {CountryCodeMapper}