const replace = require('@rollup/plugin-replace');
const styles = require('rollup-plugin-styles');

module.exports = {
  rollup(config, opts) {
    config.plugins = config.plugins.map((p) =>
      p.name === 'replace'
        ? replace({
            'process.env.NODE_ENV': JSON.stringify(opts.env),
            preventAssignment: true,
          })
        : p
    );

    config.plugins.push(
      styles({
        modules: true,
      })
    );

    return config;
  },
};
