import { type BuildOptions } from './types/config'

import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

export function BuildDevServer ({ port }: BuildOptions): DevServerConfiguration {
  return {
    port,
    open: true,
    historyApiFallback: true,
    hot: true
  }
}
