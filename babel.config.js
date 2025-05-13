module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    'nativewind/babel',
  ],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['./'],
        alias: {
          '@assets': './assets',
          '@components': './src/components',
          '@screens': './src/screens',
          '@config': './src/config',
          '@navigation': './src/navigation',
          '@services': './src/services',
          '@shared': './src/shared',
          '@store': './src/store',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
