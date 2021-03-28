import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from '../components/Home'
import Drives from '../components/Drives'
import Ricoh from '../components/Ricoh'
import Imaging from '../components/Imaging'

const Routes = () =>{
   return(
      <Switch>
         <Route exact path='/Surgery' component ={Home}/>
         <Route path='/Drives' component={Drives}/>
         <Route path ='/Imaging' component={Imaging}/>
         <Route path ='/Ricoh' component={Ricoh}/>
      </Switch>
   );
};

export default Routes;