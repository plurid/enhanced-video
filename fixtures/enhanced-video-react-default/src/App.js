import React, { Component } from 'react';

import video from './assets/video.mov';

import EnhancedVideo from '@plurid/enhanced-video-react';



class App extends Component {
    render () {
        return (
            <div className="app">
                <div
                    style={ {width: 900, margin: '150px auto'} }
                >
                    <EnhancedVideo
                        src={video}
                        theme="depict"
                        about={false}
                        apiEndpoint="http://192.168.1.2:33600/graphql"
                        // apiEndpoint="https://api.plurid.dev/graphql"
                    />
                </div>
            </div>
        );
    }
}


export default App;
