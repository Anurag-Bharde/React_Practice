// import { useEffect } from "react"
import { RecoilRoot, useRecoilState ,useRecoilValue} from "recoil"
import { notifications, totalNotification } from "./store/atom"

function App(){

  return <div>
  <RecoilRoot>
   <Appbar />
   </RecoilRoot>
  </div>
}

function Appbar(){

  const [networkCount, setNetworkCount]=useRecoilState(notifications)
  const totalnotify= useRecoilValue(totalNotification)

  return (
    <>
      <button>Home</button>
      <button>My Network ({networkCount.networks})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messages ({networkCount.messaging})</button>
      <button>Notification({networkCount.notifications})</button>
      <button>Me ({totalnotify})</button>
    </>
  )

}

export default App