const path = require('path');

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions
}) => {
  switch (stage) {
    case 'build-javascript':
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /\.yaml$/,
              include: path.resolve('data'),
              loader: 'yaml'
            }
          ]
        }
      });
  }
};
