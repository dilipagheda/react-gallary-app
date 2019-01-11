import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const LoaderComponent = (props) => { 
    if(props.isLoading){
        return (<Dimmer active>
                <Loader inverted>Loading</Loader>
                </Dimmer>);
    }else{
        return null;
    }

}

export default LoaderComponent