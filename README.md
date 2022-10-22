<br>
<h2 align="center">esbuild-plugin-antd-patch</h2>
<br>

an esbuild plugin to fix the defect of ant-design-vue in vite.

## Background
I guess that esbuild can't parse 'import * as xxx from xxx'. I try to change it to 'import xxx from xxx', and esbuild can parse it normally. This is the birth of the plugin.
https://github.com/vueComponent/ant-design-vue/blob/1.x/components/_util/moment-util.js#L2


## Usage

```
npm install esbuild-plugin-antd-patch -D
```

```
// vite.config.js
import antdPatch from 'esbuild-plugin-antd-patch'
import { defineConfig } from 'vite'
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        antdPatch()
      ]
    }
  }
})
```

## Git Contribution submission specification

> reference [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) specification ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

- `feat` Add new features
- `fix` Fix the problem/BUG
- `style` The code style is related and does not affect the running result
- `perf` Optimization/performance improvement
- `refactor` Refactor
- `revert` Undo edit
- `test` Test related
- `docs` Documentation/notes
- `chore` Dependency update/scaffolding configuration modification etc.
- `workflow` Workflow improvements
- `ci` Continuous integration
- `types` Type definition file changes
- `wip` In development

## License

[MIT](./LICENSE) License &copy; 2022-PRESENT [德鲁叔叔](https://github.com/chenjiezi)