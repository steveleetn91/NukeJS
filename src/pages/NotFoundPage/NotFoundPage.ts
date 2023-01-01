import HTMLPageInterFace from 'vnnative3-webview/dist/HTMLPage'
import VnNative3HTMLElement from 'vnnative3-webview/dist/HTMLElement/index';
import './NotFoundPage.scss';
import NotFoundPageStateInterface from './NotFoundPage.State.Interface';
import header from '../../components/header/header';
export default class NotFoundPage implements HTMLPageInterFace {
    state : NotFoundPageStateInterface = {
        title : "NukeJS",
        slogan : "Cross platforms",
        header : header()
    }
    constructor() {}      
    public beforeRender() : void {}   
    public afterRender() : void {
    }      
    public render() : void { 
        (new VnNative3HTMLElement).empty('root').head(this.state).next(() => {
            console.log("Hello 2 I'm next action ! You can use a lots of actions ");
        }).add('root',require('./NotFoundPage.html').default,this.state); 
    }  
}              