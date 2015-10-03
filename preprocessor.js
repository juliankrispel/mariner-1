var babel = require('babel-core');
var _ = require('lodash');

module.exports = {
  process: function(src, path) {
    if(path.indexOf("node_modules") === -1 && babel.canCompile(path)) {
      var stage = process.env.BABEL_JEST_STAGE || 2;
      return babel.transform(src, _.merge({
        filename: path,
        stage: stage,
        retainLines: true,
        auxiliaryCommentBefore: "istanbul ignore next"
      }, {optional: ["es7.classProperties"]})).code;
    }else{
      return src;
    }
  }
};
