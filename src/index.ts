import fs from 'fs'
interface antdPatchConfig {
  include: RegExp
}

function antdPatch(config: antdPatchConfig) {
  const { include = /moment-util\.js$/ } = config

  return {
    name: 'esbuild-plugin-antd-patch',
    setup(build: { onLoad: (arg0: { filter: RegExp }, arg1: (args: { path: fs.PathOrFileDescriptor }) => Promise<{ contents: string }>) => void }) {
      build.onLoad({ filter: include }, async (args: { path: fs.PathOrFileDescriptor }) => {
        let source = fs.readFileSync(args.path, 'utf-8')
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

export default antdPatch
