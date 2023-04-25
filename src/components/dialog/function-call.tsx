import { Component ,App} from 'vue'
import Diaglo,{DiagloProps} from './dialog'
import { mountComponent, } from '@/utils/mountComponent'
import { withInstall } from '@/utils/withInstall'
let instance:Component
function initInstance(options:DiagloProps){
    const wrapper ={
        setup(){
            return ()=><Diaglo msg={options.msg}></Diaglo>
        }
    };
    ({instance} = mountComponent(wrapper))
}

function TrDiaglo(options:DiagloProps){
    initInstance(options)
}


TrDiaglo.Component = withInstall(Diaglo)
TrDiaglo.install =(app:App)=>{
    app.use(TrDiaglo.Component)
    app.config.globalProperties.$TrDiaglo = TrDiaglo
}

export {TrDiaglo}