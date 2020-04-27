const logger = (message) => {
  console.log(`log1: ${message}`);
};

logger.log2 = (message) => {
  console.log(`log2: ${message}`);
};

module.exports = logger;
