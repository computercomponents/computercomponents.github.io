const sync = require("browser-sync-webpack-plugin");
const path = require("path");
const prefixer = require('autoprefixer');
const extractCss = require("extract-text-webpack-plugin");
const extractHTML = require('html-webpack-plugin');

let devModeSettings = { //seems doesn't affect except url
    cssOptions: {
        minimize: false,
        url: false
    }
}

let config = {
    entry: "./entry.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,"out"),
    },
    watch: true, // отслеживание изменений
    plugins: [
        new sync({
            host: "localhost",
            port: 6555,
            server: {
                baseDir: "./"  // здесь д.б. index.html, не регариует на ../
            },
            open: false,
            files: ["./*.html"]
        }),
        new extractCss("styles.css"),


        new extractHTML({
            filename: "../index.html",
            template: "./indexPage/modules/root/index.pug"
        }),
        new extractHTML({
            filename: "../powerSystem.html",
            template: "./powerSystem/modules/root/index.pug"
        }),
        new extractHTML({
            filename: "../computingSystem.html",
            template: "./computingSystem/modules/root/index.pug"
        }),
        new extractHTML({
            filename: "../dataAndCoolingSystem.html",
            template: "./dataAndCoolingSystem/modules/root/index.pug"
        }),
        new extractHTML({
            filename: "../ioSystem.html",
            template: "./ioSystem/modules/root/index.pug"
        })


    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                use:
                    extractCss.extract({
                        use:
                        [
                            {
                                loader: "css-loader",
                                options: devModeSettings.cssOptions
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    plugins: [
                                        prefixer ({browsers: ['ie >= 9', 'last 2 version']})
                                    ]}
                            },
                            "less-loader"
                        ]})
            },
            {
                test: /\.(?:png|jpe?g|gif|tiff)$/, 
                use:
                 [
                    {
                        loader: "file-loader",
                        options: {
                            regExp: /modules(.*)/, 
                            name: '[1]' 
                        }
                    } 
                ]
            },
            {
                test: /\.(?:eot|svg|ttf|woff)$/, 
                use:
                 [
                    {
                        loader: "file-loader",
                        options: {
                            name: "fonts/[name].[ext]"
                        }
                    } 
                ]
            },
            {
                test: /\.pug$/, 
                loader: ['raw-loader', 'pug-html-loader']
            }
        ]
    }
}

module.exports = (env, options) => {
   if(options.mode == "production")
   {
        devModeSettings.cssOptions.minimize = true;
   }
    return config;
}