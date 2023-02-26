import webpack from 'webpack'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  const plugins = [
    new webpack.ProgressPlugin(),
    new BundleAnalyzerPlugin({ openAnalyzer: false }),
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      __IS__DEV__: JSON.stringify(isDev)
    })
  ]

  if (isDev) {
    plugins.push(new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin({ overlay: false }))
  }

  return plugins
}
