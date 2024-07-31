import axois from "axios";
import {atom, selector} from "recoil"

export const notifications = atom ({
    key:"networkAtom",
    default: selector({
        key: "netwrokAtomSelect",
        get: async()=>{
            const res = await axois.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
})

export const totalNotification =selector({
    key:"totalNotification",
    get:({get}) => {
        const allNotification = get(notifications);
        return allNotification.network + allNotification.jobs +allNotification.notifications+ allNotification.messaging
    }
})