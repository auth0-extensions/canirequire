const Path = require('path');

const abcsort = function (a, b) {
  if (a.name < b.name) {
      return -1;
  }

  if (a.name > b.name) {
      return 1;
  }

  return 0;
};


const manifest = require(Path.join(process.env.VERQUIRE_DIR, 'packages.json'));


const modules = Object.keys(manifest).reduce((acc, module_name) => {
    const versions = manifest[module_name];

    versions.forEach((version) => {
         const moduleObj = {
           name: module_name,
           version: version
         };

         acc.push(moduleObj);
     });

     return acc;
  }, [])
  .sort(abcsort);

module.exports = cb => {
    cb(null, {
        node_version: process.version,
        modules: modules
    });
};