
//App.tsx


import { reactive,ref,getCurrentInstance  } from 'vue'
import HelloWorld from './view/home/index'

const data= [1,2,3,45,6,7]

export default{
    props:{
        msg:{
        type:Number,
         default:3
        }
    },
    setup(props){
        const {proxy} :any= getCurrentInstance()
        // console.log(proxy.$TrDiaglo)
        const ok = ref(false)
        const count = reactive({data:1})
        function itemClick(event:MouseEvent, index:number,item:number):void{
            console.log(event,index,item)
            
        }
        return ()=>{
            // $TrDiaglo({msg:'ssss'})
            return <>
            {proxy.$TrDiaglo({msg:'sss'})}
            <div>{ok.value ? <div>yes</div> : <span>no</span>}</div>
            <div>{count.data}</div>
            <div>{props.msg}</div>
            <div>
              {data.map((item,index)=><p onClick={event=>itemClick(event,index,item)} key={index}>{item}</p>)}
            </div>
            {/* <HelloWorld child={'ss'} onChild={data=>console.log(data)}>
                {{default:()=>'default slot',
                footer:(slotdata:{text:string})=>[<span>foo{slotdata.text}</span>,<span>foo{slotdata.text}</span>]
            }}
            </HelloWorld> */}
            </>
        }
    }
}





