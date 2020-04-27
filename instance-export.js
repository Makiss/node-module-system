class Logger {
  constructor(name) {
    this.name = name;
  }
  log1(message) {
    console.log(`log1: [${this.name}]${message}`);
  }

  log2(message) {
    console.log(`log2: [${this.name}]${message}`);
  }
}

module.exports = new Logger('default');
module.exports.Logger = Logger;
