import { createApp, type Component } from "vue";
export function  mountComponent(rootComponent:Component){
    const app =createApp(rootComponent)
    const root = document.createElement('div')
    document.body.appendChild(root)
    return {
        instance:app.mount(root),
        unmount() {
            app.unmount();
            document.body.removeChild(root);
          },
    }

}