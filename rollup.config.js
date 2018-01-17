// Rollup plugins
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import json from 'rollup-plugin-json';

export default {
	input: 'src/main.js',
    output: {
        file: 'public/bundle.js',
        format: 'iife',
        sourcemap: 'false',
    },
    plugins: [
        resolve({
            jsnext: true,
            main: true,
            browser: true,
            preferBuiltins: true, // Default: true
            extensions: ['.js', '.json']
        }),
        commonjs({
            include: 'node_modules/**'
        }),
        builtins({crypto: true}),
        globals(),
        json()
    ]
};