const data = require('../data');

module.exports = {
    async getTransactions(req, res) {
      const { transactionId, confidenceLevel } = req.query;
  
      const { id, age, name, email, phone, geoInfo, children } = walk(
        data,
        transactionId
      );
      const newChildren = [];
      walkByConfidence(children, confidenceLevel, newChildren);
  
      res.send({ id, age, name, email, phone, geoInfo, children: newChildren });
    },
  };
  
  function walkByConfidence(data, confidence, store) {
    if (!data) {
      return;
    }
    if (Array.isArray(data)) {
      for (let index = 0; index < data.length; index++) {
        const currentData = data[index];
        if (
          currentData.connectionInfo &&
          currentData.connectionInfo.confidence >= confidence
        ) {
          const {
            id,
            age,
            name,
            email,
            phone,
            geoInfo,
            connectionInfo,
          } = currentData;
          store.push({ id, age, name, email, phone, geoInfo, connectionInfo });
        }
        const result = walkByConfidence(currentData, confidence, store);
        if (result !== undefined) {
          return result;
        }
      }
    } else {
      if (data && data.children) {
        // Has children so we walk.
        return walkByConfidence(data.children, confidence, store);
      }
    }
  }
  function walk(data, transactionId) {
    if (Array.isArray(data)) {
      for (let index = 0; index < data.length; index++) {
        const currentData = data[index];
        // The meat
        if (currentData.id == transactionId) {
          return currentData;
        }
        const result = walk(currentData, transactionId);
        if (result !== undefined) {
          return result;
        }
      }
    } else {
      if (data.children) {
        return walk(data.children, transactionId);
      }
    }
  }
