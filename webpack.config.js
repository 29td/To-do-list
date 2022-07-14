import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
export const mode = 'development';
export const entry = './src/index.js';
export const devtool = 'inline-source-map';
export const devServer = {
  static: './dist',
};
export const plugins = [
  new HtmlWebpackPlugin({
    title: 'Output Manangement',
    template: './src/index.html'
  }),
];
export const output = {
  filename: 'main.js',
  path: resolve(__dirname, 'dist'),
  clean: true,
};
export const optimization = {
  runtimeChunk: 'single',
};