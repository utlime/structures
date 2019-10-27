import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import clear from 'rollup-plugin-clear';
import { camelCase, upperFirst } from 'lodash';
// @ts-ignore
import path from 'path';

const ROOT = process.cwd();
const pkg = require(path.join(ROOT, 'package.json'));

const nameBuilder = name => upperFirst(camelCase(name));
const globals = Object.keys(pkg.peerDependencies || {}).reduce((acc, cur) => ({ ...acc, [cur]: nameBuilder(cur) }), {});

export default [
  {
    output: [
      { file: pkg.main, format: 'umd' },
      { file: pkg.module, format: 'es' },
      { file: pkg.unpkg.replace('.min', ''), format: 'iife' },
    ],
  },
  {
    output: [{ file: pkg.unpkg, format: 'iife' }],
    plugins: [terser()],
  },
].map(({ output, plugins = [] }) => {
  return {
    input: path.join(ROOT, 'src/index.ts'),
    external: Object.keys(globals),
    output: output.map(({ file, format }) => ({
      file: path.join(ROOT, file),
      format,
      sourcemap: true,
      name: nameBuilder(pkg.name),
      globals,
    })),
    plugins: [
      clear({ targets: [path.join(ROOT, 'dist')] }),
      typescript({ useTsconfigDeclarationDir: true }),
      commonjs(),
      resolve({
        customResolveOptions: {
          moduleDirectory: 'node_modules',
        },
      }),
      ...plugins,
    ],
  };
});
