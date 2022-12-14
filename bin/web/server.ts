#!/usr/bin/env node
import * as cli from "cli";;
import WebPackVNF from "./helpers/webpack.vnf";
import * as express from "express";
const serveFs = require('fs')
let configWebServe = require("../../../config/config.json");
const chokidar = require('chokidar');
const watcher = chokidar.watch(__dirname + "/../../../pages", { ignored: /^\./, persistent: true });
const _path = require('path');
let frameworkInfo: string;
frameworkInfo = './framework.json';
const servePort: Number = configWebServe.PORT ? Number(configWebServe.PORT) : 9000;
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const packageJSON = require('../../../package.json');
try {
    let webHelper: WebPackVNF;
    webHelper = new WebPackVNF();
    if (serveFs.existsSync(frameworkInfo)) {
        webHelper.buildRouterPage();
        const myServe: Function = (): void => {
            app.set('view engine', 'ejs');
            app.use(express.static(`${__dirname}/../../../platforms/browser/www`));
            app.get('/', (req: any, res: any): void => {
                res.render(`${__dirname}/../../../bin/web/views/development.ejs`);
            });
            app.get('/:slug', (req: any, res: any): void => {
                res.render(`${__dirname}/../../../bin/web/views/development.ejs`);
            });
            app.get('/:slug/:slug', (req: any, res: any): void => {
                res.render(`${__dirname}/../../../bin/web/views/development.ejs`);
            });
            app.get('/:slug/:slug/:slug', (req: any, res: any): void => {
                res.render(`${__dirname}/../../../bin/web/views/development.ejs`);
            });
            app.get('/:slug/:slug/:slug/:slug', (req: any, res: any): void => {
                res.render(`${__dirname}/../../../bin/web/views/development.ejs`);
            });
            io.on('connection', (socket: any): void => {
                socket.on('has reload', (msg: string) => {
                    cli.info("Has update");
                });
            });
            http.listen(servePort, (): void => {
                cli.info(`Currently NukeJS isn't support hot reload for component, so let's change main page
                to trigger hot reload event`);
                cli.info(`Let's give for me a Started at github: https://github.com/steveleetn91/NukeJS`);
                cli.ok(`Server running at http://localhost:${servePort}/`);
            });
        }

        const applyChangeForPlatforms : Function = (name: string, callback: Function) : void => {

            let platforms = packageJSON.cordova.platforms;
            for (let i = 0; i < platforms.length; i++) {
                switch (platforms[i]) {
                    case "browser":
                        cli.exec(`cp -r ./www/assets/${name} ./platforms/browser/www/assets`);
                        break;
                    case "android":
                        cli.exec(`cp -r ./www/assets/${name} ./platforms/android/app/src/main/assets/www/assets`);
                        break;
                    case "ios":
                        cli.exec(`cp -r ./www/assets/${name} ./platforms/ios/www/assets`);
                        break;
                }
            }
            return callback();
        }

        /**
         * Server Listen change or add  
         */
        const reloadEvent: Function = (): void => {
            watcher
                .on('add', (path: string): void => {
                    cli.ok(`Listening ${path}`)
                })
                .on('change', (path: string): void => {
                    cli.info("Changed " + path.toString());
                    if (path.includes('.ts') || path.includes('.scss') || path.includes('.html')) {
                        path = path.replace(_path.join(__dirname, "/../../../pages"), '')
                            .replace('.Interface.ts', '')
                            .replace('.Service.ts', '')
                            .replace('.ts', '')
                            .replace('.scss', '')
                            .replace('.html', '');
                        const totalString = path.split('');
                        let name = '';
                        for (let i = 1; i < (totalString.length / 2); i++) {
                            name += totalString[i];
                            if ((i + 1) === (totalString.length / 2)) {
                                webHelper.buildSinglePage(name, true, () => {
                                    applyChangeForPlatforms(name,() => {
                                        io.emit('has reload', `Rebuild ${name}`);
                                        cli.ok(`Rebuild ${name}`)
                                    })
                                });
                            }
                        }
                    }
                })
        }

        const setupServeWeb: Function = (callback : Function): void => {
            cli.exec("rm -rf ./platforms/browser/www/index.html",(resp) : Function => {
                return callback();
            },(resp) : Function => {
                return callback();
            })
        }
        setupServeWeb(() => {
            myServe();
            reloadEvent();    
        })
    }
} catch (err) {
    cli.error(err.toString());
} 