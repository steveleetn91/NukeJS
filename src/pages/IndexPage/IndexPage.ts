import HTMLPageInterFace from 'vnnative3-webview/dist/HTMLPage'
import VnNative3HTMLElement from 'vnnative3-webview/dist/HTMLElement/index';
import NukeJSRoute from "nukejs-router/dist/libs/NukeJSRoute";
import './IndexPage.scss';
import IndexPageStateInterface from './IndexPage.State.Interface';
import header from '../../components/header/header';
export default class IndexPage implements HTMLPageInterFace {
    state : IndexPageStateInterface = { 
        title : "NukeJS",
        slogan : "Web Fronend Framework",
        header : header(),
        point : 0
    };  
    route : NukeJSRoute = new NukeJSRoute();
    constructor() {}      
    public beforeRender() : void {
        console.log('this.route',this.route);
    }   
    public afterRender() : void { 
           
    }      
    addPoint(){
        this.state.point +=1;
            /**
             * When status change you need render again
             */
            this.rerender();
    }
    onchangeInput(e : string){
        this.state.point = Number(e) >= 0 ? Number(e) : 0;
        this.rerender();
    }
    public render() : void { 
        /**
         * We only quick demo so can use action. 
         * But in fact you don't shuold use for main page. 
         * Because all component will render again if main page render again. 
         * 
         */
        (new VnNative3HTMLElement).empty('root').head(this.state).next(() => {
            //console.log("Hello I'm next action ! You can use a lots of actions ");
        }).add('root',require('./IndexPage.html').default,this.state); 
    }   
    private rerender() { 
        this.render();
        this.afterRender();
    }
}              