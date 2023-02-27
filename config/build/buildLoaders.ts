import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import { buildCssLoaders } from './loaders/buildCssLoaders'

export function buildLoaders ({ isDev, paths }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack']
  }

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locals: ['ru', 'en'],
              keyAsDefaultValue: true
            }
          ]
        ]
      }
    }
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
          }),
          transpileOnly: isDev
        }
      }
    ]
  }

  const styleLoader = buildCssLoaders(isDev)

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  return [
    svgLoader,
    babelLoader,
    fileLoader,
    typescriptLoader,
    styleLoader
  ]
}
