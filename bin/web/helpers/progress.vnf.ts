import ProgressVnfInterface from "./progress.vnf.interface";
import  * as cliProgress from "cli-progress"
import * as ansiColors from "ansi-colors";
export default class ProgressVNF implements ProgressVnfInterface {
    private processing : number = 0;
    private bar : cliProgress.SingleBar;
    init(speed : number = 200): ProgressVnfInterface {
        this.bar = new cliProgress.SingleBar({
            format: 'Nuke Built |' + ansiColors.green('{bar}') + ' | {value}%/{total}% \n',
            barCompleteChar: '\u2588',
            barIncompleteChar: '\u2591',
            hideCursor: true
        }, cliProgress.Presets.shades_classic);       
        this.bar.start(100, this.processing); 
        for(let i=0;i<99;i++) {
            setTimeout(() => {
                this.increment();
            },i * speed);
        }
        return this;
    }
    update(process : number = 0): ProgressVnfInterface {
        this.processing = process;
        this.bar.update(this.processing); 
        return this;
    }
    stop(): ProgressVnfInterface {
        this.bar.stop();
        return this;
    }
    increment(): ProgressVnfInterface {
        this.bar.increment();
        return this;
    }
}