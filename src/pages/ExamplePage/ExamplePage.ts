import HTMLPageInterFace from 'vnnative3-webview/dist/HTMLPage'
import VnNative3HTMLElement from 'vnnative3-webview/dist/HTMLElement/index';
import NukeJSRoute from "nukejs-router/dist/libs/NukeJSRoute";
import './ExamplePage.scss';
import ExamplePageStateInterface from './ExamplePage.State.Interface';
import header from '../../components/header/header';
export default class ExamplePage implements HTMLPageInterFace {
    state : ExamplePageStateInterface = {
        title : "Example page",
        slogan : "Document",
        header : header() 
    }; 
    route : NukeJSRoute = new NukeJSRoute();
    constructor() {
        console.log('this.route',this.route);
    } 
    public beforeRender() : void {}  
    public afterRender() : void {

    }    
    public render() : void {
        (new VnNative3HTMLElement).empty('root').head(this.state).next(() => {
            console.log("Hello I'm next action ! You can use a lots of actions");
        }).add('root',require('./ExamplePage.html').default,this.state); 
    }  
}             