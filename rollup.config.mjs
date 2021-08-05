import jspmRollup from '@jspm/plugin-rollup';
import { babel } from '@rollup/plugin-babel';


const baseUrl = new URL('./packages', import.meta.url);

export default {
  // Important to use "./" here to indicate a local path src/packages/app/app.js
  // and not a package. Resolved to baseUrl below.
  input: ['./packages/app.jsx', './packages/main.jsx'],
  output: {
    dir: 'dist'
  },
  plugins: [
    babel({ babelHelpers: 'bundled' }),
    jspmRollup({
      baseUrl,

      // Generator options as per @jspm/generator
      defaultProvider: 'jspm',
      env: ['browser']
    })
  ]
}
