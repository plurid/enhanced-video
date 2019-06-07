import React, { Component } from 'react';

import video from './assets/video.mov';

import TextSelectVideo from '@plurid/text-select-video-react';



class App extends Component {
    render () {
        return (
            <div className="app">
                <div
                    style={ {width: 800, margin: '150px auto'} }
                >
                    <TextSelectVideo
                        theme="night"
                        src={video}
                        controls={true}
                        // getTextOnLoad={true}
                        apiEndpoint="http://192.168.1.2:3360/graphql"
                        // apiEndpoint="https://api.plurid.com/graphql"
                    />
                </div>
            </div>
        );
    }
}


export default App;
