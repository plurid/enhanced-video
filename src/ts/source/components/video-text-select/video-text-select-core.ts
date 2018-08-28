import { HTMLVideoTextSelectElement } from './video-text-select-define';



interface IVideoText {
    id: string,
    begin: number,
    end: number,
    xCoord: number,
    yCoord: number,
    perspective: string,
    rotation: string,
    skew: string,
    fontSize: number,
    letterSpacing: number,
    textTransform: string,
    textContent: string
}


interface IVTSData {
    id: string,
    videoText: IVideoText[]
}


export function setVideo(video: HTMLVideoTextSelectElement) {
    const videoEl: HTMLVideoElement = document.createElement('video');

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


    // Dummy load data and based on it set the video text.
    loadJSON('./data/text.json', (vtsData: IVTSData) => {
        setVideoText(video, vtsData);
    });
}



/**
 * Utility function to load dummy data
 * which will be received from the server.
 *
 * @param path {string}
 * @param callback {Function}
 */
function loadJSON(path: string, callback: Function) {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");

    xobj.open('GET', path, true);
    xobj.onreadystatechange = () => {
        if (xobj.readyState == 4 && xobj.status == 200) {
            callback( JSON.parse(xobj.responseText) );
        }
    };

    xobj.send(null);
}



function setVideoText(video: HTMLVideoTextSelectElement, vtsData: IVTSData) {
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

    const videoEl = video.getElementsByTagName('video')[0];

    console.log(video);
    console.log(videoEl);

    video.id = vtsData.id;

    let videoText = document.createElement('div');

    vtsData.videoText.map((videoTextEl: IVideoText) => {

        let div = document.createElement('div');

        div.innerText = videoTextEl.textContent;

        videoText.appendChild(div);
        // console.log(videoTextEl.id);
    });

    video.appendChild(videoText);

    console.log('vtsData', vtsData);
}
