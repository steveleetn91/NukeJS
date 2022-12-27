#!/usr/bin/env node
import * as cli from "cli";
import ProgressVNF from "./helpers/progress.vnf";
import ProccessVnfInterface from "./helpers/progress.vnf.interface";
import WebPackVNF from "./helpers/webpack.vnf";
const fs = require('fs')
const BuildframeworkInfo = './framework.json';
try {
    let BuildwebHelper: WebPackVNF;
    BuildwebHelper = new WebPackVNF();
    const BuildProgress : ProccessVnfInterface = new ProgressVNF();
    BuildProgress.init(100);
    const buildWeb: Function = (next: Function): void => {
        cli.exec("cp -r ./www/* ./platforms/browser/www && cp -r ./framework.json ./platforms/browser/www/framework.json && cp -r ./bin/web/views/production.ejs ./platforms/browser/www/index.html", (resp: any) => {
            if (resp) {
                return next();
            }
        });
    }
    const buildRouter: Function = (next: Function): void => {
        cli.exec("rm -rf ./www/assets", (resp: any) : Function => {
            if (resp) {
                BuildwebHelper.buildRouterPage();
                return next();
            }
        });

    }
    const cleanCachePage: Function = (next: Function): void => {
        cli.exec("rm -rf ./bin/web/tmp/pages/*.ts", (resp) : Function => {
            return next();
        }, (resp) : Function => {
            return next();
        })
    }
    const buildPage: Function = (next: Function): void => {
        //cli.info("Some times us need the wait");
        let listPageNeedBuild: Array<string>
        listPageNeedBuild = BuildwebHelper.listPage();
        /**
         * INIT 
         */
        const robotLoadPage: Function = (listPageNeedBuild: Array<string>, key: number = 0): void | Function => {
            BuildwebHelper.buildSinglePage(listPageNeedBuild[key], true, () => {
                if ((key + 1) < listPageNeedBuild.length) {
                    robotLoadPage(listPageNeedBuild, key + 1);
                } else if ((key + 1) == listPageNeedBuild.length) {
                    return next();
                }
            });
        }
        robotLoadPage(listPageNeedBuild, 0);
    }
    const prepareBuild: Function = async (next: Function): Promise<Function> => {
        const lazyloadTemplate = await fs.readFileSync('./bin/web/tmp/lazyload.vnf',
            { encoding: 'utf8', flag: 'r' });
        const listPage = BuildwebHelper.listPage();
        for (let i = 0; i < listPage.length; i++) {
            let page = listPage[i];
            page = page.toString().replaceAll('.ts', '');
            const tmp_lazyloadTemplate = lazyloadTemplate.replaceAll('{page_name}', page);
            fs.writeFileSync(`./bin/web/tmp/pages/${page}.ts`, tmp_lazyloadTemplate);
            if ((i + 1) === listPage.length) {
                return next();
            }
        }
    }
    if (fs.existsSync(BuildframeworkInfo)) {
        cli.exec('rm -rf ./bin/web/tmp/pages/*.ts', (resp: any) : void => {
            if (resp) {
                prepareBuild(() => {
                    buildRouter(() => {
                        cleanCachePage(() => {
                            buildPage(() => {
                                buildWeb(() => {
                                    BuildProgress.update(100);
                                    BuildProgress.stop();
                                    cli.ok("Done");
                                });
                            });
                        });
                    });
                });
            }
        });
    }
} catch (err: any) {
    cli.error(err.toString());
}
