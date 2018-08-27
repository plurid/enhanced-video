import { HTMLVideoTextSelectElement } from './video-text-select-define';



export function setVideo(video: HTMLVideoTextSelectElement) {
    console.log('autoplay', video.autoplay);
    console.log('controls', video.controls);
    console.log('height', video.height);
    console.log('loop', video.loop);
    console.log('muted', video.muted);
    console.log('poster', video.poster);
    console.log('pregenerate', video.pregenerate);
    console.log('preload', video.preload);
    console.log('source', video.source);
    console.log('sources', video.sources);
    console.log('width', video.width);

    let videoEl: HTMLVideoElement = document.createElement('video');

    videoEl.autoplay = video.autoplay;
    // videoEl.controls = video.controls;
    videoEl.height = parseInt(video.height);
    // videoEl.loop = video.loop;
    videoEl.muted = video.muted;
    // videoEl.poster = video.poster;
    videoEl.preload = video.preload;
    // videoEl.src = video.source;
    videoEl.width = parseInt(video.width);

    video.appendChild(videoEl);
}
