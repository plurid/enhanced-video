import { Component, Prop } from '@stencil/core';

import { ITextSelectVideoData, ITextVideo } from '../../interfaces/video-text';



@Component({
    tag: 'select-video',
    styleUrl: 'select-video.scss',
    shadow: true
})
export class SelectVideo {
    div!: HTMLDivElement;

    @Prop() selectText: ITextSelectVideoData;
    @Prop() editable: boolean;
    @Prop() videoWidth: number;
    @Prop() videoHeight: number;

    @Prop() updateText: (id: string, text: ITextVideo) => void;
    @Prop() duplicateText: (id: string) => void;
    @Prop() deleteText: (id: string) => void;

    removeText = (id: string) => {
        const el = this.div.querySelector(`text-video[text-id=${id}]`);
        this.div.removeChild(el);
        // console.log(el);
        this.deleteText(id);
    }

    render() {
        console.log('select-image :: this.selectText', this.selectText);
        // const { videoText } = this.selectText;

        return (
            <div
                ref={(el) => this.div = el as HTMLDivElement}
            >
                {/* {videoText.map(text => {
                    return (
                        <text-video
                            key={text.id}

                            editable={this.editable}

                            textId={text.id}
                            textVideo={text}
                            videoText={videoText}

                            updateText={this.updateText}
                            duplicateText={this.duplicateText}
                            removeText={this.removeText}

                            videoWidth={this.videoWidth}
                            videoHeight={this.videoHeight}
                        />
                    );
                })} */}
            </div>
        );
    }
}
