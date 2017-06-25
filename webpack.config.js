var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var Clean = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var stylelint = require('stylelint');
var configSuitcss = require("stylelint-config-suitcss")
var StringReplacePlugin = require("string-replace-webpack-plugin");

var pkg = require('./package.json');
var vendorDeps = pkg.dependencies;
delete vendorDeps['material-design-icons'];

const materialIconPath = path.join(__dirname, 'node_modules/material-design-icons/iconfont');
const materializePath = path.join(__dirname, 'node_modules/materialize-css/dist/fonts/roboto');

const fontAwesomePath = path.join(__dirname, 'node_modules/react-fa');
const bsNotifierPath = path.join(__dirname, 'node_modules/react-bs-notifier');
const TARGET = process.env.npm_lifecycle_event;

var envVars = {};
if (TARGET === 'start') {
    envVars = require('./env/dev/vars-dev.json');
} else {
    envVars = require('./env/prod/vars-production.json');
}

const htmlTemplatePath = envVars.htmlTemplatePath;
const appBasePath = envVars.appBasePath;

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

process.env.BABEL_ENV = TARGET;

var common = {
    entry: PATHS.app,
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            'ie': 'component-ie'
        }
    },
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                loaders: ['eslint'],
                include: PATHS.app
            },
            {
                test: /\.cssx$/,
                loaders: ['postcss'],
                include: PATHS.app
            },
        ],
        loaders: [
            {
                test: /Constant.js$/,
                loader: StringReplacePlugin.replace({
                    replacements: [
                        {
                            pattern: /<!-- @variable (\w*?) -->/ig,
                            replacement: function (match, p1, offset, string) {
                                return envVars[p1];
                            }
                        }
                    ]
                })
            },
            {
                test: /\.jsx?$/,
                loaders: ['babel'],
                include: [PATHS.app, fontAwesomePath]
            },
            {
                test: /\.png$/,
                loaders: ["url-loader?limit=100000"],
                include: PATHS.app
            },
            {
                test: /\.jpg$/,
                loaders: ["file-loader"],
                include: PATHS.app
            },
            {
                test: /\.(woff(2)?)(\?[a-z0-9]+)?$/,
                loaders: ["url-loader?limit=10000&mimetype=application/font-woff"],
                include: [PATHS.app, materialIconPath, fontAwesomePath]
            },
            {
                test: /\.(otf|ttf|eot|svg)(\?[a-z0-9]+)?$/,
                loaders: ["file-loader"],
                include: [PATHS.app, materialIconPath, fontAwesomePath]
            },
            {
                test: /\.(woff(2)?)(\?.+)$/,
                loaders: ["url-loader?limit=10000&mimetype=application/font-woff"],
                include: [fontAwesomePath]
            },
            {
                test: /\.(otf|ttf|eot|svg)(\?.+)$/,
                loaders: ["file-loader"],
                include: [fontAwesomePath]
            },
            {
                test: /\.swf$/,
                loader: "file?name=[path][name].[ext]",
                include: PATHS.app
            }
        ]
    },
    postcss: function () {
        return [stylelint(configSuitcss)];
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Playhouse App',
            baseUrl: appBasePath,
            template: htmlTemplatePath
        }),
        new StringReplacePlugin()
    ]
};

if (TARGET === 'start' || !TARGET) {
    module.exports = merge(common, {
        devtool: 'eval-source-map',
        output: {
            path: PATHS.build,
            publicPath: "/",
            filename: "bundle.js"
        },
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loaders: ['style', 'css'],
                    include: [PATHS.app, fontAwesomePath]
                },
                {
                    test: /\.less$/,
                    loader: 'style!css!less',
                    include: [bsNotifierPath]    
                }
            ]
        },
        devServer: {
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,

            // display only errors to reduce the amount of output
            stats: 'errors-only',

            // parse host and port from env so this is easy
            // to customize
            host: process.env.HOST,
            port: 5556
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                // This affects react dev settings
                'process.env.NODE_ENV': JSON.stringify('development')
            })
        ]
    });
}


if (TARGET === 'build' || TARGET === 'stats' || TARGET === 'deploy') {
    module.exports = merge(common, {
        entry: {
            app: PATHS.app,
            vendor: Object.keys(vendorDeps)
        },
        output: {
            path: PATHS.build,
            filename: '[name].[chunkhash].js'
        },
        devtool: 'source-map',
        module: {
            loaders: [
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract('style', 'css'),
                    include: [PATHS.app, fontAwesomePath]
                },
                {
                    test: /\.less$/,
                    loader: ExtractTextPlugin.extract('style', 'css!less'),
                    include: [bsNotifierPath]
                }
            ]
        },
        plugins: [
            new Clean(['build']),
            new ExtractTextPlugin('styles.[chunkhash].css'),
            new webpack.optimize.CommonsChunkPlugin(
                'vendor',
                '[name].[chunkhash].js'
            ),
            new webpack.optimize.DedupePlugin(),
            new webpack.DefinePlugin({
                // This affects react lib size
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]
    });
}
