module.exports = {
  twin: {
    preset: 'styled-components',
    config: './tailwind.config.js',
    hasSuggestions: true,
    debug: false,
  },
  tailwind: {
    plugins: ['macros'],
    config: './src/tailwind.config.js',
    format: 'auto',
  },
}
