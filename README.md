<p align="center">
    <img src="https://raw.githubusercontent.com/plurid/text-select-video-html/master/about/identity/TSV-logo.png" height="250px">
    <br />
    <a target="_blank" href="https://www.npmjs.com/package/text-select-video-html">
        <img src="https://img.shields.io/npm/v/text-select-video-html.svg?logo=npm&colorB=1380C3&style=for-the-badge" alt="Version">
    </a>
    <a target="_blank" href="https://travis-ci.org/plurid/text-select-video-html">
        <img src="https://img.shields.io/travis/plurid/text-select-video-html.svg?logo=travis&colorB=1380C3&style=for-the-badge" alt="Build Status">
    </a>
    <a target="_blank" href="https://github.com/plurid/text-select-video-html/blob/master/LICENSE">
        <img src="https://img.shields.io/badge/license-MIT-blue.svg?colorB=1380C3&style=for-the-badge" alt="License: MIT">
    </a>
</p>


<h1 align="center">
    Text Select Video <i>for</i> HTML Custom Elements
</h1>


HTML Specialized Element for displaying a video and allowing for the selection of the text the video contains.


## Concept

Each frame of a video is analysed and established if it contains text. If it does, the timestamp of the video, and the location of the text (x, y coordinates) are registered and on top of the video is placed a transparent div, cotaining exactly the text from the video. The text from the video behaves like it is truly selectable.

[Proof of Concept](https://youtu.be/WCH7w-q5KtA)

<p align="center">
    <img src="https://raw.githubusercontent.com/plurid/video-text-select/master/about/docs/images/1.png" height="500px">
</p>

<p align="center">
    <img src="https://raw.githubusercontent.com/plurid/video-text-select/master/about/docs/images/2.png" height="500px">
</p>

<p align="center">
    <img src="https://raw.githubusercontent.com/plurid/video-text-select/master/about/docs/images/3.png" height="500px">
</p>
