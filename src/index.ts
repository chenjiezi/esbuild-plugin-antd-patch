import fs from 'fs'
interface esTransformConfig {
  include: RegExp
}

function esTransform(config: esTransformConfig) {
  const { include } = config
  if (!include)
    throw new Error('"include" is must.')

  return {
    name: 'esbuild-plugin-es-transform',
    setup(build: { onLoad: (arg0: { filter: RegExp }, arg1: (args: { path: fs.PathOrFileDescriptor }) => Promise<{ contents: string }>) => void }) {
      build.onLoad({ filter: include }, async (args: { path: fs.PathOrFileDescriptor }) => {
        let source = fs.readFileSync(args.path, 'utf8')
        if (source.indexOf('import * as moment from')) {
          source = source.replace(
            /import\s\*\sas\smoment\sfrom/g,
            'import moment from',
          )
        }
        return { contents: source }
      })
    },
  }
}

export default esTransform
