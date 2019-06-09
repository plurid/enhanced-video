import React, { Component } from 'react';

import {
    StyledTextVideoEditor,
    StyledTextVideoEditorVerticalDivider,
} from './styled';

import Context from '../../context';

import TextVideoEditorButtonDropdown from '../TextVideoEditorButtonDropdown';
import TextVideoEditorButtonIncrements from '../TextVideoEditorButtonIncrements';
import TextVideoEditorButtonTimeIncrements from '../TextVideoEditorButtonTimeIncrements';
import TextVideoEditorButtonInput from '../TextVideoEditorButtonInput';
import TextVideoEditorButtonToggle from '../TextVideoEditorButtonToggle';
import TextVideoEditorButtonsColors from '../TextVideoEditorButtonsColors';
import TextVideoEditorButtonClick from '../TextVideoEditorButtonClick';

import { selectableFonts } from '../../data/fonts';

import SelectTextIcon from '../../assets/select-text-icon';
import GrabIcon from '../../assets/grab-icon';
import ViewableIcon from '../../assets/viewable-icon';
import NotViewableIcon from '../../assets/not-viewable-icon';
import StartTimeIcon from '../../assets/start-time-icon';
import EndTimeIcon from '../../assets/end-time-icon';
import FontSizeIcon from '../../assets/font-size-icon';
import LinkIcon from '../../assets/link-icon';
import BoldIcon from '../../assets/bold-icon';
import ItalicIcon from '../../assets/italic-icon';
import LetterSpacingIcon from '../../assets/letter-spacing-icon';
import WordSpacingIcon from '../../assets/word-spacing-icon';
import DuplicateIcon from '../../assets/duplicate-icon';
import DeleteIcon from '../../assets/delete-icon';

import {
    percentageFromValue,
    valueFromPercentage,
} from '../../utils/percentage';



class TextVideoEditor extends Component<any, any> {
    static contextType = Context;
    public editor: any = React.createRef();

    public componentDidMount() {
        const {
            setEditorWidth,
        } = this.context

        const editorWidth = this.editor.current.offsetWidth;
        // console.log('editorWidth', editorWidth);
        setEditorWidth(editorWidth);
    }

    public render() {
        const {
            theme,
            videoBoxWidth,
            videoBoxHeight,
        } = this.context;

        const {
            toggleTextEditable,
            textEditable,
            toggleTextDraggable,
            textDraggable,
            toggleTextViewable,
            textViewable,
            toggleEditor,
            toggleSelected,
            xCoord,
            yCoord,
            version,
        } = this.props;

        const {
            startTime,
            endTime,
            color,
            fontSizePercentage,
            fontFamily,
            bold,
            italic,
            link,
            linkTo,
            wordSpacingPercentage,
            letterSpacingPercentage,
        } = version;

        const fontSize = Math.round(valueFromPercentage(fontSizePercentage, videoBoxHeight));
        const letterSpacing = valueFromPercentage(letterSpacingPercentage, videoBoxWidth);
        const wordSpacing = valueFromPercentage(wordSpacingPercentage, videoBoxWidth);

        return (
            <StyledTextVideoEditor
                theme={theme}
                style={{
                    left: xCoord + 'px',
                    top: yCoord + 'px',
                }}
                ref={this.editor}
            >
                <TextVideoEditorButtonToggle
                    theme={theme}
                    toggle={toggleTextEditable}
                    toggled={textEditable}
                    icon={SelectTextIcon}
                />

                <TextVideoEditorButtonToggle
                    theme={theme}
                    toggle={toggleTextDraggable}
                    toggled={textDraggable}
                    icon={GrabIcon}
                />

                <TextVideoEditorButtonToggle
                    theme={theme}
                    toggle={toggleTextViewable}
                    toggled={textViewable}
                    icon={textViewable ? ViewableIcon : NotViewableIcon}
                />

                <StyledTextVideoEditorVerticalDivider
                    theme={theme}
                >
                    &nbsp;
                </StyledTextVideoEditorVerticalDivider>


                <TextVideoEditorButtonTimeIncrements
                    theme={theme}
                    type="startTime"
                    changeValue={this.updateField}
                    time={startTime}
                    icon={StartTimeIcon}
                />

                <TextVideoEditorButtonTimeIncrements
                    theme={theme}
                    type="endTime"
                    changeValue={this.updateField}
                    time={endTime}
                    icon={EndTimeIcon}
                    iconAfter={true}
                />

                <StyledTextVideoEditorVerticalDivider
                    theme={theme}
                >
                    &nbsp;
                </StyledTextVideoEditorVerticalDivider>

                <TextVideoEditorButtonIncrements
                    theme={theme}
                    type="fontSize"
                    changeValue={this.updateField}
                    value={fontSize}
                    icon={FontSizeIcon}
                />

                <TextVideoEditorButtonDropdown
                    type="fontFamily"
                    alterStyle="fontFamily"
                    selected={fontFamily}
                    selectables={selectableFonts}
                    changeSelected={this.updateField}
                    toggleEditor={toggleEditor}
                    textDraggable={textDraggable}
                    toggleTextDraggable={toggleTextDraggable}
                    toggleTextSelected={toggleSelected}
                />

                <TextVideoEditorButtonInput
                    theme={theme}
                    toggle={this.updateField.bind(this, 'link')}
                    toggled={link}
                    icon={LinkIcon}
                    value={linkTo}
                    valueType="linkTo"
                    changeValue={this.updateField}
                />

                <TextVideoEditorButtonToggle
                    theme={theme}
                    toggle={this.updateField.bind(this, 'bold')}
                    toggled={bold}
                    icon={BoldIcon}
                />

                <TextVideoEditorButtonToggle
                    theme={theme}
                    toggle={this.updateField.bind(this, 'italic')}
                    toggled={italic}
                    icon={ItalicIcon}
                />

                <TextVideoEditorButtonIncrements
                    theme={theme}
                    type="letterSpacing"
                    changeValue={this.updateField}
                    value={letterSpacing}
                    icon={LetterSpacingIcon}
                    step={0.1}
                />

                <TextVideoEditorButtonIncrements
                    theme={theme}
                    type="wordSpacing"
                    changeValue={this.updateField}
                    value={wordSpacing}
                    icon={WordSpacingIcon}
                    step={0.1}
                />

                <TextVideoEditorButtonsColors
                    changeValue={this.updateField}
                    color={color}
                />

                <StyledTextVideoEditorVerticalDivider
                    theme={theme}
                >
                    &nbsp;
                </StyledTextVideoEditorVerticalDivider>

                <TextVideoEditorButtonClick
                    theme={theme}
                    atClick={this.duplicate}
                    icon={DuplicateIcon}
                />

                <TextVideoEditorButtonClick
                    theme={theme}
                    atClick={this.delete}
                    icon={DeleteIcon}
                />
            </StyledTextVideoEditor>
        );
    }

    private updateField = (element: any, value?: any) => {
        const {
            updateTextVideoField,
            videoBoxWidth,
            videoBoxHeight,
        } = this.context;

        const {
            textId,
            version,
        } = this.props;

        let el = element;
        let val: string | number | boolean | undefined = value;

        switch(element) {
            case 'fontSize':
                el = 'fontSizePercentage';
                val = percentageFromValue(value, videoBoxHeight);
                break;
            case 'letterSpacing':
                el = 'letterSpacingPercentage';
                val = percentageFromValue(value, videoBoxWidth);
                break;
            case 'wordSpacing':
                el = 'wordSpacingPercentage';
                val = percentageFromValue(value, videoBoxWidth);
                break;
            case 'link':
                el = 'link';
                val = !version.link;
                break;
            case 'bold':
                el = 'bold';
                val = !version.bold;
                break;
            case 'italic':
                el = 'italic';
                val = !version.italic;
                break;
            default:
                el = element;
                val = value;
        }

        // console.log(el, val);
        updateTextVideoField(textId, el, val);
    }

    private duplicate = () => {
        const {
            duplicateTextVideo,
            toggleTextEditable,
            textEditable,
            toggleTextDraggable,
            textDraggable,
        } = this.context;

        if (textEditable) {
            toggleTextEditable();
        }

        if (textDraggable) {
            toggleTextDraggable();
        }

        const {
            textId
        } = this.props;

        duplicateTextVideo(textId);
    }

    private delete = () => {
        const {
            deleteTextVideo,
            toggleTextEditable,
            textEditable,
            toggleTextDraggable,
            textDraggable,
        } = this.context;

        if (textEditable) {
            toggleTextEditable();
        }

        if (textDraggable) {
            toggleTextDraggable();
        }

        const {
            textId,
        } = this.props;

        deleteTextVideo(textId);
    }
}


export default TextVideoEditor;
