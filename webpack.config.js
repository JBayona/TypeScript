//Webpack correrá el compilador tsc por nosotros
module.exports = {
    entry: './src/app.ts',
    output: {
        filename: 'app.js',
        path: __dirname + './dist'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
             test: /\.ts$/, //Recoge las typescript files
             use: 'awesome-typescript-loader' //Si las encuentra usa este loader
        }]
    }
}