// const path = require('path');

// module.exports = {
//     entry: './src/index.ts',
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist')
//     },
//     resolve: {
//         extensions: ['.ts', '.js']
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.ts$/,
//                 use: 'ts-loader',
//                 exclude: /node_modules/
//             }
//         ]
//     }
// };

const path = require('path');

module.exports = {
    //mode: 'production', // Enables optimizations for production like minification
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/dist'),
        sourceMapFilename: "[name].js.map" // Generates source map files
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/dist'),
        library: 'BjLocationData', // This is the name of your library
        libraryTarget: 'umd', // Universal Module Definition
        umdNamedDefine: true
    },
    devtool: 'source-map', // Generates source maps
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
};

