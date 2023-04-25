// import { withInstall } from "@/utils/withInstall";
import _TrDiaglo from "./dialog";
import { TrDiaglo } from "./function-call";
import {DiagloProps} from './dialog'

export default TrDiaglo;

declare module 'vue'{
    export interface GlobalComponents{
        TrDialog: typeof _TrDiaglo
    }
    export interface ComponentCustomProperties {
        $TrDiaglo: (options:DiagloProps) => void
    }
}

