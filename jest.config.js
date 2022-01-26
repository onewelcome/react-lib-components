/**
 * Identity obj proxy is needed for jest to be able to properly import scss files.
 */
module.exports = {
  setupFilesAfterEnv: ['./setupTests.ts'],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
  },
};
