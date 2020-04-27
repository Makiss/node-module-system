const fs = require('fs');

const myRequire = (moduleToImport) => {
  const module = { exports: {} };

  // 1. Resolve path to module
  const filePath = myRequire.resolve(moduleToImport);

  // 2. Return module from cache if already imported
  if (filePath in myRequire.cache) {
    return myRequire.cache[filePath].exports;
  }

  // 3. Load, wrap and evaluate module
  loadModule(module, filePath, myRequire);

  // 4. Cache module
  myRequire.cache[filePath] = module;

  return module.exports;
};

const loadModule = (module, filePath, require) => {
  const src = `((module, exports, require) => {${fs.readFileSync(
    filePath,
    'utf8'
  )}})(module, module.exports, require)`;
  eval(src);
};

myRequire.cache = {};

myRequire.resolve = (moduleToImport) => {
  return require.resolve(moduleToImport);
};

module.exports = myRequire;
