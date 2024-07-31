import { atom, selector } from "recoil";

export const Multi1=atom({
    key: "Intiialval",
    default:0
})
export const inpuValu=atom({
    key:"thenew valu",
    default:1
})

export const setler=selector({
    key:"Thehuh",
    get:({get})=>{
        const r1=get(Multi1);
        const r2=get(inpuValu);
        return r1*r2
    }
})