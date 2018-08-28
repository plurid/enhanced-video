import { setVideoText } from './video-text-core';



export class HTMLVideoTextElement extends HTMLElement {
    constructor() {
        super();

        setVideoText(this);
    }
}


customElements.define('video-text', HTMLVideoTextElement);
