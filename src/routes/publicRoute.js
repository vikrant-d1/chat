import { Route} from "react-router-dom";
import React from 'react'

const PublicRoute = (props) => {
   return(
    <React.Fragment>
     <Route {...props} />
    </React.Fragment>
   )
}

export default PublicRoute