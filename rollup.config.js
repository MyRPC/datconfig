import resolve from 'rollup-plugin-node-resolve';

export default {
	input: 'src/index.js',
    targets: [
        { format: 'cjs', dest: 'dist/datconfig.cjs.js' },
        { format: 'umd', name: '_', dest: 'dist/datconfig.js' },
        { format: 'es', dest: 'dist/datconfig.es.js' },
    ],
    plugins: [
        resolve(),
    ],
};