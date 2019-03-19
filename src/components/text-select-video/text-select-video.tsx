import { Component, Prop, State } from '@stencil/core';

import { ITextSelectVideoData, ITextVideo } from '../../interfaces/video-text';

import { styleStringToObject } from '../../utils/styleString';
import { uuidv4 } from '../../utils/uuid';



@Component({
    tag: 'text-select-video',
    styleUrl: 'text-select-video.scss',
    shadow: true
})
export class TextSelectVideo {
    video!: HTMLVideoElement;

    @Prop() src: string;
    @Prop() type: string;
    @Prop() height: string;
    @Prop() width: string;
    @Prop() classes: string;
    @Prop() styling: string;

    @Prop() control: boolean;
    @Prop() textData: string;

    @State() styled: any;
    @State() showControl: boolean;
    @State() selectText: ITextSelectVideoData;
    @State() editable: boolean = false;
    @State() toggledSettings: boolean = false;
    @State() videoWidth: number = 0;
    @State() videoHeight: number = 0;

    async componentWillLoad() {
        this.styled = this.styling
            ? styleStringToObject(this.styling)
            : {};
        this.showControl = this.control
            ? this.control
            : false;
        this.selectText = this.textData
            ? this.parseText(this.textData)
            : await this.loadDummyText();
    }

    componentDidLoad() {
        this.videoWidth = this.video.offsetWidth;
        this.videoHeight = this.video.offsetHeight;
    }

    parseText = (data: string) => {
        console.log('data', data);
        let parsedData: ITextSelectVideoData;
        return parsedData;
    }

    loadDummyText = async () => {
        const response = await fetch('../../test-data/food-text.json');
        const dummyData: ITextSelectVideoData = await response.json();
        // console.log('dummyData', dummyData);
        return dummyData;
    }

    toggleEditable = () => {
        this.editable = !this.editable;
        this.toggleSettings();
    }

    toggleSettings = () => {
        this.toggledSettings = !this.toggledSettings;
    }

    updateText = (id: string, record: ITextVideo) => {
        const updatedTexts = this.selectText.videoText.map((text: ITextVideo) => {
            if (text.id === id) {
                const updatedText: ITextVideo = { ...text, ...record };
                return updatedText;
            }
            return text;
        });
        this.selectText.videoText = updatedTexts;

        this.textselectvideoEvent();
    }

    textselectvideoEvent = () => {
        const updatedTextSelectVideo = new CustomEvent(
            "textselectvideo",
            { detail: this.selectText }
        );
        document.dispatchEvent(updatedTextSelectVideo);
    }

    duplicateText = (id: string) => {
        const selectText = { ...this.selectText };
        const texts = [];
        let duplicatedText: ITextVideo;

        selectText.videoText.map((text: ITextVideo) => {
            texts.push(text);
            if (text.id === id) {
                duplicatedText = {
                    ...text,
                    id: `tsi-text-${uuidv4()}`,
                    yCoord: text.yCoord + 50,
                };
                texts.push(duplicatedText);
                // console.log('duplicate source', text);
                // console.log('duplicated text', duplicatedText);
            }
        });

        selectText.videoText = texts;
        this.selectText = { ...selectText };
    }

    deleteText = (id: string) => {
        const selectText = { ...this.selectText }

        const texts = selectText.videoText.filter((text: ITextVideo) => {
            if (text.id === id) {
                return false;
            }
            return text;
        });
        // console.log(texts);

        selectText.videoText = texts;
        this.selectText = { ...selectText };
        // console.log(this.selectText);
    }

    addText = () => {
        const selectText = { ...this.selectText }

        const text = {
            id: `tsi-text-${uuidv4()}`,
            begin: 0,
            end: 0,
            xPercentage: 0,
            yPercentage: 0,
            xCoord: 50,
            yCoord: 50,
            perspective: '',
            rotation: '',
            skew: '',
            color: 'white',
            fontFamily: 'Helvetica',
            fontSize: 30,
            bold: false,
            italic: false,
            letterSpacing: 0,
            lineHeight: 'auto',
            wordSpacing: 0,
            content: 'New Text'
        }

        selectText.videoText.push(text);
        this.selectText = { ...selectText };
    }

    render() {
        // console.log('RENDER TSV', this.selectText);

        return (
            <div
                style={ {...this.styled} }
                class="text-select-video-container"
            >
                <video
                    ref={(imgEl) => this.video = imgEl as HTMLVideoElement}
                    controls
                >
                    <source src={this.src} type={`video/${this.type}`} />
                </video>

                <select-video
                    selectText={this.selectText}
                    editable={this.editable}

                    videoWidth={this.videoWidth}
                    videoHeight={this.videoHeight}

                    updateText={this.updateText}
                    duplicateText={this.duplicateText}
                    deleteText={this.deleteText}
                />

                {this.showControl && (
                    <text-select-video-settings
                        toggledSettings={this.toggledSettings}
                        toggleSettings={this.toggleSettings}
                        editable={this.editable}
                        toggleEditable={this.toggleEditable}
                        addText={this.addText}
                    />
                )}
            </div>
        );
    }
}
