import { setVideoControls } from './video-text-select-controls-core';



export class HTMLVideoTextSelectControlsElement extends HTMLElement {
    constructor() {
        super();

        setVideoControls(this);
    }
}


customElements.define('video-text-select-controls', HTMLVideoTextSelectControlsElement);
