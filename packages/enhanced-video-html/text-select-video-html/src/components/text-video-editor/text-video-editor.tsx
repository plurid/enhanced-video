import { Component, Prop } from '@stencil/core';

import selectTextIcon from '../../assets/select-text-icon.svg';
import grabIcon from '../../assets/grab-icon.svg';
import fontSizeIcon from '../../assets/font-size-icon.svg';
import boldIcon from '../../assets/bold-icon.svg';
import italicIcon from '../../assets/italic-icon.svg';
import letterSpacingIcon from '../../assets/letter-spacing-icon.svg';
import wordSpacingIcon from '../../assets/word-spacing-icon.svg';
import duplicateIcon from '../../assets/duplicate-icon.svg';
import deleteIcon from '../../assets/delete-icon.svg';



@Component({
    tag: 'text-video-editor',
    styleUrl: 'text-video-editor.scss',
    shadow: true
})
export class TextVideoEditor {
    @Prop() draggable: boolean;
    @Prop() toggleDraggable: () => void;

    @Prop() duplicateText: (id: string) => void;
    @Prop() removeText: (id: string) => void;

    @Prop() textEditable: boolean;
    @Prop() toggleTextEditable: () => void;

    @Prop() toggleEditor: () => void;

    @Prop() textId: string;

    @Prop() fontSizeValue: number;
    @Prop() letterSpacingValue: number;
    @Prop() wordSpacingValue: number;
    @Prop() fontFamilyValue: string;
    @Prop() colorValue: string;
    @Prop() textBold: boolean;
    @Prop() textItalic: boolean;

    @Prop() selectableFonts: string[];

    @Prop() changeValue: (type: string, value: number | string) => void;
    @Prop() toggleElement: (element: string) => void;

    duplicate = () => {
        console.log('Duplicate', this.textId);
        this.duplicateText(this.textId);
    }

    remove = () => {
        console.log('Remove text with id: ', this.textId);
        this.removeText(this.textId);
    }

    render() {
        return (
            <span class="text-video-editor">
                <text-video-editor-button-toggle
                    toggle={this.toggleTextEditable}
                    toggled={this.textEditable}
                    icon={selectTextIcon}
                />

                <text-video-editor-button-toggle
                    toggle={this.toggleDraggable}
                    toggled={this.draggable}
                    icon={grabIcon}
                />

                <span class="text-video-editor-vertical-divider">&nbsp;</span>

                <text-video-editor-button-increments
                    type='fontSize'
                    changeValue={this.changeValue}
                    value={this.fontSizeValue}
                    icon={fontSizeIcon}
                />

                <text-video-editor-button-dropdown
                    type='fontFamily'
                    alterStyle='fontFamily'
                    selected={this.fontFamilyValue}
                    selectables={this.selectableFonts}
                    changeSelected={this.changeValue}
                    toggleEditor={this.toggleEditor}
                />

                <text-video-editor-button-toggle
                    toggle={this.toggleElement.bind(this, 'textBold')}
                    toggled={this.textBold}
                    icon={boldIcon}
                />

                <text-video-editor-button-toggle
                    toggle={this.toggleElement.bind(this, 'textItalic')}
                    toggled={this.textItalic}
                    icon={italicIcon}
                />

                <text-video-editor-button-increments
                    type='letterSpacing'
                    changeValue={this.changeValue}
                    value={this.letterSpacingValue}
                    icon={letterSpacingIcon}
                    step={0.1}
                />

                {/* <span class="text-video-editor-button">
                    Line Height
                </span> */}

                <text-video-editor-button-increments
                    type='wordSpacing'
                    changeValue={this.changeValue}
                    value={this.wordSpacingValue}
                    icon={wordSpacingIcon}
                    step={0.1}
                />

                <span class="text-video-editor-button-colors">
                    <span
                        class={`
                            text-video-editor-button-color text-video-editor-button-color-black
                            ${this.colorValue === 'black' ? 'text-video-editor-button-color-active' : ''}
                        `}
                        onClick={this.changeValue.bind(this, 'color', 'black')}
                    />
                    <span
                        class={`
                            text-video-editor-button-color text-video-editor-button-color-red
                            ${this.colorValue === 'red' ? 'text-video-editor-button-color-active' : ''}
                        `}
                        onClick={this.changeValue.bind(this, 'color', 'red')}
                    />
                    <span
                        class={`
                            text-video-editor-button-color text-video-editor-button-color-white
                            ${this.colorValue === 'white' ? 'text-video-editor-button-color-active' : ''}
                        `}
                        onClick={this.changeValue.bind(this, 'color', 'white')}
                    />
                </span>

                <span class="text-video-editor-vertical-divider">&nbsp;</span>

                <span
                    class="text-video-editor-button"
                    onClick={this.duplicate}
                >
                    <span
                        class="text-video-editor-button-icon"
                        innerHTML={duplicateIcon}
                    />
                </span>

                <span
                    class="text-video-editor-button"
                    onClick={this.remove}
                >
                    <span
                        class="text-video-editor-button-icon"
                        innerHTML={deleteIcon}
                    />
                </span>
            </span>
        );
    }
}
