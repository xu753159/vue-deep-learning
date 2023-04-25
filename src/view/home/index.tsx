    const isShow = false
    const element = () => {
        if (isShow) {
            return <span>我是if</span>
        } else {
            return <span>我是else</span>
        }
    }
export default {
    props:{
        child:{
            type:String
        }
    },
    emits:['Child'],
    setup(props,{slots,emit}){
        return ()=>{
            return <>
                <div>{element()}</div>
                <div>{slots.default()}</div>
                <span onClick={()=>emit('Child','sss')}>我是父组件传值{props.child}</span>
                <div>{slots.footer?.({text:'text slot'})}</div>
            </>
        }
    }

}

