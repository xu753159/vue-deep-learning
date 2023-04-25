import { createApp,h } from 'vue'
import './style.css'
import App from './App'
import { globalComInit } from './plugins/global-com'
export const app = createApp({
    render(){
        return h('div',[h('div','Hello World'),h(App,{
            msg:33
        })])
    }
})
globalComInit(app)
app.mount('#app')

console.log('app',app)
