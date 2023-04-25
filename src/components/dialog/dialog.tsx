import { defineComponent,ExtractPropTypes } from "vue";

export const dialogProps={
    msg:String,
    data:String,
    callback: Function
}
export type DiagloProps =ExtractPropTypes<typeof dialogProps>

// export default 

export default defineComponent({
    name:'TrDiaglo',
    props:dialogProps,
    setup(props,{slots,emit}){
        const {msg,data} =props
        return ()=>{
            return <>
                <div>sss {msg}ssss</div>
            </>
        }
    }
})