const myRequire = require('./my-require');
const namedExport = myRequire('./named-export');
const functionExport = myRequire('./function-export');
const instanceExport = myRequire('./instance-export');

namedExport.log1('log1');
namedExport.log1('log2');

functionExport('log1 function');
functionExport.log2('log2 function');

instanceExport.log1('log1');
instanceExport.log1('log2');

const customLogger = new instanceExport.Logger('custom');
customLogger.log1('log1');
customLogger.log1('log2');

myRequire('./patcher');
instanceExport.customMethod();
