import { createApp } from "vue";
import { Dialog } from "@/components/dialog"; 
const app =createApp({})
app.use(Dialog)
console.log(app,Dialog)
