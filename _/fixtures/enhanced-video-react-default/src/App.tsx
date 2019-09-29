import React from 'react';
import EnhancedVideo from '@plurid/enhanced-video-react';

<<<<<<< HEAD
// import video from './assets/video.mov';
=======
import video from './assets/video.mov';
>>>>>>> 681ad7dfec684811a0038022d8771289397b65d5
import longVideo from './assets/long-video.mp4';



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


const App: React.FC = () => {
    return (
        <div className="app">
            <div
                style={ {width: 900, margin: '150px auto'} }
            >
                <EnhancedVideo
                    src={longVideo}
                    type="video/mp4"
<<<<<<< HEAD
                    theme="light"
=======
                    theme="night"
>>>>>>> 681ad7dfec684811a0038022d8771289397b65d5
                    // qualitySources={qualitySources}
                    // about={false}
                    // apiEndpoint="http://192.168.1.2:33600/graphql"
                    // apiEndpoint="https://api.plurid.dev/graphql"
                />
            </div>
        </div>
    );
}


export default App;
