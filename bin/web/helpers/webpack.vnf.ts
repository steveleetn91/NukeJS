import WebPackVNFInterface from "./webpack.vnf.interface";
import * as cli from "cli";
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const fs = require('fs');
const webpack = require('webpack');
const output = `${__dirname}/../../../../www/assets`;
const iosOutput = `${__dirname}/../../../../platforms/ios/www`
const minimizer = [
    new CssMinimizerPlugin(),
    '...'
];
const rules = [
    {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    },
    {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
    },
    {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    },
    {
        test: /\.html$/i,
        loader: "html-loader",
    },
    {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
                plugins: ['@babel/plugin-proposal-object-rest-spread']
            }
        }
    }
];
export default class WebPackVNF implements WebPackVNFInterface {
    listPage(): Array<string> {
        const directoryPage = __dirname + '/../../../../pages';
        let data: Array<string>
        data = [];
        let list = fs.readdirSync(directoryPage);
        if (list.length < 1) {
            return data;
        }
        return list;
    }
    listPageNeedBuild(): Array<string> {
        const directoryPage = __dirname + '/../../../../bin/web/tmp/pages/';
        let data: Array<string>;
        data = []
        let list = fs.readdirSync(directoryPage);
        if (list.length < 1) {
            return data;
        }
        for (let i = 0; i < list.length; i++) {
            if (list[i].includes("ts")) {
                let key = list[i].toString().replaceAll('.ts', '').replaceAll('-', '_');
                data[key] = `${__dirname}/../../../../bin/web/tmp/pages/${list[i]}`;
            }
            if ((i + 1) === list.length) {
                return data;
            }
        }
    }
    buildSinglePage(pageName: string, rebuild: boolean = true, callback: Function): void {
        const build: Function = async (next: Function): Promise<Function> => {
            const lazyloadTemplate = await fs.readFileSync(`${__dirname}/../../../../bin/web/tmp/lazyload.vnf`,
                { encoding: 'utf8', flag: 'r' });

            const tmp_lazyloadTemplate = lazyloadTemplate.replaceAll('{page_name}', pageName);
            fs.writeFileSync(`${__dirname}/../../../../bin/web/tmp/pages/${pageName}.ts`, tmp_lazyloadTemplate);
            return next();
        }
        let entry: any = {}
        entry[pageName] = `${__dirname}/../../../../bin/web/tmp/pages/${pageName}.ts`
        const config = {
            entry: entry,
            mode: "production",
            devtool: "eval-cheap-source-map",
            output: {
                filename: '[name].bundle.js',
                path: output + `/${pageName}`,
                clean: rebuild,
            },
            optimization: {
                minimizer: minimizer
            },
            plugins: [
                new MiniCssExtractPlugin({
                    filename: '[name].bundle.css'
                })
            ],
            module: {
                rules: rules,
            },
            resolve: {
                extensions: ['.tsx', '.ts', '.js'],
            },
            performance: {
                hints: "warning",
                maxEntrypointSize: 2560000,
                maxAssetSize: 2560000
            }
        }
        build((): void => {
            webpack(config, (err: any, stats: any): void => {
                if (err) {
                    cli.error(err.toString());
                    return;
                }

                if (stats.hasErrors()) {
                    cli.error(stats.toString());
                    return;
                }

                //cli.info(stats);
                if (callback) {
                    callback();
                }
            });
        });
    }
    buildRouterPage(rebuild: boolean = true): void {
        const config = {
            entry: {
                app: `${__dirname}/../../../../src/bootstrap.ts`,
            },
            mode: "production",
            devtool: "eval-cheap-source-map",
            output: {
                filename: '[name].bundle.js',
                path: output + '/app',
                clean: rebuild,
            },
            optimization: {
                minimizer: minimizer
            },
            plugins: [
                new MiniCssExtractPlugin({
                    filename: '[name].bundle.css'
                })
            ],
            module: {
                rules: rules,
            },
            resolve: {
                extensions: ['.tsx', '.ts', '.js'],
            },
            performance: {
                hints: "warning",
                maxEntrypointSize: 2560000,
                maxAssetSize: 2560000
            }
        }
        webpack(config, (err: any, stats: any): void => {
            if (err) {
                cli.error(err.toString());
                return;
            }

            if (stats.hasErrors()) {
                cli.error(stats.toString());
                return;
            }
        });
    }
    buildSinglePageiOS(pageName: string, rebuild: boolean = true, callback: Function): void {
        const build = async (next: Function) => {
            const lazyloadTemplate = await fs.readFileSync(`${__dirname}/../../../../bin/web/tmp/lazyload.vnf`,
                { encoding: 'utf8', flag: 'r' });

            const tmp_lazyloadTemplate = lazyloadTemplate.replaceAll('{page_name}', pageName);
            fs.writeFileSync(`${__dirname}/../../../../bin/web/tmp/pages/${pageName}.ts`, tmp_lazyloadTemplate);
            return next();
        }
        let entry: any = {};
        entry[pageName] = `${__dirname}/../../../../bin/web/tmp/pages/${pageName}.ts`
        const config = {
            entry: entry,
            mode: "production",
            devtool: "eval-cheap-source-map",
            output: {
                filename: '[name].bundle.js',
                path: iosOutput + `/`,
                clean: rebuild,
            },
            optimization: {
                minimizer: minimizer
            },
            plugins: [
                new MiniCssExtractPlugin({
                    filename: '[name].bundle.css'
                })
            ],
            module: {
                rules: rules,
            },
            resolve: {
                extensions: ['.tsx', '.ts', '.js'],
            },
            performance: {
                hints: "warning",
                maxEntrypointSize: 2560000,
                maxAssetSize: 2560000
            }
        }
        build((): void => {
            webpack(config, (err: any, stats: any): void => {
                if (err) {
                    cli.error(err.toString());
                    return;
                }

                if (stats.hasErrors()) {
                    cli.error(stats.toString());
                    return;
                }

                cli.info(stats);
                if (callback) {
                    callback();
                }
            });
        });
    }
    buildRouterPageiOS(rebuild: boolean = true): void {
        const config = {
            entry: {
                app: `${__dirname}/../../../../src/bootstrap.ts`,
            },
            mode: "production",
            devtool: "eval-cheap-source-map",
            output: {
                filename: '[name].bundle.js',
                path: iosOutput + '/',
                clean: rebuild,
            },
            optimization: {
                minimizer: minimizer
            },
            plugins: [
                new MiniCssExtractPlugin({
                    filename: '[name].bundle.css'
                })
            ],
            module: {
                rules: rules,
            },
            resolve: {
                extensions: ['.tsx', '.ts', '.js'],
            },
            performance: {
                hints: "warning",
                maxEntrypointSize: 2560000,
                maxAssetSize: 2560000
            }
        }
        webpack(config, (err: any, stats: any): void => {
            if (err) {
                cli.error(err.toString());
                return;
            }

            if (stats.hasErrors()) {
                cli.error(stats.toString());
                return;
            }
        });
    }
}