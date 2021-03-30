import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../components/Home'
import Drives from '../components/Drives'
import Ricoh from '../components/Ricoh'
import Imaging from '../components/Imaging'
import VideoConf from '../components/VideoConf'

const Routes = () =>{
   return(
      <Switch>
         <Route exact path='/SurgeryWebsite/' component ={Home}/>
         <Route path='/Drives' component={Drives}/>
         <Route path ='/Imaging' component={Imaging}/>
         <Route path ='/Ricoh' component={Ricoh}/>
         <Route path ='/Video' component={VideoConf}/>
      </Switch>
   );
};

export default Routes;
