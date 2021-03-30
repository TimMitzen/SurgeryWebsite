import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from '../components/Home'
import Drives from '../components/Drives'
import Ricoh from '../components/Ricoh'
import Imaging from '../components/Imaging'
import VideoConf from '../components/VideoConf'

const Routes = () =>{
   return(
      <BrowserRouter basename={process.env.PUBLIC_URL}>
         <Route exact path='/SurgeryWebsite/' component ={Home}/>
         <Route path='/drives' component={Drives}/>
         <Route path ='/imaging' component={Imaging}/>
         <Route path ='/ricoh' component={Ricoh}/>
         <Route path ='/video' component={VideoConf}/>
      </BrowserRouter>
   );
};

export default Routes;
