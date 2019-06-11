import React, { Component } from 'react';

// import video from './assets/video.mov';
import longVideo from './assets/long-video.mp4';

import TextSelectVideo from '@plurid/text-select-video-react';



const qualitySources = [
    {
        quality: '144p',
        src: '/path/to/144p',
    },
    {
        quality: '240p',
        src: '/path/to/240p',
    },
    {
        quality: '360p',
        src: '/path/to/360',
    },
    {
        quality: '480p',
        src: '/path/to/480p',
    },
    {
        quality: '720p',
        src: '/path/to/720p',
    },
    {
        quality: '1080p',
        src: '/path/to/1080p',
    },
    {
        quality: '1440p',
        src: '/path/to/1440p',
    },
    {
        quality: '2160p',
        src: '/path/to/2160p',
    },
];


class App extends Component {
    render () {
        return (
            <div className="app">
                <div
                    style={ {width: '100%', margin: '150px auto'} }
                >
                    <TextSelectVideo
                        // theme="night"
                        // src={video}
                        src={longVideo}
                        type="video/mp4"
                        controls={true}
                        height={700}
                        qualitySources={qualitySources}
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
