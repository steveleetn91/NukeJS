import HTMLPageInterFace from 'vnnative3-webview/dist/HTMLPage'
import VnNative3HTMLElement from 'vnnative3-webview/dist/HTMLElement/index';
import './IndexPage.scss';
import IndexPageStateInterface from './IndexPage.State.Interface';
import header from '../../components/header/header';
const packageJson = require('../../package.json');
export default class IndexPage implements HTMLPageInterFace {
    state : IndexPageStateInterface = { 
        title : "Vn Native 3",
        slogan : "Cross platforms - Version " + packageJson.version,
        header : header(),
        point : 0
    };  
    constructor() {}      
    public beforeRender() : void {}   
    public afterRender() : void { 
        // you shuold use vn native form
        document.getElementById("increase-button").addEventListener("click",(ev : Event) => {
            this.state.point +=1;
            /**
             * When status change you need render again
             */
            this.render();
            this.afterRender();
        }); 
    }      

    public render() : void { 
        /**
         * We only quick demo so can use action. 
         * But in fact you don't shuold use for main page. 
         * Because all component will render again if main page render again. 
         * 
         */
        (new VnNative3HTMLElement).empty('root').head(this.state).next(() => {
            console.log("Hello 2 I'm next action ! You can use a lots of actions ");
        }).add('root',require('./IndexPage.html').default,this.state); 
    }   
}              