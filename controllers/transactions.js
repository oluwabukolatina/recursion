const data = require('../data');

module.exports = {

    async getTransactions(req, res) {
        const { transactionId, confidenceLevel } = req.query;
        // console.log(transactionId, confidenceLevel)
        const result = recurse(data, transactionId);

        console.log(result);
        res.send({ result });

    }
}

function recurse(data, transactionId) {
    let transaction;
    for (let i = 0; i <= data.length; i++) {
        console.log(`layer${i}`);
        // console.log(data[i].name);
        console.log('jhsdbvkbsdhjksdzkvkzbxkvjbjzbxcvkjsdkzxbvcbdbxz')
        if (data.id === transactionId) {
            transaction = data;
            console.log(`layer${i}`, transaction);
        }
        
        if (data[i].children !== undefined) {
            console.log(`layer${i}`);
            recurse(data[i].children, transactionId);
        }
    }
    return transaction;
}
