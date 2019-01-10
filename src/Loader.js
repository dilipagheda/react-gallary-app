import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderComponent = () => (
//   <div>


//     <Segment>
//       <Dimmer active inverted>
//         <Loader inverted>Loading</Loader>
//       </Dimmer>

//       <Image src='/images/wireframe/short-paragraph.png' />
//     </Segment>
//   </div>
<Dimmer active>
    <Loader inverted>Loading</Loader>
</Dimmer>
)

export default LoaderComponent