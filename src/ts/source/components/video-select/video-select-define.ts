import { setVideoSelect } from './video-select-core';



export class HTMLVideoSelectElement extends HTMLElement {
    constructor() {
        super();

        setVideoSelect(this);
    }
}


customElements.define('video-select', HTMLVideoSelectElement);
