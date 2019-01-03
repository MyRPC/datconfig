import resolve from 'rollup-plugin-node-resolve';

export default {
	input: 'src/index.js',
    output: {
        format: 'cjs',
        file: 'dist/datconfig.cjs.js'
    },
    plugins: [
        resolve(),
    ],
};