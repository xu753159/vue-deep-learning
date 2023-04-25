import {App} from "vue";
import TrDialog from "@/components/dialog";

const comList =[TrDialog]


export function globalComInit(app:App){
    comList.forEach(com=>app.use(com))
}


