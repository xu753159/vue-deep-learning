import  type { Plugin } from "vite";

export default (enforce?:'pre'|'post'):Plugin=>{
    return {
        name:'bingPlugin',
        // config middleWare（中间件）
        config(UserConfig){
            return  {
                resolve:{
                    alias:{
                        '@':'/src/'
                    }
                }
            } 
        },
        configResolved(config) {
            console.log(config.resolve)
        },
        configureServer(app){
            return ()=>{
                app.middlewares.use((req,res,next)=>{
                    if(req.originalUrl==='/test'){
                        res.end('Hello Vite Plugin middleware')
                    }else{
                        next()
                    }
                })
            } 
        },
    //   transformIndexHtml(HTML){
    //     // return 'hello World'
    //     },
    //     handleHotUpdate(context){
    //         context.server.ws.send({
    //             type:'custom',
    //             event:'Bingtest'
    //         })
        
    //     }
    }

}