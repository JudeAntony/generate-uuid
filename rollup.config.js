// Rollup plugins
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import globals from 'rollup-plugin-node-globals';
import builtins from 'rollup-plugin-node-builtins';
import json from 'rollup-plugin-json';

export default {
	entry: 'src/main.js',
	dest: 'public/bundle.js',
	format: 'iife',
    sourceMap: 'inline',
    plugins: [
        globals(),
        builtins({ crypto: true }),
        json(),
        resolve({
            module: true, // Default: true
            jsnext: true,
            main: true,
            browser: true,
            preferBuiltins: true, // Default: true
            extensions: ['.js', '.json']
        }),
        babel({
            exclude: ['node_modules/**']
        }),
        commonjs({
            include: ['node_modules/**']
            // exclude: [ 'node_modules/crypto-browserify/**']
        }),
    ]
};