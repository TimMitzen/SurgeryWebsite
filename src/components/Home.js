import React from 'react';
import {Link} from 'react-router-dom'
const Home = () => {
   return(
      <div>
         Surgery IS Website
         <Link to='/imaging'>Imaging</Link>
      </div>
   );
}

export default Home;