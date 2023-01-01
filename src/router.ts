export default class RouterConfig {
    config() : Array<{
        url : string,
        page : Promise<any>
    }>{
        return [
            {
                url:"/",
                page: import("./pages/IndexPage/IndexPage")
            },
            {
                url:"/example",
                page:import("./pages/ExamplePage/ExamplePage")
            },
            {
                url:"/index.html",
                page:import("./pages/IndexPage/IndexPage")
            }
        ]
    }
    notFound() : {
        url : string,
        page : Promise<any>
    } {
         // 404 page
        return {
            url:"/not-found",
            page:import("./pages/NotFoundPage/NotFoundPage")
        }
    }
}