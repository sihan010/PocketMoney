const allCryptoCurrencyList = (startIndex) => {
    let endpoint = `https://api.coinmarketcap.com/v2/ticker/?start=${startIndex}&limit=10&sort=rank`;
    //let endpoint = `https://api.coinmarketcap.com/v2/ticker/?start=${startIndex}&limit=10&sort=rank`;
    return fetch(endpoint)
        .then(res => res.json())
        .then(data => {
            //console.log("Raw Data: ",data.data);
            return data.data
        })
        .catch(err => {
            return -1;
        })
}

const singleCryptoCurrencyDetails = (symbol) => {
    let endpoint = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbol}&tsyms=USD,EUR,GBP,AUD,CAD,DKK,HKD,NZD,NOK,PLN,SGD,ZAR,SEK,CHF,RUB,INR,BDT,MXN,CZK,JPY,CNY`;
    //let endpoint = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${symbol}&tsyms=USD,EUR,GBP`;
    return fetch(endpoint)
        .then(res => res.json())
        .then(data => {
            //console.log("Raw Details Data: ",data.DISPLAY[symbol]);
            return data;
        })
        .catch(err => {
            return -1;
        })
}

const cryptoChartData = (crypto, fiat) => {
    let endpoint = `https://min-api.cryptocompare.com/data/histoday?fsym=${crypto}&tsym=${fiat}&limit=100`;
    return fetch(endpoint)
        .then(res => res.json())
        .then(data => {
            //console.log("Raw Chart Data: ",data.Data);
            return data.Data;
        })
        .catch(err => {
            return -1;
        })
}

const newsFeedAndcategory = () =>{
    let endpoint = "https://min-api.cryptocompare.com/data/news/feedsandcategories";
    return fetch(endpoint)
        .then(res=>res.json())
        .then(data =>{
            return data.Data;
        })
}

const NewsFetcher = (feed, category) =>{
    let endpoint=[];
    if(feed==undefined || category==undefined)
        endpoint[0] = 'https://min-api.cryptocompare.com/data/v2/news/?categories=BTC&feeds=coindesk'
    else
        endpoint[0] = `https://min-api.cryptocompare.com/data/v2/news/?categories=${category}&feeds=${feed}`
    
    return fetch(endpoint[0])
        .then(res=>res.json())
        .then(data =>{
            return data.Data;
        })
}

export { allCryptoCurrencyList, singleCryptoCurrencyDetails, cryptoChartData, newsFeedAndcategory, NewsFetcher }