import React, {
    useContext,
    useState,
    useEffect,
    useRef,
} from 'react';

import {
    StyledTextItem,
    StyledTextContent,
    StyledTextContentLink,
    StyledEditableDiv,
} from './styled';

import TextEditor from './components/TextEditor';

import {
    VideoText,
    VideoTextVersionTextline,
} from '../../../../data/interfaces';

import {
    getVersionById,
} from '../../../../services/utilities/videoText';

import {
    percentageFromValue,
} from '../../../../services/utilities/percentage';

import Context from '../../../../services/context';

// import ButtonMore from '../../../UI/ButtonMore';

// import { EDITOR_HEIGHT } from '../../../../data/constants/constants';

// import {
//     valueFromPercentage,
//     percentageFromValue,
// } from '../../../../services/utilities/percentage';



export interface TextlineProperties {
    data: VideoText;
}

const Textline: React.FC<TextlineProperties> = (
    properties,
) => {
    /** context */
    const context = useContext(Context);
    if (!context) {
        return (<></>);
    }

    const {
        editableText,
        revealedText,
        videoBoxDimensions,
        updateTextCoordinates,
        updateVersionContent,
    } = context;


    /** properties */
    const {
        data,
    } = properties;


    /** references */
    const timeoutMouseOver = useRef(0);
    const textItem = useRef<HTMLDivElement>();


    /** state */
    const [currentVersion, setCurrentVersion] = useState<VideoTextVersionTextline>();

    const [textYCoord, setTextYCoord] = useState('0px');
    const [textXCoord, setTextXCoord] = useState('0px');
    const [textColor, setTextColor] = useState('transparent');

    const [perspective, setPerspective] = useState('0px');
    const [rotationX, setRotationX] = useState('0deg');
    const [rotationY, setRotationY] = useState('0deg');
    const [rotationZ, setRotationZ] = useState('0deg');
    const [skewX, setSkewX] = useState('0deg');
    const [skewY, setSkewY] = useState('0deg');

    const [fontWeight, setFontWeight] = useState('normal');
    const [fontStyle, setFontStyle] = useState('normal');
    const [fontSize, setFontSize] = useState('12px');
    const [fontFamily, setFontFamily] = useState('Arial');
    const [letterSpacing, setLetterSpacing] = useState('0px');
    const [wordSpacing, setWordSpacing] = useState('0px');
    const [lineHeight, setLineHeight] = useState('auto');

    const [showEditor, setShowEditor] = useState(false);

    const [mouseOver, setMouseOver] = useState(false);

    const [textValue, _] = useState('text');

    const [editable, setEditable] = useState(false);
    const [draggable, setDraggable] = useState(false);
    const [dragging, setDragging] = useState(false);

    const [positions, setPositions] = useState({
        x: 0,
        y: 0,
    });

    const [editorPositions, setEditorPositions] = useState({
        x: -17,
        y: -34,
    });
    const [editorExpandFormat, setEditorExpandFormat] = useState(false);
    const [editorWidth, setEditorWidth] = useState(0);
    const [editorFullWidth, setEditorFullWidth] = useState(false);

    const [loaded, setLoaded] = useState(false);


    /** handlers */
    const handleMouseEnter = () => {
        clearTimeout(timeoutMouseOver.current);
        setMouseOver(true);
    }

    const handleMouseLeave = () => {
        timeoutMouseOver.current = setTimeout(() => {
            if (mouseOver) {
                setMouseOver(false)
            }
        }, 700);
    }

    const handleMouseDown = (
        event: MouseEvent,
    ) => {
        if (draggable) {
            setDragging(true);

            const pageX = event.pageX;
            const pageY = event.pageY;

            const positions = {
                x: pageX,
                y: pageY,
            };
            setPositions(positions);
        }
    }

    const handleEditorPosition = () => {
        if (textItem.current) {
            const {
                offsetLeft,
                offsetTop,
                offsetHeight,
            } = textItem.current;

            // Do not let editor to go to the right
            // or keep it within the video
            // if the editor has the width greater than the video
            let editorXCoord = (offsetLeft + editorWidth) > videoBoxDimensions.width
                ? editorWidth < videoBoxDimensions.width
                    ? -1 * (offsetLeft + editorWidth - videoBoxDimensions.width)
                    : (-offsetLeft + 10)
                : -17;

            // Do not let editor to go to the left.
            if (offsetLeft < 17) {
                editorXCoord = offsetLeft * -1;
            }

            if (editorWidth === 0) {
                editorXCoord = - offsetLeft;
            }

            if (
                (editorWidth > videoBoxDimensions.width)
                || (editorWidth + 30 > videoBoxDimensions.width)
            ) {
                setEditorFullWidth(true);
            } else {
                setEditorFullWidth(false);
            }

            if (!editorExpandFormat) {
                setEditorFullWidth(false);
            }

            // Do not let editor to go to over the top.
            const editorYCoord = offsetTop < 34
                ? offsetHeight
                : -34;

            const editorPositions = {
                x: editorXCoord,
                y: editorYCoord,
            }
            setEditorPositions(editorPositions);
        }
    }

    const handleChange = (
        event: React.SyntheticEvent<HTMLDivElement>,
    ) => {
        const value = event.currentTarget.innerText;
        if (value !== '') {
            updateVersionContent(data.id, value);
        } else {
            updateVersionContent(data.id, 'New Text');
        }
    }

    const handleKeyDown = (
        event: KeyboardEvent,
    ) => {
        handleShortcuts(event);
        handleArrows(event);
    }

    const handleShortcuts = (
        event: KeyboardEvent,
    ) => {
        const {
            duplicateTextItem,
            deleteTextItem,
        } = context;

        const {
            key,
            altKey,
        } = event;

        if (key === '†' && altKey) {
            setEditable(show => !show);
        }

        if (editable) {
            return;
        }

        switch(key) {
            case 't':
                setEditable(show => !show);
                break;
            case 'g':
                setDraggable(drag => !drag);
                break;
            case 'v':
                // setVersionViewable();
                break;
            case 'd':
                duplicateTextItem(data.id);
                break;
            case 'x':
                deleteTextItem(data.id);
                break;
        }
    }

    const handleArrows = (
        event: KeyboardEvent,
    ) => {
        if (!draggable) {
            return;
        }

        event.preventDefault();

        if (event.shiftKey) {
            moveWithArrows(event, 10);
        } else {
            moveWithArrows(event);
        }
    }

    const moveWithArrows = (
        event: KeyboardEvent,
        step: number = 1,
    ) => {
        const {
            key,
        } = event;

        switch(key) {
            case 'ArrowLeft': {
                const xPosition = positions.x - step;
                const newPositions = {
                    x: xPosition,
                    y: positions.y,
                };
                setPositions(newPositions);
                break;
            }
            case 'ArrowRight': {
                const xPosition = positions.x + step;
                const newPositions = {
                    x: xPosition,
                    y: positions.y,
                };
                setPositions(newPositions);
                break;
            }
            case 'ArrowUp': {
                const yPosition = positions.y - step;
                const newPositions = {
                    x: positions.x,
                    y: yPosition,
                };
                setPositions(newPositions);
                break;
            }
            case 'ArrowDown': {
                const yPosition = positions.y + step;
                const newPositions = {
                    x: positions.x,
                    y: yPosition,
                };
                setPositions(newPositions);
                break;
            }
        }
    }




    /** effects */
    useEffect(() => {
        const currentVersion = getVersionById(data);

        if (currentVersion && currentVersion.type === 'TEXTLINE') {
            setCurrentVersion(currentVersion);
        }
    }, [data]);

    useEffect(() => {
        if (currentVersion) {
            setTextXCoord(currentVersion.xPercent * videoBoxDimensions.width / 100 + 'px');
            setTextYCoord(currentVersion.yPercent * videoBoxDimensions.height / 100 + 'px');

            setFontWeight(currentVersion.fontWeight);
            setFontStyle(currentVersion.fontStyle);
            setFontFamily(currentVersion.fontFamily);
            setFontSize(currentVersion.fontSizePercent * videoBoxDimensions.height / 100 + 'px');
            setLetterSpacing(currentVersion.letterSpacingPercent * videoBoxDimensions.width / 100 + 'px');
            setWordSpacing(currentVersion.wordSpacingPercent * videoBoxDimensions.width / 100 + 'px');

            if (currentVersion.lineHeightPercent === 0) {
                setLineHeight('auto');
            } else {
                setLineHeight(currentVersion.lineHeightPercent * videoBoxDimensions.height / 100 + 'px');
            }
        }
    }, [
        currentVersion,
        videoBoxDimensions,
    ]);

    useEffect(() => {
        if (currentVersion) {
            if (editableText) {
                setTextColor(currentVersion.color);
            } else {
                setTextColor('transparent');
            }
        }
    }, [
        currentVersion,
        editableText,
    ]);

    useEffect(() => {
        if (editableText && mouseOver) {
            setShowEditor(true);
        } else {
            setShowEditor(false);
        }
    }, [
        editableText,
        mouseOver,
    ]);


    /**
     * Handle dragging (mouseup).
     */
    useEffect(() => {
        const handleMouseUp = () => {
            if (draggable) {
                setDragging(false);
            }
        }

        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mouseup', handleMouseUp);
        }
    }, [
        dragging,
        draggable,
    ]);

    /**
     * Handle dragging (movemove).
     */
    useEffect(() => {
        const handleMouseMove = (
            event: any,
        ) => {
            if (!dragging) {
                return;
            }

            event.preventDefault();

            if (textItem.current) {
                const { offsetLeft, offsetTop } = textItem.current;

                const pageX = event.pageX;
                const pageY = event.pageY;

                const differenceX = pageX - positions.x;
                const differenceY = pageY - positions.y;

                const updatedPositions = {
                    x: pageX,
                    y: pageY,
                };
                setPositions(updatedPositions);

                const textXCoordinate = offsetLeft + differenceX;
                const textYCoordinate = offsetTop + differenceY;
                const textXCoord = textXCoordinate + 'px';
                const textYCoord = textYCoordinate + 'px';
                setTextXCoord(textXCoord);
                setTextYCoord(textYCoord);

                const xCoordPercentage = percentageFromValue(
                    textXCoordinate,
                    videoBoxDimensions.width
                );
                const yCoordPercentage = percentageFromValue(
                    textYCoordinate,
                    videoBoxDimensions.height
                );
                const coordinatesPercentage = {
                    x: xCoordPercentage,
                    y: yCoordPercentage,
                };
                updateTextCoordinates(data.id, coordinatesPercentage);
            }
        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [
        dragging,
        draggable,
        positions,
        textXCoord,
        textYCoord,
    ]);

    /**
     * Handle editorWidth.
     */
    useEffect(() => {
        handleEditorPosition();
    }, [
        editorWidth,
        dragging,
        mouseOver,
    ]);



    /** render */
    return (
        <StyledTextItem
            tabIndex={0}
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
            onKeyDown={handleKeyDown}
            ref={textItem}
            style={{
                top: textYCoord,
                left: textXCoord,
                color: textColor,
                fontFamily,
                fontSize,
                fontWeight,
                fontStyle,
                letterSpacing,
                wordSpacing,
                lineHeight,
                perspective,
            }}
        >
            {currentVersion && (
                <StyledTextContent
                    onMouseDown={(event: MouseEvent) => handleMouseDown(event)}
                    dragMode={draggable}
                    draggingMode={dragging}
                    editableText={editableText}
                    revealedText={revealedText}
                    viewable={currentVersion && currentVersion.viewable}
                    color={currentVersion && currentVersion.color}
                    style={{
                        transform: `rotateX(${rotationX}) rotateY(${rotationY}) rotateZ(${rotationZ}) skew(${skewX}, ${skewY})`,
                    }}
                >
                    {currentVersion
                    && currentVersion.link
                    && !editableText
                    ? (
                        <StyledTextContentLink
                            href={currentVersion.linkTo}
                            target="_blank"
                            viewable={currentVersion.viewable}
                            color={currentVersion.color}
                        >
                            <StyledEditableDiv
                                toggledEditable={editableText}
                                contentEditable={editable}
                                suppressContentEditableWarning={true}
                                onInput={(event: React.SyntheticEvent<HTMLDivElement>) => handleChange(event)}
                            >
                                {textValue}
                            </StyledEditableDiv>
                        </StyledTextContentLink>
                    ) : (
                        <StyledEditableDiv
                            toggledEditable={editableText}
                            contentEditable={editable}
                            suppressContentEditableWarning={true}
                            onInput={(event: React.SyntheticEvent<HTMLDivElement>) => handleChange(event)}
                        >
                            {textValue}
                        </StyledEditableDiv>
                    )}
                </StyledTextContent>
            )}

            {showEditor
            && currentVersion
            && !dragging
            && (
                <TextEditor
                    data={currentVersion}

                    editable={editable}
                    setEditable={setEditable}
                    draggable={draggable}
                    setDraggable={setDraggable}

                    positions={editorPositions}
                />
            )}
        </StyledTextItem>
    );
}


export default Textline;



// class TextVideo extends Component<
//     any, any
//     // ITextVideoProps, ITextVideoState
// > {
//     static contextType = Context;

//     private textVideo: any;

//     public state = {
//         textVersion: {},
//         content: '',
//         contentInput: '',
//         showEditor: false,
//         showMore: false,
//         selected: false,

//         xCoord: 0,
//         yCoord: 0,

//         textEditable: false,
//         textDraggable: false,
//         dragging: false,

//         pos1: 0,
//         pos2: 0,
//         pos3: 0,
//         pos4: 0,

//         editorXCoord: 0,
//         editorYCoord: -EDITOR_HEIGHT,

//         editorWidth: 744,
//     };

//     constructor(props: any) {
//         super(props);

//         this.textVideo = React.createRef();
//     }

//     public componentDidMount() {
//         document.addEventListener('mouseup', this.dragMouseUp);
//         document.addEventListener('mousemove', this.dragMouseMove);

//         const {
//             text
//         } = this.props;

//         const {
//             currentVersionId,
//             versions,
//         } = text;

//         const textVersion = getVersionById(currentVersionId, versions);

//         this.setState({
//             textVersion,
//             editorWidth: this.context.editorWidth,
//         },
//             () => {
//                 this.editorPosition();
//             }
//         );
//     }

//     public componentDidUpdate() {
//         const {
//             textEditable,
//             textDraggable,
//         } = this.state;

//         const {
//             toggledEditable,
//         } = this.context;

//         // set text edit and drag to false when not editing the image
//         if (!toggledEditable) {
//             if (textEditable) {
//                 this.toggleTextEditable();
//             }

//             if (textDraggable) {
//                 this.toggleTextDraggable();
//             }
//         }
//     }

//     public componentWillUnmount() {
//         document.removeEventListener('mouseup', this.dragMouseUp);
//         document.removeEventListener('mousemove', this.dragMouseMove);
//     }

//     public render() {
//         const {
//             showEditor,
//             showMore,
//             selected,

//             textEditable,
//             textDraggable,
//             dragging,

//             editorXCoord,
//             editorYCoord,
//         } = this.state;

//         const {
//             text,
//         } = this.props;

//         const {
//             currentVersionId,
//             versions,
//         } = text;

//         const currentVersion = getVersionById(currentVersionId, versions);
//         if (!currentVersion) {
//             return (<></>);
//         }

//         const {
//             color,
//             fontFamily,
//             bold,
//             italic,
//             lineHeight,
//             content,
//             link,
//             linkTo,
//             xCoordPercentage,
//             yCoordPercentage,
//             fontSizePercentage,
//             letterSpacingPercentage,
//             wordSpacingPercentage,
//             viewable,
//             alwaysShow,
//         }: any = currentVersion;

//         const {
//             theme,
//             toggledEditable,
//             contentMoreLimit,
//             videoBoxWidth,
//             videoBoxHeight,
//         } = this.context;

//         const xCoord = valueFromPercentage(xCoordPercentage, videoBoxWidth);
//         const yCoord = valueFromPercentage(yCoordPercentage, videoBoxHeight);

//         const fontSize = valueFromPercentage(fontSizePercentage, videoBoxHeight);
//         const letterSpacing = valueFromPercentage(letterSpacingPercentage, videoBoxWidth);
//         const wordSpacing = valueFromPercentage(wordSpacingPercentage, videoBoxWidth);

//         const editableDiv = (
//             <StyledEditableDiv
//                 toggledEditable={toggledEditable}
//                 contentEditable={textEditable}
//                 suppressContentEditableWarning={true}
//                 onInput={this.handleChange}
//             >
//                 {content}
//             </StyledEditableDiv>
//         );

//         const textContent = (
//             <StyledTextVideoTextContent
//                 theme={theme}
//                 selected={selected}
//                 toggledEditable={toggledEditable}
//                 editMode={textEditable}
//                 dragMode={textDraggable}
//                 draggingMode={dragging}
//                 viewable={viewable}
//                 color={color}

//                 onMouseDown={this.dragMouseDown}
//             >
//                 {link && !toggledEditable
//                     ? (
//                         <StyledTextVideoTextContentLink
//                             href={linkTo}
//                             target="_blank"
//                             viewable={viewable}
//                             color={color}
//                         >
//                             {editableDiv}
//                         </StyledTextVideoTextContentLink>
//                     ) : (
//                         <>{editableDiv}</>
//                     )
//                 }
//             </StyledTextVideoTextContent>
//         );


//         return (
//             <StyledTextVideo
//                 theme={theme}
//                 editMode={toggledEditable}
//                 dragMode={textDraggable}
//                 draggingMode={dragging}
//                 viewable={viewable}

//                 style={{
//                     top: yCoord + 'px',
//                     left: xCoord + 'px',
//                     color: toggledEditable ? color : 'transparent',
//                     fontFamily,
//                     fontSize: fontSize + 'px',
//                     fontWeight: bold ? 'bold' : 'normal',
//                     fontStyle: italic ? 'italic' : 'normal',
//                     letterSpacing: letterSpacing + 'px',
//                     lineHeight: lineHeight + '',
//                     wordSpacing: wordSpacing + 'px',
//                 }}

//                 onMouseEnter={this.handleMouseEnter}
//                 onMouseLeave={this.handleMouseEnter}

//                 onMouseUp={this.dragMouseUp}

//                 onKeyDown={this.handleKey}
//                 tabIndex="0"

//                 ref={this.textVideo}
//             >
//                 {textContent}

//                 {showMore && !toggledEditable && content.length > contentMoreLimit && (
//                     <ButtonMore
//                         content={content}
//                         toggleShow={this.toggleShowMore}
//                     />
//                 )}

//                 {showEditor && !dragging && (
//                     <TextVideoEditor
//                         toggleTextEditable={this.toggleTextEditable}
//                         textEditable={textEditable}

//                         toggleTextDraggable={this.toggleTextDraggable}
//                         textDraggable={textDraggable}

//                         toggleTextViewable={this.toggleTextViewable}
//                         textViewable={viewable}

//                         toggleTextAlwaysShow={this.toggleTextAlwaysShow}
//                         textAlwaysShow={alwaysShow}

//                         toggleEditor={this.toggleShowEditor}
//                         toggleSelected={this.toggleSelected}

//                         version={currentVersion}
//                         textId={text.id}

//                         xCoord={editorXCoord}
//                         yCoord={editorYCoord}

//                         fontSize={fontSize}
//                         letterSpacing={letterSpacing}
//                         wordSpacing={wordSpacing}
//                     />
//                 )}
//             </StyledTextVideo>
//         );
//     }

//     private handleChange = (event: any) => {
//         const value = event.target.innerText;

//         this.setState({
//             contentInput: value,
//         });
//     }

//     private handleKey = (event: any) => {
//         this.handleShortcuts(event);
//         this.handleArrows(event);
//     }

//     private handleShortcuts = (event: any) => {
//         const {
//             textEditable,
//         } = this.state;

//         const {
//             text,
//         } = this.props;

//         const {
//             duplicateTextVideo,
//             deleteTextVideo,
//         } = this.context;

//         const { key, altKey } = event;

//         if (key === '†' && altKey) {
//             this.toggleTextEditable();
//         }

//         if (textEditable) {
//             return;
//         }

//         switch(key) {
//             case 't':
//                 this.toggleTextEditable();
//                 break;
//             case 'g':
//                 this.toggleTextDraggable();
//                 break;
//             case 'v':
//                 this.toggleTextViewable();
//                 break;
//             case 'd':
//                 duplicateTextVideo(text.id);
//                 break;
//             case 'x':
//                 deleteTextVideo(text.id);
//                 break;
//         }
//     }

//     private handleArrows = (event: any) => {
//         const {
//             textDraggable,
//         } = this.state;

//         if (!textDraggable) {
//             return;
//         }

//         event.preventDefault();
//         this.moveWithArrows(event);
//         if (event.shiftKey) {
//             this.moveWithArrows(event, 10);
//         }
//     }

//     private moveWithArrows(event: any, step: number = 1) {
//         const { key } = event;

//         const { xCoord, yCoord } = this.state;

//         this.editorPosition();

//         switch(key) {
//             case 'ArrowLeft':
//                 this.setState({
//                     xCoord: xCoord - step
//                 },
//                     this.saveCoords
//                 );
//                 break;
//             case 'ArrowRight':
//                 this.setState({
//                     xCoord: xCoord + step
//                 },
//                     this.saveCoords
//                 );
//                 break;
//             case 'ArrowUp':
//                 this.setState({
//                     yCoord: yCoord - step
//                 },
//                     this.saveCoords
//                 );
//                 break;
//             case 'ArrowDown':
//                 this.setState({
//                     yCoord: yCoord + step
//                 },
//                     this.saveCoords
//                 );
//                 break;
//         }
//     }

//     private saveCoords = () => {
//         const {
//             updateTextVideoBatch,
//         } = this.context;

//         const {
//             text
//         } = this.props;

//         const { xCoordPercentage, yCoordPercentage } = this.coordsToPercentage();

//         const elements = [
//             {
//                 type: 'xCoordPercentage',
//                 value: xCoordPercentage,
//             },
//             {
//                 type: 'yCoordPercentage',
//                 value: yCoordPercentage,
//             }
//         ]
//         updateTextVideoBatch(text.id, elements);
//     }

//     private coordsToPercentage = () => {
//         const {
//             xCoord,
//             yCoord,
//         } = this.state;

//         const {
//             videoBoxWidth,
//             videoBoxHeight,
//         } = this.context;

//         const xCoordPercentage = percentageFromValue(xCoord, videoBoxWidth);
//         const yCoordPercentage = percentageFromValue(yCoord, videoBoxHeight);

//         return {
//             xCoordPercentage,
//             yCoordPercentage,
//         };
//     }

//     private dragMouseDown = (event: any) => {
//         const { textDraggable } = this.state;
//         if (!textDraggable) {
//             return;
//         }

//         event.preventDefault();

//         const pageX = event.pageX;
//         const pageY = event.pageY;

//         this.setState({
//             dragging: true,
//             pos3: pageX,
//             pos4: pageY,
//         });
//     }

//     private dragMouseMove = (event: any) => {
//         const { dragging } = this.state;
//         if (!dragging) {
//             return;
//         }

//         event.preventDefault();

//         const {
//             pos3,
//             pos4,
//         } = this.state;

//         const { offsetLeft, offsetTop } = this.textVideo.current;

//         const pageX = event.pageX;
//         const pageY = event.pageY;

//         // calculate the new cursor position:
//         const diffX = pageX - pos3;
//         const diffY = pageY - pos4;

//         this.setState({
//             pos1: pos3,
//             pos2: pos4,
//             pos3: pageX,
//             pos4: pageY,
//             xCoord: offsetLeft + diffX,
//             yCoord: offsetTop + diffY,
//         },
//             () => {
//                 this.editorPosition();
//                 this.saveCoords();
//             }
//         );
//     }

//     private dragMouseUp = () => {
//         this.setState({
//             dragging: false,
//         });
//     }

//     private toggleShowEditor = () => {
//         this.setState((prevState: any) => ({
//             showEditor: !prevState.showEditor,
//         }));
//     }

//     private handleMouseEnter = () => {
//         const { toggledEditable } = this.context;

//         if (toggledEditable) {
//             this.setState((prevState: any) => ({
//                 showEditor: !prevState.showEditor,
//                 selected: !prevState.selected,
//             }));
//         }

//         this.toggleShowMore();
//     }

//     private editorPosition() {
//         const {
//             videoBoxWidth,
//             editorWidth,
//         } = this.context;

//         // console.log(editorWidth);

//         const {
//             offsetLeft,
//             offsetTop,
//             offsetHeight,
//         } = this.textVideo.current;

//         // Do not let editor to go to the right.
//         let editorXCoord = offsetLeft + editorWidth > videoBoxWidth
//             ? -1 * (offsetLeft + editorWidth - videoBoxWidth)
//             : -17;

//         // Do not let editor to go to the left.
//         if (offsetLeft < 17) {
//             editorXCoord = offsetLeft * -1;
//         }

//         if (editorWidth === 0) {
//             editorXCoord = - offsetLeft;
//         }

//         // Do not let editor to go to over the top.
//         let editorYCoord = offsetTop < 34
//             ?  offsetHeight
//             : -34;

//         this.setState({
//             editorXCoord,
//             editorYCoord,
//         });
//     }

//     private saveContentInput = () => {
//         const {
//             contentInput,
//         } = this.state;

//         const {
//             updateTextVideoField,
//         } = this.context;

//         const {
//             text
//         } = this.props;

//         updateTextVideoField(text.id, 'content', contentInput);

//         this.setState({
//             content: contentInput,
//         });
//     }

//     private toggleTextEditable = () => {
//         const {
//             textEditable,
//             contentInput,
//         } = this.state;

//         if (textEditable) {
//             if (contentInput === '') {
//                 const {
//                     text,
//                 } = this.props;

//                 const {
//                     currentVersionId,
//                     versions,
//                 } = text;

//                 const currentVersion = getVersionById(currentVersionId, versions);

//                 this.setState({
//                     contentInput: currentVersion.content,
//                 },
//                     this.saveContentInput
//                 );
//             } else {
//                 this.saveContentInput();
//             }
//         }

//         this.setState((prevState: any) => ({
//             textEditable: !prevState.textEditable,
//         }));

//         const { textDraggable } = this.state;

//         if (textDraggable) {
//             this.setState({
//                 textDraggable: false,
//             });
//         }
//     }

//     private toggleTextDraggable = () => {
//         this.setState((prevState: any) => ({
//             textDraggable: !prevState.textDraggable,
//         }));

//         const { textEditable } = this.state;

//         if (textEditable) {
//             this.setState({
//                 textEditable: false,
//             });
//         }
//     }

//     private toggleTextViewable = () => {
//         const {
//             updateTextVideoField,
//         } = this.context;

//         const {
//             text,
//         } = this.props;

//         const {
//             currentVersionId,
//             versions,
//         } = text;

//         const currentVersion = getVersionById(currentVersionId, versions);

//         if (currentVersion.viewable) {
//             updateTextVideoField(text.id, 'viewable', false);
//         } else {
//             updateTextVideoField(text.id, 'viewable', true);
//         }
//     }

//     private toggleTextAlwaysShow = () => {
//         const {
//             updateTextVideoField,
//         } = this.context;

//         const {
//             text,
//         } = this.props;

//         const {
//             currentVersionId,
//             versions,
//         } = text;

//         const currentVersion = getVersionById(currentVersionId, versions);

//         if (currentVersion.alwaysShow) {
//             updateTextVideoField(text.id, 'alwaysShow', false);
//         } else {
//             updateTextVideoField(text.id, 'alwaysShow', true);
//         }
//     }

//     private toggleSelected = () => {
//         this.setState((prevState: any) => ({
//             selected: !prevState.selected,
//         }));
//     }

//     private toggleShowMore = () => {
//         this.setState((prevState: any) => ({
//             showMore: !prevState.showMore,
//         }));
//     }
// }


// export default TextVideo;
