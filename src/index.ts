import fs from 'fs'
import { parse } from '@babel/parser'
import { transformFromAstSync } from '@babel/core'
interface esTransformConfig {
  include: RegExp
}

function esTransform(config: esTransformConfig) {
  const { include } = config
  if (!include)
    throw new Error('"include" is must.')

  return {
    name: 'esbuild-plugin-es-transform',
    setup(build: any) {
      build.onLoad({ filter: include }, async (args: any) => {
        console.log('onLoad')
        const { path } = args
        const source = fs.readFileSync(path, 'utf-8')

        const ast = parse(source, { sourceType: 'module' })

        // const code = transformFromAstSync(ast, undefined, {
        //   presets: ['env'],
        // })

        console.log('ast:', ast)

        return { contents: source }
      })
    },
  }
}

export default esTransform
