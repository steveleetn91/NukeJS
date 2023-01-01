import RouterConfig from "./router";
import "./assets/scss/global.scss";
import NukeJSRouter from "../node_modules/nukejs-router/dist/libs/NukeJSRouter";
const Router : RouterConfig = new RouterConfig;
const ModuleConfig : NukeJSRouter = new NukeJSRouter();
ModuleConfig.import(Router.config(),Router.notFound());
class VnNativeBootstrap {}
export default VnNativeBootstrap