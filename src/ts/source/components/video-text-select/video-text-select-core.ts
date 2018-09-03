import { HTMLVideoTextSelectElement } from './video-text-select-define';
import { HTMLVideoTextElement } from '../video-text/video-text-define';
import { HTMLVideoSelectElement } from '../video-select/video-select-define';
import { HTMLVideoTextSelectControlsElement } from '../video-text-select-controls/video-text-select-controls-define';



interface IVideoText {
    id: string,
    begin: number,
    end: number,
    xCoord: number,
    yCoord: number,
    perspective: string,
    rotation: string,
    skew: string,
    fontFamily: string,
    fontSize: number,
    letterSpacing: number,
    lineHeight: number,
    wordSpacing: number,
    textContent: string
}


interface IVTSData {
    id: string,
    videoText: IVideoText[]
}


export function setVideo(vts: HTMLVideoTextSelectElement) {
    // Create video element.
    const videoEl: HTMLVideoElement = document.createElement('video');
    let sourcesChildren: Array<Element> = [];

    // Set video attributes.
    videoEl.autoplay = vts.autoplay;
    // videoEl.controls = vts.controls;
    // videoEl.height = parseInt(vts.height);
    // videoEl.loop = vts.loop;
    videoEl.muted = vts.muted;
    // videoEl.poster = vts.poster;
    videoEl.preload = vts.preload;
    videoEl.src = vts.source;
    // videoEl.width = parseInt(vts.width);


    // Get source children of video-text-select and append them to the video element.
    for (let child of <any>vts.children) {
        if (child.tagName == 'SOURCE') {
            sourcesChildren.push(child);
        }
    }
    for (let sourceChild of sourcesChildren) {
        videoEl.appendChild(sourceChild);
    }

    // Add video element to video text select element
    vts.appendChild(videoEl);


    // Set controls.
    let controls: HTMLVideoTextSelectControlsElement = document.createElement('video-text-select-controls');


    vts.appendChild(controls);
    // If text has been generated, load it from database
    // or get it from server and set it in page.

    // If text has not been generated, add event listener to generate button.

    // To generate:
    // 1. send video to server
    // 2. receive text data
    // 3. store text data or store only the video id for further retrieval

    // In future:
    // Allow the user to change the text select
    // and/or the text characteristics (placement, size, font, etc)
    // and send that feedback to server
    // for a better calibration of text-video.


    // Dummy load data and based on it set the video text.
    loadJSON('./data/text.json', (vtsData: IVTSData) => {
        setVideoText(vts, vtsData);
    });
}


function setVideoText(video: HTMLVideoTextSelectElement, vtsData: IVTSData) {
    // console.log('autoplay', video.autoplay);
    // console.log('controls', video.controls);
    // console.log('height', video.height);
    // console.log('loop', video.loop);
    // console.log('muted', video.muted);
    // console.log('poster', video.poster);
    // console.log('pregenerate', video.pregenerate);
    // console.log('preload', video.preload);
    // console.log('source', video.source);
    // console.log('sources', video.sources);
    // console.log('width', video.width);

    const videoEl = video.getElementsByTagName('video')[0];

    video.id = vtsData.id;

    let videoText: HTMLVideoTextElement = document.createElement('video-text');

    vtsData.videoText.map((videoTextEl: IVideoText) => {
        let videoSelect: HTMLVideoSelectElement = document.createElement('video-select');
        videoSelect.innerHTML = escapeHTML(videoTextEl.textContent);
        videoSelect.id = videoTextEl.id;

        videoEl.addEventListener( "loadedmetadata", () => {
            let width = videoEl.videoWidth;
            let height = videoEl.videoHeight;
            let ratioHW = height/width;
            let ratioWH = width/height;

            // console.log('width', width);
            // console.log('height', height);
            // console.log('ratioHW', ratioHW);
            // console.log('ratioWH', ratioWH);
            // console.log('duration', videoEl.duration);

            return {
                width: width,
                height: height,
                ratioHW: ratioHW,
                ratioWH: ratioWH
            }
        }, false );


        let videoBounding = videoEl.getBoundingClientRect();
        let videoWidth = videoBounding.width;
        // let videoWidth = videoEl.offsetWidth;
        // let videoHeight = videoEl.offsetHeight;
        // let videoHeight = videoEl.videoHeight;
        // let videoWidth = videoEl.videoWidth;
        let videoHeight = videoBounding.height;
        // console.log('width', videoWidth);
        // console.log('height', videoHeight);
        // console.log(videoBounding);

        // values are good for 995px width page
        videoSelect.style.fontFamily = videoTextEl.fontFamily;
        videoSelect.style.fontSize = videoTextEl.fontSize + 'px';
        videoSelect.style.letterSpacing = videoTextEl.letterSpacing + 'px';
        videoSelect.style.lineHeight = videoTextEl.lineHeight + 'px';
        videoSelect.style.wordSpacing = videoTextEl.wordSpacing + 'px';

        videoSelect.style.left = videoTextEl.xCoord + 'px';
        videoSelect.style.top = videoTextEl.yCoord + 'px';

        videoText.appendChild(videoSelect);
    });

    video.appendChild(videoText);


    // Get aspect ratio of the video in a promise

    // Get rendered width, calculate height of the video

    // For each text in the video text select object,
    // adjust the positioning, size, etc of the text
    // based on the ratio between current width (height)
    // and video resolution width (height).

    // Set text on page

    // Listen for page resize and repeat
}




/**
 * Utility function to escape HTML entities from a given string.
 *
 * @param unsafe {string}
 */
function escapeHTML(unsafe: string) {
    return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
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
