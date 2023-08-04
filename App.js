import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { Suspense } from 'react';
import { Suspense } from 'react';
import Header from './Cm-cop/Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';
// import Demy from './demy';
const Demy = React.lazy(() => import("./demy"))





function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route path='Home' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='demy' element={<Suspense fallback={<h1>Loading....</h1>}><Demy /></Suspense>} />
          </Route>
            {/* <Route path='/contact' element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
