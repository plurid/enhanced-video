import React, { Component } from 'react';

// import video from './assets/video.mov';
import longVideo from './assets/long-video.mp4';

import TextSelectVideo, {
    // ACTIONS,
} from '@plurid/text-select-video-react';



// const qualitySources = [
//     {
//         quality: '144p',
//         src: '/path/to/144p',
//     },
//     {
//         quality: '240p',
//         src: '/path/to/240p',
//     },
//     {
//         quality: '360p',
//         src: '/path/to/360',
//     },
//     {
//         quality: '480p',
//         src: '/path/to/480p',
//     },
//     {
//         quality: '720p',
//         src: '/path/to/720p',
//     },
//     {
//         quality: '1080p',
//         src: '/path/to/1080p',
//     },
//     {
//         quality: '1440p',
//         src: '/path/to/1440p',
//     },
//     {
//         quality: '2160p',
//         src: '/path/to/2160p',
//     },
// ];


class App extends Component {
    state = {
        action: '',
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         action: {
        //             type: ACTIONS.GET_TEXT,
        //         },
        //     });
        // }, 1000);
        // setTimeout(() => {
        //     this.setState({
        //         action: {
        //             type: ACTIONS.SAVE_TEXT,
        //         },
        //     });
        // }, 2000);
        // setTimeout(() => {
        //     this.setState({
        //         action: {
        //             type: ACTIONS.ADD_TEXT,
        //         },
        //     });
        // }, 500);
        // setTimeout(() => {
        //     this.setState({
        //         action: {
        //             type: ACTIONS.SET_MESSAGE,
        //             payload: 'message set',
        //         },
        //     });
        // }, 4000);
    }

    render () {
        return (
            <div className="app">
                <div
                    style={ {width: '100%', margin: '150px auto'} }
                >
                    <TextSelectVideo
                        src={longVideo}
                        type="video/mp4"
                        height={600}
                        theme="plurid"
                        action={this.state.action}
                        loop={true}
                        microview={true}
                        // about={false}
                        // controls={true}
                        // src={video}
                        // controls={true}
                        // qualitySources={qualitySources}
                        // getTextOnLoad={true}
                        // apiEndpoint="http://192.168.1.2:3360/graphql"
                        // apiEndpoint="https://api.plurid.com/graphql"
                    />
                </div>
            </div>
        );
    }
}


export default App;