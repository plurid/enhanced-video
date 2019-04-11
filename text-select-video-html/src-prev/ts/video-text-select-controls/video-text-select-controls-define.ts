import { setVideoControls, setButtons } from './video-text-select-controls-core';



export class HTMLVideoTextSelectControlsElement extends HTMLElement {
    constructor() {
        super();

        setVideoControls(this);

        setButtons(this);
    }
}


customElements.define('video-text-select-controls', HTMLVideoTextSelectControlsElement);
