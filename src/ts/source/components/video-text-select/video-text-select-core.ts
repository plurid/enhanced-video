import { VideoTextSelect } from './video-text-select-define';



export function setVideo(video: VideoTextSelect) {
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
}
