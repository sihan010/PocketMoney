var _ = require('lodash')

const sortCrypto = (param, filteredData) =>{
    if (param === 'NA') {
        let sorted = _.orderBy(filteredData, ["name"], ["asc"])
        return sorted;
    }
    else if (param === 'ND') {
        let sorted = _.orderBy(filteredData, ["name"], ["desc"])
        return sorted;
    }
    else if (param === 'RA') {
        let sorted = _.orderBy(filteredData, ["rank"], ["asc"])
        return sorted;
    }
    else if (param === 'RD') {
        let sorted = _.orderBy(filteredData, ["rank"], ["desc"])
        return sorted;
    }
    else if (param === 'PA') {
        let sorted = _.orderBy(filteredData, ["quotes.USD.price"], ["asc"])
        return sorted;
    }
    else if (param === 'PD') {
        let sorted = _.orderBy(filteredData, ["quotes.USD.price"], ["desc"])
        return sorted;
    }
    else if (param === 'CA') {
        let sorted = _.orderBy(filteredData, ["quotes.USD.percent_change_24h"], ["asc"])
        return sorted;
    }
    else if (param === 'CD') {
        let sorted = _.orderBy(filteredData, ["quotes.USD.percent_change_24h"], ["desc"])
        return sorted;
    }
    else if (param === 'SA') {
        let sorted = _.orderBy(filteredData, ["symbol"], ["asc"])
        return sorted;
    }
    else if (param === 'SD') {
        let sorted = _.orderBy(filteredData, ["symbol"], ["desc"])
        return sorted;
    }
    else return filteredData;
}

export {sortCrypto}