import { HTMLVideoTextSelectControlsElement } from "./video-text-select-controls-define";



export function setVideoControls(videoControls: HTMLVideoTextSelectControlsElement) {
    let videoControlsContent = `
        <div class="video-text-select-controls-timebar-container">
            <div class="video-text-select-controls-timebar-current-ball"></div>
            <div class="video-text-select-controls-timebar-current"></div>
            <div class="video-text-select-controls-timebar-time"></div>
        </div>

        <div class="video-text-select-controls-container">
            <div class="video-text-select-controls-button video-text-select-controls-play">&#9654;</div>

            <div class="video-text-select-controls-time">
                <span class="video-text-select-controls-time-current-hours"></span><span class="video-text-select-controls-time-current-minutes"></span><span class="video-text-select-controls-time-current-seconds"></span> /
                <span class="video-text-select-controls-time-end-hours"></span><span class="video-text-select-controls-time-end-minutes"></span><span class="video-text-select-controls-time-end-seconds"></span>
            </div>

            <div class="video-text-select-controls-button video-text-select-controls-volume">
                <?xml version="1.0" encoding="iso-8859-1"?>
                <!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 93.038 93.038" style="enable-background:new 0 0 93.038 93.038;" xml:space="preserve">
                    <g>
                        <path d="M46.547,75.521c0,1.639-0.947,3.128-2.429,3.823c-0.573,0.271-1.187,0.402-1.797,0.402c-0.966,0-1.923-0.332-2.696-0.973   l-23.098-19.14H4.225C1.892,59.635,0,57.742,0,55.409V38.576c0-2.334,1.892-4.226,4.225-4.226h12.303l23.098-19.14   c1.262-1.046,3.012-1.269,4.493-0.569c1.481,0.695,2.429,2.185,2.429,3.823L46.547,75.521L46.547,75.521z M62.784,68.919   c-0.103,0.007-0.202,0.011-0.304,0.011c-1.116,0-2.192-0.441-2.987-1.237l-0.565-0.567c-1.482-1.479-1.656-3.822-0.408-5.504   c3.164-4.266,4.834-9.323,4.834-14.628c0-5.706-1.896-11.058-5.484-15.478c-1.366-1.68-1.24-4.12,0.291-5.65l0.564-0.565   c0.844-0.844,1.975-1.304,3.199-1.231c1.192,0.06,2.305,0.621,3.061,1.545c4.977,6.09,7.606,13.484,7.606,21.38   c0,7.354-2.325,14.354-6.725,20.24C65.131,68.216,64.007,68.832,62.784,68.919z M80.252,81.976   c-0.764,0.903-1.869,1.445-3.052,1.495c-0.058,0.002-0.117,0.004-0.177,0.004c-1.119,0-2.193-0.442-2.988-1.237l-0.555-0.555   c-1.551-1.55-1.656-4.029-0.246-5.707c6.814-8.104,10.568-18.396,10.568-28.982c0-11.011-4.019-21.611-11.314-29.847   c-1.479-1.672-1.404-4.203,0.17-5.783l0.554-0.555c0.822-0.826,1.89-1.281,3.115-1.242c1.163,0.033,2.263,0.547,3.036,1.417   c8.818,9.928,13.675,22.718,13.675,36.01C93.04,59.783,88.499,72.207,80.252,81.976z" fill="#FFFFFF"/>
                    </g>
                </svg>
            </div>

            <div class="video-text-select-controls-button video-text-select-controls-fullscreen">
                <?xml version="1.0" encoding="iso-8859-1"?>
                <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 460.644 460.644" style="enable-background:new 0 0 460.644 460.644;" xml:space="preserve" width="512px" height="512px">
                    <g>
                        <g>
                            <g>
                                <path d="M73.432,90.125v279.211c0,9.693,7.857,17.55,17.55,17.55h279.21c9.693,0,17.55-7.857,17.55-17.55V90.125     c0-9.693-7.857-17.55-17.55-17.55H90.982C81.289,72.575,73.432,80.432,73.432,90.125z" fill="#FFFFFF"/>
                                <path d="M7.534,154.704c2.422,1.448,5.091,2.144,7.729,2.144c3.904,0,7.74-1.523,10.61-4.394l1.656-1.656     c10.182-10.183,15.903-23.993,15.903-38.393v-69.83h69.831c14.4,0,28.211-5.72,38.393-15.903     c3.404-3.404,5.216-8.196,4.511-12.958C155.039,6.1,148.604,0.81,141.305,0.81H15.266c-8.284,0-15,6.716-15,15v125.654     C0.266,146.829,2.929,151.951,7.534,154.704z" fill="#FFFFFF"/>
                                <path d="M150.206,432.789c-10.182-10.183-23.993-15.904-38.393-15.904H43.432v-68.381c0-14.401-5.721-28.211-15.903-38.394     l-1.627-1.627c-3.896-3.896-9.587-5.627-14.895-4.149C4.426,306.165,0,312.117,0,318.794v126.038c0,8.284,6.716,15,15,15h125.619     c5.51,0,10.759-2.801,13.468-7.599c3.358-5.948,2.278-13.286-2.443-18.007L150.206,432.789z" fill="#FFFFFF"/>
                                <path d="M445.644,0.81H320.025c-5.51,0-10.759,2.801-13.468,7.599c-3.358,5.948-2.278,13.286,2.443,18.007l0.255,0.255     c10.183,10.183,23.993,15.903,38.393,15.903h70.095v70.094c0,14.4,5.72,28.211,15.903,38.393l1.392,1.392     c2.87,2.87,6.706,4.394,10.609,4.394c2.644,0,5.32-0.698,7.744-2.153c4.598-2.759,7.253-7.881,7.253-13.243V15.81     C460.644,7.527,453.928,0.81,445.644,0.81z" fill="#FFFFFF"/>
                                <path d="M453.653,306.279c-6.083-3.988-13.926-3.047-18.881,1.91l-1.127,1.127c-10.183,10.183-15.903,23.993-15.903,38.393     v69.177h-69.177c-14.4,0-28.211,5.721-38.394,15.903l-1.143,1.143c-3.896,3.896-5.627,9.589-4.149,14.898     c1.832,6.58,7.784,11.004,14.46,11.004h126.038c8.284,0,15-6.716,15-15V319.159C460.378,314.024,457.948,309.094,453.653,306.279     z" fill="#FFFFFF"/>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>

            <div class="video-text-select-controls-button video-text-select-controls-settings">
                <?xml version="1.0" encoding="iso-8859-1"?>
                <!-- Generator: Adobe Illustrator 18.1.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 268.765 268.765" style="enable-background:new 0 0 268.765 268.765;" xml:space="preserve" width="512px" height="512px">
                    <g id="Settings">
                        <g>
                            <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M267.92,119.461c-0.425-3.778-4.83-6.617-8.639-6.617    c-12.315,0-23.243-7.231-27.826-18.414c-4.682-11.454-1.663-24.812,7.515-33.231c2.889-2.641,3.24-7.062,0.817-10.133    c-6.303-8.004-13.467-15.234-21.289-21.5c-3.063-2.458-7.557-2.116-10.213,0.825c-8.01,8.871-22.398,12.168-33.516,7.529    c-11.57-4.867-18.866-16.591-18.152-29.176c0.235-3.953-2.654-7.39-6.595-7.849c-10.038-1.161-20.164-1.197-30.232-0.08    c-3.896,0.43-6.785,3.786-6.654,7.689c0.438,12.461-6.946,23.98-18.401,28.672c-10.985,4.487-25.272,1.218-33.266-7.574    c-2.642-2.896-7.063-3.252-10.141-0.853c-8.054,6.319-15.379,13.555-21.74,21.493c-2.481,3.086-2.116,7.559,0.802,10.214    c9.353,8.47,12.373,21.944,7.514,33.53c-4.639,11.046-16.109,18.165-29.24,18.165c-4.261-0.137-7.296,2.723-7.762,6.597    c-1.182,10.096-1.196,20.383-0.058,30.561c0.422,3.794,4.961,6.608,8.812,6.608c11.702-0.299,22.937,6.946,27.65,18.415    c4.698,11.454,1.678,24.804-7.514,33.23c-2.875,2.641-3.24,7.055-0.817,10.126c6.244,7.953,13.409,15.19,21.259,21.508    c3.079,2.481,7.559,2.131,10.228-0.81c8.04-8.893,22.427-12.184,33.501-7.536c11.599,4.852,18.895,16.575,18.181,29.167    c-0.233,3.955,2.67,7.398,6.595,7.85c5.135,0.599,10.301,0.898,15.481,0.898c4.917,0,9.835-0.27,14.752-0.817    c3.897-0.43,6.784-3.786,6.653-7.696c-0.451-12.454,6.946-23.973,18.386-28.657c11.059-4.517,25.286-1.211,33.281,7.572    c2.657,2.89,7.047,3.239,10.142,0.848c8.039-6.304,15.349-13.534,21.74-21.494c2.48-3.079,2.13-7.559-0.803-10.213    c-9.353-8.47-12.388-21.946-7.529-33.524c4.568-10.899,15.612-18.217,27.491-18.217l1.662,0.043    c3.853,0.313,7.398-2.655,7.865-6.588C269.044,139.917,269.058,129.639,267.92,119.461z M134.595,179.491    c-24.718,0-44.824-20.106-44.824-44.824c0-24.717,20.106-44.824,44.824-44.824c24.717,0,44.823,20.107,44.823,44.824    C179.418,159.385,159.312,179.491,134.595,179.491z" fill="#FFFFFF"/>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    `;


    videoControls.innerHTML = videoControlsContent;
}


export function setButtons(videoControls: HTMLVideoTextSelectControlsElement) {
    let vst = videoControls.parentElement;
    let video = vst.getElementsByTagName('video')[0];


    video.addEventListener('loadedmetadata', () => {
        setEndTime(videoControls, video.duration);
    });

    video.addEventListener('timeupdate', () => {
        setCurrentTime(videoControls, video.currentTime, video.duration);
    });
}


function setEndTime(
        videoControls: HTMLVideoTextSelectControlsElement,
        duration: number) {

    // duration = 1005654;

    let videoCurrentHours = videoControls.getElementsByClassName('video-text-select-controls-time-current-hours')[0];
    let videoCurrentMinutes = videoControls.getElementsByClassName('video-text-select-controls-time-current-minutes')[0];
    let videoCurrentSeconds = videoControls.getElementsByClassName('video-text-select-controls-time-current-seconds')[0];

    let videoEndHours = videoControls.getElementsByClassName('video-text-select-controls-time-end-hours')[0];
    let videoEndMinutes = videoControls.getElementsByClassName('video-text-select-controls-time-end-minutes')[0];
    let videoEndSeconds = videoControls.getElementsByClassName('video-text-select-controls-time-end-seconds')[0];

    let hours = Math.floor(duration / 3600);
    let minutes = Math.floor((duration - hours * 3600) / 60);
    let seconds = Math.floor(duration - hours * 3600 - minutes * 60);

    if (hours != 0) {
        videoEndHours.innerHTML = `${hours}:`;

        if (hours < 10) {
            videoCurrentHours.innerHTML = '0:';
        } else if (hours < 100) {
            videoCurrentHours.innerHTML = '00:';
        } else {
            videoCurrentHours.innerHTML = '000:';
        }
    }
    videoEndMinutes.innerHTML = `${minutes}:`;

    if (minutes < 10) {
        videoCurrentMinutes.innerHTML = '0:';
    } else {
        videoCurrentMinutes.innerHTML = '00:';
    }

    videoEndSeconds.innerHTML = `${seconds}`;
    if (seconds < 10) {
        videoCurrentSeconds.innerHTML = '0';
    } else {
        videoCurrentSeconds.innerHTML = '00';
    }
}


function setCurrentTime(
        videoControls: HTMLVideoTextSelectControlsElement,
        currentTime: number,
        duration: number) {

    let videoCurrentHours = videoControls.getElementsByClassName('video-text-select-controls-time-current-hours')[0];
    let videoCurrentMinutes = videoControls.getElementsByClassName('video-text-select-controls-time-current-minutes')[0];
    let videoCurrentSeconds = videoControls.getElementsByClassName('video-text-select-controls-time-current-seconds')[0];

    let hours = Math.floor(currentTime / 3600);
    let minutes = Math.floor((currentTime - hours * 3600) / 60);
    let seconds = Math.floor(currentTime - hours * 3600 - minutes * 60);

    let durationHours = Math.floor(duration / 3600);
    let durationMinutes = Math.floor((duration - durationHours * 3600) / 60);
    let durationSeconds = Math.floor(duration - durationHours * 3600 - durationMinutes * 60);


    if (hours != 0) {
        videoCurrentHours.innerHTML = `${hours}:`;
    }

    if (minutes < 10) {
        if (durationMinutes < 10) {
            videoCurrentMinutes.innerHTML = `${minutes}:`;
        } else {
            videoCurrentMinutes.innerHTML = `0${minutes}:`;
        }
    } else {
        videoCurrentMinutes.innerHTML = `${minutes}:`;
    }

    if (seconds < 10) {
        if (durationSeconds < 10) {
            videoCurrentSeconds.innerHTML = `${seconds}`;
        }
        videoCurrentSeconds.innerHTML = `0${seconds}`;
    } else {
        videoCurrentSeconds.innerHTML = `${seconds}`;
    }
}
