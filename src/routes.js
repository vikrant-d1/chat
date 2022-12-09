import React, {lazy, Suspense} from 'react';
import { Routes, Route} from "react-router-dom";
import Layout  from "./common/Layout";
import Home  from "./components/home";
import Fallback  from "./components/fallback";
const About = React.lazy(() => import('./components/about'));



// import noMatch from './components/NoMatch';



const ProjectRouter = (props) => {

   return(
    <Suspense fallback={<p> Loading...</p>}>
    <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<Suspense fallback={<>Loading...</>}><About /></Suspense>} />
      <Route path="*" element={<Fallback />} /> 
    </Route>
   </Routes>
   </Suspense>
   )
}

export default ProjectRouter