<link rel="stylesheet" type="text/css" href="style.css">



# Architecture


The user adds to the `.html` page a `<video-text-select>` tag.

The custom tag works as a regular `<video>` tag, that is, it needs a `src` attribute or nested `<source>` tags, it can have `autoplay` or `controls` attributes, and so forth.

At runtime, after Video Text Select processing, the tag becomes

    <video-text-select src="./a-video.mov" controls>
        <video src="./a-video.mov"></video>
        <video-text>
            <video-select id="vts-d1j3kzai-4kz5mp9nbz-23-29-150-235">
                here is text
            </video-select>
            <video-select id="vts-d1j3kzai-po7ja5e7vh-28-35-150-295">
                here is another text
            </video-select>
        </video-text>
    </video-text-select>


The `<video-text>` tag is a container for `<video-select>` tags which contain actual text obtained from the video.

The`<video-select>` tag has an id formed thus:

    vts       - d1j3kzai - 4kz5mp9nbz    - 23    - 29  - 150     - 235
    namespace - video id - video text id - begin - end - x coord - y coord

When the user opts in for the video text selection, the video from the `src` attribute is sent to `vst.deview.plurid.com` where the text is extracted from the video and a `.json` object is generated. The object contains:

    {
        "videoId": "d1j3kzai",
        "videoText": [
            {
                "videoTextId": "4kz5mp9nbz",
                "begin": 23,
                "end": 29,
                "xCoord": 150,
                "yCoord": 150,
                "perspective": "flat",
                "rotation": "none",
                "skew": "none",
                "fontSize": 12,
                "letterSpacing": 1,
                "textTransform": "lowercase",
                "textContent": "here is text"
            },
            {
                "videoTextId": "po7ja5e7vh",
                "begin": 28,
                "end": 35,
                "xCoord": 150,
                "yCoord": 295,
                "perspective": "flat",
                "rotation": "none",
                "skew": "none",
                "fontSize": 12,
                "letterSpacing": 1,
                "textTransform": "lowercase",
                "textContent": "here is another text"
            }
        ]
    }

`perspective`, `rotation`, and `skew` are used for text positioning when the text is not horizontal, normal type-setted.

`fontSize`, `letterSpacing`, and `textTransform` are used to better fit the extracted text with the actual text from the video.

`xCoord` and `yCoord` are based on the top left corner of the video.

After generation, the object is stored for further retrieval and sent back to the page holding the video so the `<video-text>` tag can be filled with the object's contents as required.

Once the initial processing is complete, the video will be recognized and just the already generated object will be sent back.

When the `<video-text>` tag is filled, all the containing `<video-select>` tags are set to `display: none;`. Based on the current video time and the `begin` and `end` time of the `<video-select>` tags the proper `<video-select>` tag (or multiple tags) is (are) set to `display: block;`.
