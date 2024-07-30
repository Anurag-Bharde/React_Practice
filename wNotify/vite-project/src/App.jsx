import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { NetworkCount, JobsCount,MsgCount,NotifyCount,MewerTot  } from './store/atom'

function App() {
    

  return (
    <>
      <RecoilRoot>
        <NotifyBox />
        </RecoilRoot>
    </>
  )
}


function NotifyBox(){
  const networker=useRecoilValue(NetworkCount);
  const Jober=useRecoilValue(JobsCount);
  // const msger=useRecoilValue(MsgCount);
  const notifier=useRecoilValue(NotifyCount);
  // const mewer=useRecoilValue(MECount);

  const [gini,mini]=useRecoilState(MsgCount)

  const totel=useRecoilValue(MewerTot)

function Befo(){
  mini(gini+1)
}

  return <div>
  <button onClick={Befo}>Home </button>
  {/* {console.log(gini)} */}
  <button>My Network ({networker>=100 ? "99+" : networker})</button>
  <button>Jobs ({Jober>=100 ? "99+" : Jober})</button>
  <button>Messages ({gini})</button>
  <button>Notification ({notifier>=100 ? "99+" : notifier})</button>
  <button>Me ({totel})</button>
</div>
}

export default App
