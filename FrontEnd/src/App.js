import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Next from './component/BridgeScreen/Next'
import Main from './component/BridgeScreen/Main'
import Run from './component/BridgeScreen/Run'
import Hello from './component/BridgeScreen/Hello'
import HelloGif from './component/BridgeScreen/HelloGif'
import EduScreen from './component/EduScreen/EduScreen'
// import CatchBf from './component/WaitScreen/CatchBF'
// import Sleep from './component/WaitScreen/Sleep'
import EatLunch from './component/WaitScreen/EatLunch'
import Notice from './component/EduScreen/Notice'
import Stamp from './component/EduScreen/Stamp'


function App() {
  return (
    <div className="App"
    >
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<CatchBf/>}/> */}
          {/* <Route path="/sleep" element={<Sleep/>}/> */}
          <Route path="/" element={<EatLunch/>}/>
          <Route path="/main" element={<Main/>}/>
          <Route path="/next" element={<Next/>}/>
          <Route path="/run" element={<Run/>}/>
          <Route path="/hello" element={<Hello/>}/>
          <Route path="/hellogif" element={<HelloGif/>}/>
          <Route path="/notice" element={<Notice/>}/>
          <Route path="/eduscreen" element={<EduScreen/>}/>
          <Route path="/stamp" element={<Stamp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
