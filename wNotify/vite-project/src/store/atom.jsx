import {atom, selector} from "recoil"

export const NetworkCount=atom({
    key:"NetworkCount",
    default:102
})

export const JobsCount=atom({
    key:"JobsCount",
    default:0
})

export const MsgCount=atom({
    key:"MsgCount",
    default:0
})

export const NotifyCount=atom({
    key:"NotifyCount",
    default:200
})



export const MewerTot=selector({
    key:"MewerTot",
    get:({get})=>{
        const netcount=get(NetworkCount);
        const jobcount=get(JobsCount)
        const msgcount=get(MsgCount);
        const notifi=get(NotifyCount)

        return netcount+jobcount+msgcount+notifi
    }
})