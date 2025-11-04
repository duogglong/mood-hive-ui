// ...existing code...
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Ensure resolver exists
config.resolver = config.resolver || {};

// Map fake import to real jsx runtime file in node_modules/react
config.resolver.extraNodeModules = {
  ...(config.resolver.extraNodeModules || {}),
  'react/compiler-runtime': path.join(__dirname, 'node_modules', 'react', 'jsx-runtime.js'),
  'react/jsx-runtime': path.join(__dirname, 'node_modules', 'react', 'jsx-runtime.js'),
};

module.exports = withNativeWind(config, { input: './global.css' });
// ...existing code...