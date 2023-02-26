import webpack, {type RuleSetRule} from "webpack";
import {BuildPaths} from "../build/types/config";
import path from 'path'
import {buildCssLoaders} from "../build/loaders/buildCssLoaders";

export default ({config}: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    html: '',
    entry: '',
  }
  config?.resolve?.modules?.push(paths.src)
  config?.resolve?.extensions?.push('.ts', '.tsx')



  // @ts-ignore
  config.module.rules = config?.module?.rules?.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }

    return rule
  })

  config?.module?.rules?.push(buildCssLoaders(true))
  config?.module?.rules?.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack']
  })

  return config
}