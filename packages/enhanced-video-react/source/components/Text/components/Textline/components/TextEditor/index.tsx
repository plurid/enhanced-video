import React, {
    useContext,
    useRef,
    useEffect,
} from 'react';

import {
    objects,
 } from '@plurid/plurid-functions';

import {
    StyledTextEditor,
    StyledVerticalDivider,
} from './styled';

import Context from '../../../../../../services/context';

import ButtonDropdown from './components/ButtonDropdown';
import ButtonIncrements from './components/ButtonIncrements';
import ButtonTimeIncrements from './components/ButtonTimeIncrements';
import ButtonInput from './components/ButtonInput';
import ButtonToggle from './components/ButtonToggle';
import ButtonsColors from './components/ButtonsColors';
import ButtonClick from './components/ButtonClick';

import { selectableFonts } from '../../../../../../data/constants/fonts';

import SelectTextIcon from '../../../../../../assets/icons/select-text-icon';
import GrabIcon from '../../../../../../assets/icons/grab-icon';
import ViewableIcon from '../../../../../../assets/icons/viewable-icon';
import NotViewableIcon from '../../../../../../assets/icons/not-viewable-icon';
import AlwaysShowOnIcon from '../../../../../../assets/icons/always-show-on-icon';
import AlwaysShowOffIcon from '../../../../../../assets/icons/always-show-off-icon';
import StartTimeIcon from '../../../../../../assets/icons/start-time-icon';
import EndTimeIcon from '../../../../../../assets/icons/end-time-icon';
import FontSizeIcon from '../../../../../../assets/icons/font-size-icon';
import LinkIcon from '../../../../../../assets/icons/link-icon';
import BoldIcon from '../../../../../../assets/icons/bold-icon';
import ItalicIcon from '../../../../../../assets/icons/italic-icon';
import LetterSpacingIcon from '../../../../../../assets/icons/letter-spacing-icon';
import WordSpacingIcon from '../../../../../../assets/icons/word-spacing-icon';
import DuplicateIcon from '../../../../../../assets/icons/duplicate-icon';
import DeleteIcon from '../../../../../../assets/icons/delete-icon';

import {
    valueFromPercentage,
    percentageFromValue,
} from '../../../../../../services/utilities/percentage';

import {
    VideoText,
    VideoTextVersionTextline,
} from '../../../../../../data/interfaces';



export interface TextEditorProperties {
    textItem: VideoText;
    currentVersion: VideoTextVersionTextline;

    editable: boolean;
    setEditable: React.Dispatch<React.SetStateAction<boolean>>;
    draggable: boolean;
    setDraggable: React.Dispatch<React.SetStateAction<boolean>>;
    positions: {
        x: number;
        y: number;
    };
}

const TextEditor: React.FC<TextEditorProperties> = (
    properties,
) => {
    /** context */
    const context = useContext(Context);

    if (!context) {
        return (<></>);
    }

    const {
        theme,

        updateTextItemField,
        toggleVersionViewable,
        duplicateTextItem,
        deleteTextItem,

        videoBoxDimensions,
    } = context;


    /** properties */
    const {
        textItem,
        currentVersion,

        editable,
        setEditable,
        draggable,
        setDraggable,

        positions,
    } = properties;


    /** references */
    const editor = useRef<HTMLDivElement>(null);


    /** handlers */
    const updateField = (
        type: string,
        value: number | string | boolean,
    ) => {
        switch (type) {
            case 'font.size':
                if (typeof value === 'number') {
                    const fontSizePercentage = percentageFromValue(value, videoBoxDimensions.height);
                    updateTextItemField(textItem.id, 'font.size', fontSizePercentage);
                }
                break;
            case 'font.family':
                updateTextItemField(textItem.id, 'font.family', value);
                break;
            case 'font.letterSpacing':
                if (typeof value === 'number') {
                    const letterSpacingPercentage = percentageFromValue(value, videoBoxDimensions.width);
                    updateTextItemField(textItem.id, 'font.letterSpacing', letterSpacingPercentage);
                }
                break;
            case 'font.wordSpacing':
                if (typeof value === 'number') {
                    const wordSpacingPercentage = percentageFromValue(value, videoBoxDimensions.width);
                    updateTextItemField(textItem.id, 'font.wordSpacing', wordSpacingPercentage);
                }
                break;
            case 'link.to':
                updateTextItemField(textItem.id, 'link.to', value);
                break;
            case 'color':
                updateTextItemField(textItem.id, 'color', value);
                break;
            case 'transform.perspective':
                if (typeof value === 'number') {
                    updateTextItemField(textItem.id, 'transform.perspective', value - 1);
                }
                break;
            case 'transform.rx':
                if (typeof value === 'number') {
                    updateTextItemField(textItem.id, 'transform.rx', value - 1);
                }
                break;
            case 'transform.ry':
                if (typeof value === 'number') {
                    updateTextItemField(textItem.id, 'transform.ry', value - 1);
                }
                break;
            case 'transform.rz':
                if (typeof value === 'number') {
                    updateTextItemField(textItem.id, 'transform.rz', value - 1);
                }
                break;
            case 'transform.sx':
                if (typeof value === 'number') {
                    updateTextItemField(textItem.id, 'transform.sx', value - 1);
                }
                break;
            case 'transform.sy':
                if (typeof value === 'number') {
                    updateTextItemField(textItem.id, 'transform.sy', value - 1);
                }
                break;
        }
    }

    const toggleTextFormat = (
        type: string,
        checkValue: string | boolean,
    ) => {
        const data = objects.getNested(currentVersion, type);

        if (typeof checkValue === 'boolean') {
            if (data) {
                updateTextItemField(textItem.id, type, false);
            } else {
                updateTextItemField(textItem.id, type, true);
            }
        } else {
            if (data === checkValue) {
                updateTextItemField(textItem.id, type, 'normal');
            } else {
                updateTextItemField(textItem.id, type, checkValue);
            }
        }
    }


    /** effects */
    /** Toggle editable. */
    useEffect(() => {
        if (editable) {
            setDraggable(false);
        }
    }, [
        editable,
    ]);

    /** Toggle draggable. */
    useEffect(() => {
        if (draggable) {
            setEditable(false);
        }
    }, [
        draggable,
    ]);


    /** render */
    return (
        <StyledTextEditor
            theme={theme}
            ref={editor}
        >
            <ButtonToggle
                theme={theme}
                toggle={() => setEditable(editable => !editable)}
                toggled={editable}
                icon={SelectTextIcon}
            />

            <ButtonToggle
                theme={theme}
                toggle={() => setDraggable(draggable => !draggable)}
                toggled={draggable}
                icon={GrabIcon}
            />

            <StyledVerticalDivider
                theme={theme}
            >
                &nbsp;
            </StyledVerticalDivider>

            <ButtonToggle
                theme={theme}
                toggle={() => {}}
                toggled={false}
                icon={AlwaysShowOnIcon}
                // toggle={toggleTextAlwaysShow}
                // toggled={textAlwaysShow}
                // icon={textAlwaysShow ? AlwaysShowOnIcon : AlwaysShowOffIcon}
            />

            <ButtonTimeIncrements
                theme={theme}
                type="time.start"
                changeValue={updateField}
                time={currentVersion.time.start}
                icon={StartTimeIcon}
            />

            <ButtonTimeIncrements
                theme={theme}
                type="time.end"
                changeValue={updateField}
                time={currentVersion.time.end}
                icon={EndTimeIcon}
                iconAfter={true}
            />

            <StyledVerticalDivider
                theme={theme}
            >
                &nbsp;
            </StyledVerticalDivider>

            <ButtonIncrements
                theme={theme}
                type="font.size"
                changeValue={updateField}
                value={currentVersion.font.size * videoBoxDimensions.height / 100}
                icon={FontSizeIcon}
            />

            <ButtonDropdown
                theme={theme}
                type="font.family"
                alterStyle="font.family"
                selected={currentVersion.font.family}
                selectables={selectableFonts}
                changeSelected={updateField}
                toggleEditor={() => {}}
                textDraggable={false}
                toggleTextDraggable={() => {}}
                toggleTextSelected={() => {}}
                // toggleEditor={toggleEditor}
                // textDraggable={textDraggable}
                // toggleTextDraggable={toggleTextDraggable}
                // toggleTextSelected={toggleSelected}
            />

            <ButtonInput
                theme={theme}
                toggle={() => toggleTextFormat('link.active', true)}
                toggled={currentVersion.link.active}
                icon={LinkIcon}
                value={currentVersion.link.to}
                valueType="link.to"
                changeValue={updateField}
            />

            <ButtonToggle
                theme={theme}
                toggle={() => toggleTextFormat('font.weight', 'bold')}
                toggled={currentVersion.font.weight === 'bold'}
                icon={BoldIcon}
            />

            <ButtonToggle
                theme={theme}
                toggle={() => toggleTextFormat('font.style', 'italic')}
                toggled={currentVersion.font.style === 'italic'}
                icon={ItalicIcon}
            />

            <ButtonIncrements
                theme={theme}
                type="font.letterSpacing"
                changeValue={updateField}
                value={currentVersion.font.letterSpacing * videoBoxDimensions.width / 100}
                icon={LetterSpacingIcon}
                step={0.1}
            />

            <ButtonIncrements
                theme={theme}
                type="font.wordSpacing"
                changeValue={updateField}
                value={currentVersion.font.wordSpacing * videoBoxDimensions.width / 100}
                icon={WordSpacingIcon}
                step={0.1}
            />

            <ButtonsColors
                theme={theme}
                changeValue={updateField}
                color={currentVersion.color}
            />

            <StyledVerticalDivider
                theme={theme}
            >
                &nbsp;
            </StyledVerticalDivider>


            <ButtonToggle
                theme={theme}
                toggle={() => toggleVersionViewable(textItem.id)}
                toggled={currentVersion.viewable}
                icon={currentVersion.viewable ? ViewableIcon : NotViewableIcon}
            />

            <ButtonClick
                theme={theme}
                atClick={() => duplicateTextItem(textItem.id)}
                icon={DuplicateIcon}
            />

            <ButtonClick
                theme={theme}
                atClick={() => deleteTextItem(textItem.id)}
                icon={DeleteIcon}
            />
        </StyledTextEditor>
    );
};


export default TextEditor;





// class TextVideoEditor extends Component<any, any> {
//     static contextType = Context;
//     public editor: any = React.createRef();

//     public componentDidMount() {
//         const {
//             setEditorWidth,
//         } = this.context

//         const editorWidth = this.editor.current.offsetWidth;
//         // console.log('editorWidth', editorWidth);
//         setEditorWidth(editorWidth);
//     }

//     public render() {
//         const {
//             theme,
//             videoBoxWidth,
//             videoBoxHeight,
//         } = this.context;

//         const {
//             toggleTextEditable,
//             textEditable,
//             toggleTextDraggable,
//             textDraggable,
//             toggleTextViewable,
//             textViewable,
//             toggleEditor,
//             toggleSelected,
//             xCoord,
//             yCoord,
//             version,
//             toggleTextAlwaysShow,
//             textAlwaysShow,
//         } = this.props;

//         const {
//             startTime,
//             endTime,
//             color,
//             fontSizePercentage,
//             fontFamily,
//             bold,
//             italic,
//             link,
//             linkTo,
//             wordSpacingPercentage,
//             letterSpacingPercentage,
//         } = version;

//         const fontSize = Math.round(valueFromPercentage(fontSizePercentage, videoBoxHeight));
//         const letterSpacing = valueFromPercentage(letterSpacingPercentage, videoBoxWidth);
//         const wordSpacing = valueFromPercentage(wordSpacingPercentage, videoBoxWidth);

//         return (
//             <StyledTextVideoEditor
//                 theme={theme}
//                 style={{
//                     left: xCoord + 'px',
//                     top: yCoord + 'px',
//                 }}
//                 ref={this.editor}
//             >

//             </StyledTextVideoEditor>
//         );
//     }

//     private updateField = (element: any, value?: any) => {
//         const {
//             updateTextVideoField,
//             videoBoxWidth,
//             videoBoxHeight,
//         } = this.context;

//         const {
//             textId,
//             version,
//         } = this.props;

//         let el = element;
//         let val: string | number | boolean | undefined = value;

//         switch(element) {
//             case 'fontSize':
//                 el = 'fontSizePercentage';
//                 val = percentageFromValue(value, videoBoxHeight);
//                 break;
//             case 'letterSpacing':
//                 el = 'letterSpacingPercentage';
//                 val = percentageFromValue(value, videoBoxWidth);
//                 break;
//             case 'wordSpacing':
//                 el = 'wordSpacingPercentage';
//                 val = percentageFromValue(value, videoBoxWidth);
//                 break;
//             case 'link':
//                 el = 'link';
//                 val = !version.link;
//                 break;
//             case 'bold':
//                 el = 'bold';
//                 val = !version.bold;
//                 break;
//             case 'italic':
//                 el = 'italic';
//                 val = !version.italic;
//                 break;
//             default:
//                 el = element;
//                 val = value;
//         }

//         // console.log(el, val);
//         updateTextVideoField(textId, el, val);
//     }

//     private duplicate = () => {
//         const {
//             duplicateTextVideo,
//             toggleTextEditable,
//             textEditable,
//             toggleTextDraggable,
//             textDraggable,
//         } = this.context;

//         if (textEditable) {
//             toggleTextEditable();
//         }

//         if (textDraggable) {
//             toggleTextDraggable();
//         }

//         const {
//             textId
//         } = this.props;

//         duplicateTextVideo(textId);
//     }

//     private delete = () => {
//         const {
//             deleteTextVideo,
//             toggleTextEditable,
//             textEditable,
//             toggleTextDraggable,
//             textDraggable,
//         } = this.context;

//         if (textEditable) {
//             toggleTextEditable();
//         }

//         if (textDraggable) {
//             toggleTextDraggable();
//         }

//         const {
//             textId,
//         } = this.props;

//         deleteTextVideo(textId);
//     }
// }


// export default TextVideoEditor;
