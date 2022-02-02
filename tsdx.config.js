const replace = require('@rollup/plugin-replace');
const styles = require('rollup-plugin-styles');

const STATIC_CSP_NONCE = 'DsPHCoJqXm4vKCqFrm03y1';

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
        mode: ['inject', { attributes: { nonce: STATIC_CSP_NONCE } }],
        modules: true,
      })
    );
    return config;
  },
};
