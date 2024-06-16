import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Authentication from './components/authentication';
import SignInComponent from './components/signin';
import SignUpComponent from './components/signup';
import Home from './components/home';
import ViewProfile from './components/profile';
import ViewDownloads from './components/downloads';
import ViewTemplate from './components/template';
import Form1 from './components/forms';
import CvdataUpdate from './components/cvdataupdate';
import Cv1 from './components/cv1';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Authentication/>} />
          <Route path="/signin/:id" element={<SignInComponent />} />
          <Route path="/register" element={<SignUpComponent />} />
          <Route path="/home/:id" element={<Home />} />
          <Route path="/profile/:id" element={<ViewProfile/>}/>
          <Route path='/templates' element={<ViewTemplate />}/>
          <Route path='/downloads' element={<ViewDownloads />}/>
          {/* <Route path='/cv/:id' element={<Form1/>}/> */}
          <Route path='/cvupdate' element={<CvdataUpdate/>}/>
          <Route path='/cv/:id' element={<Cv1/>}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;







