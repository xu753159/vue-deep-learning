import type { Component,App } from "vue";
type WithInstall<T> =T&{install(app:App):void}
export function withInstall<T extends Component>(optons:T){
    (optons as Record<string,unknown>).install=(app:App)=>{
        if(optons.name){
            app.component(optons.name,optons)
        }
    }
    return optons as WithInstall<T>
}