/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  ITextSelectVideoData,
  ITextVideo,
} from './interfaces/video-text';


export namespace Components {

  interface SelectVideo {
    'deleteText': (id: string) => void;
    'duplicateText': (id: string) => void;
    'editable': boolean;
    'selectText': ITextSelectVideoData;
    'updateText': (id: string, text: ITextVideo) => void;
    'videoHeight': number;
    'videoWidth': number;
  }
  interface SelectVideoAttributes extends StencilHTMLAttributes {
    'deleteText'?: (id: string) => void;
    'duplicateText'?: (id: string) => void;
    'editable'?: boolean;
    'selectText'?: ITextSelectVideoData;
    'updateText'?: (id: string, text: ITextVideo) => void;
    'videoHeight'?: number;
    'videoWidth'?: number;
  }

  interface TextSelectVideoButtonCheckmark {
    'checked': boolean;
    'text': string;
    'toggle': (event: MouseEvent) => void;
  }
  interface TextSelectVideoButtonCheckmarkAttributes extends StencilHTMLAttributes {
    'checked'?: boolean;
    'text'?: string;
    'toggle'?: (event: MouseEvent) => void;
  }

  interface TextSelectVideoButtonItem {
    'atClick': (event: MouseEvent) => void;
    'icon': string;
    'text': string;
  }
  interface TextSelectVideoButtonItemAttributes extends StencilHTMLAttributes {
    'atClick'?: (event: MouseEvent) => void;
    'icon'?: string;
    'text'?: string;
  }

  interface TextSelectVideoSettingsMenu {
    'addText': () => void;
    'editable': boolean;
    'toggleEditable': () => void;
    'toggleMenu': () => void;
  }
  interface TextSelectVideoSettingsMenuAttributes extends StencilHTMLAttributes {
    'addText'?: () => void;
    'editable'?: boolean;
    'toggleEditable'?: () => void;
    'toggleMenu'?: () => void;
  }

  interface TextSelectVideoSettings {
    'addText': () => void;
    'editable': boolean;
    'toggleEditable': () => void;
    'toggleSettings': () => void;
    'toggledSettings': boolean;
  }
  interface TextSelectVideoSettingsAttributes extends StencilHTMLAttributes {
    'addText'?: () => void;
    'editable'?: boolean;
    'toggleEditable'?: () => void;
    'toggleSettings'?: () => void;
    'toggledSettings'?: boolean;
  }

  interface TextSelectVideo {
    'classes': string;
    'controls': boolean;
    'height': string;
    'src': string;
    'styling': string;
    'textData': string;
    'type': string;
    'width': string;
  }
  interface TextSelectVideoAttributes extends StencilHTMLAttributes {
    'classes'?: string;
    'controls'?: boolean;
    'height'?: string;
    'src'?: string;
    'styling'?: string;
    'textData'?: string;
    'type'?: string;
    'width'?: string;
  }

  interface TextVideoEditorButtonDropdown {
    'alterStyle': string;
    'changeSelected': (type: string, value: string) => void;
    'selectables': string[];
    'selected': string;
    'toggleEditor': () => void;
    'type': string;
  }
  interface TextVideoEditorButtonDropdownAttributes extends StencilHTMLAttributes {
    'alterStyle'?: string;
    'changeSelected'?: (type: string, value: string) => void;
    'selectables'?: string[];
    'selected'?: string;
    'toggleEditor'?: () => void;
    'type'?: string;
  }

  interface TextVideoEditorButtonIncrements {
    'changeValue': (type: string, value: number) => void;
    'icon': string;
    'step': number;
    'type': string;
    'unit': string;
    'value': number;
  }
  interface TextVideoEditorButtonIncrementsAttributes extends StencilHTMLAttributes {
    'changeValue'?: (type: string, value: number) => void;
    'icon'?: string;
    'step'?: number;
    'type'?: string;
    'unit'?: string;
    'value'?: number;
  }

  interface TextVideoEditorButtonToggle {
    'icon': string;
    'toggle': () => void;
    'toggled': boolean;
  }
  interface TextVideoEditorButtonToggleAttributes extends StencilHTMLAttributes {
    'icon'?: string;
    'toggle'?: () => void;
    'toggled'?: boolean;
  }

  interface TextVideoEditor {
    'changeValue': (type: string, value: number | string) => void;
    'colorValue': string;
    'draggable': boolean;
    'duplicateText': (id: string) => void;
    'fontFamilyValue': string;
    'fontSizeValue': number;
    'letterSpacingValue': number;
    'removeText': (id: string) => void;
    'selectableFonts': string[];
    'textBold': boolean;
    'textEditable': boolean;
    'textId': string;
    'textItalic': boolean;
    'toggleDraggable': () => void;
    'toggleEditor': () => void;
    'toggleElement': (element: string) => void;
    'toggleTextEditable': () => void;
    'wordSpacingValue': number;
  }
  interface TextVideoEditorAttributes extends StencilHTMLAttributes {
    'changeValue'?: (type: string, value: number | string) => void;
    'colorValue'?: string;
    'draggable'?: boolean;
    'duplicateText'?: (id: string) => void;
    'fontFamilyValue'?: string;
    'fontSizeValue'?: number;
    'letterSpacingValue'?: number;
    'removeText'?: (id: string) => void;
    'selectableFonts'?: string[];
    'textBold'?: boolean;
    'textEditable'?: boolean;
    'textId'?: string;
    'textItalic'?: boolean;
    'toggleDraggable'?: () => void;
    'toggleEditor'?: () => void;
    'toggleElement'?: (element: string) => void;
    'toggleTextEditable'?: () => void;
    'wordSpacingValue'?: number;
  }

  interface TextVideo {
    'duplicateText': (id: string) => void;
    'editable': boolean;
    'removeText': (id: string) => void;
    'textId': string;
    'textVideo': ITextVideo;
    'updateText': (id: string, text: ITextVideo) => void;
    'videoHeight': number;
    'videoText': ITextVideo[];
    'videoWidth': number;
  }
  interface TextVideoAttributes extends StencilHTMLAttributes {
    'duplicateText'?: (id: string) => void;
    'editable'?: boolean;
    'removeText'?: (id: string) => void;
    'textId'?: string;
    'textVideo'?: ITextVideo;
    'updateText'?: (id: string, text: ITextVideo) => void;
    'videoHeight'?: number;
    'videoText'?: ITextVideo[];
    'videoWidth'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'SelectVideo': Components.SelectVideo;
    'TextSelectVideoButtonCheckmark': Components.TextSelectVideoButtonCheckmark;
    'TextSelectVideoButtonItem': Components.TextSelectVideoButtonItem;
    'TextSelectVideoSettingsMenu': Components.TextSelectVideoSettingsMenu;
    'TextSelectVideoSettings': Components.TextSelectVideoSettings;
    'TextSelectVideo': Components.TextSelectVideo;
    'TextVideoEditorButtonDropdown': Components.TextVideoEditorButtonDropdown;
    'TextVideoEditorButtonIncrements': Components.TextVideoEditorButtonIncrements;
    'TextVideoEditorButtonToggle': Components.TextVideoEditorButtonToggle;
    'TextVideoEditor': Components.TextVideoEditor;
    'TextVideo': Components.TextVideo;
  }

  interface StencilIntrinsicElements {
    'select-video': Components.SelectVideoAttributes;
    'text-select-video-button-checkmark': Components.TextSelectVideoButtonCheckmarkAttributes;
    'text-select-video-button-item': Components.TextSelectVideoButtonItemAttributes;
    'text-select-video-settings-menu': Components.TextSelectVideoSettingsMenuAttributes;
    'text-select-video-settings': Components.TextSelectVideoSettingsAttributes;
    'text-select-video': Components.TextSelectVideoAttributes;
    'text-video-editor-button-dropdown': Components.TextVideoEditorButtonDropdownAttributes;
    'text-video-editor-button-increments': Components.TextVideoEditorButtonIncrementsAttributes;
    'text-video-editor-button-toggle': Components.TextVideoEditorButtonToggleAttributes;
    'text-video-editor': Components.TextVideoEditorAttributes;
    'text-video': Components.TextVideoAttributes;
  }


  interface HTMLSelectVideoElement extends Components.SelectVideo, HTMLStencilElement {}
  var HTMLSelectVideoElement: {
    prototype: HTMLSelectVideoElement;
    new (): HTMLSelectVideoElement;
  };

  interface HTMLTextSelectVideoButtonCheckmarkElement extends Components.TextSelectVideoButtonCheckmark, HTMLStencilElement {}
  var HTMLTextSelectVideoButtonCheckmarkElement: {
    prototype: HTMLTextSelectVideoButtonCheckmarkElement;
    new (): HTMLTextSelectVideoButtonCheckmarkElement;
  };

  interface HTMLTextSelectVideoButtonItemElement extends Components.TextSelectVideoButtonItem, HTMLStencilElement {}
  var HTMLTextSelectVideoButtonItemElement: {
    prototype: HTMLTextSelectVideoButtonItemElement;
    new (): HTMLTextSelectVideoButtonItemElement;
  };

  interface HTMLTextSelectVideoSettingsMenuElement extends Components.TextSelectVideoSettingsMenu, HTMLStencilElement {}
  var HTMLTextSelectVideoSettingsMenuElement: {
    prototype: HTMLTextSelectVideoSettingsMenuElement;
    new (): HTMLTextSelectVideoSettingsMenuElement;
  };

  interface HTMLTextSelectVideoSettingsElement extends Components.TextSelectVideoSettings, HTMLStencilElement {}
  var HTMLTextSelectVideoSettingsElement: {
    prototype: HTMLTextSelectVideoSettingsElement;
    new (): HTMLTextSelectVideoSettingsElement;
  };

  interface HTMLTextSelectVideoElement extends Components.TextSelectVideo, HTMLStencilElement {}
  var HTMLTextSelectVideoElement: {
    prototype: HTMLTextSelectVideoElement;
    new (): HTMLTextSelectVideoElement;
  };

  interface HTMLTextVideoEditorButtonDropdownElement extends Components.TextVideoEditorButtonDropdown, HTMLStencilElement {}
  var HTMLTextVideoEditorButtonDropdownElement: {
    prototype: HTMLTextVideoEditorButtonDropdownElement;
    new (): HTMLTextVideoEditorButtonDropdownElement;
  };

  interface HTMLTextVideoEditorButtonIncrementsElement extends Components.TextVideoEditorButtonIncrements, HTMLStencilElement {}
  var HTMLTextVideoEditorButtonIncrementsElement: {
    prototype: HTMLTextVideoEditorButtonIncrementsElement;
    new (): HTMLTextVideoEditorButtonIncrementsElement;
  };

  interface HTMLTextVideoEditorButtonToggleElement extends Components.TextVideoEditorButtonToggle, HTMLStencilElement {}
  var HTMLTextVideoEditorButtonToggleElement: {
    prototype: HTMLTextVideoEditorButtonToggleElement;
    new (): HTMLTextVideoEditorButtonToggleElement;
  };

  interface HTMLTextVideoEditorElement extends Components.TextVideoEditor, HTMLStencilElement {}
  var HTMLTextVideoEditorElement: {
    prototype: HTMLTextVideoEditorElement;
    new (): HTMLTextVideoEditorElement;
  };

  interface HTMLTextVideoElement extends Components.TextVideo, HTMLStencilElement {}
  var HTMLTextVideoElement: {
    prototype: HTMLTextVideoElement;
    new (): HTMLTextVideoElement;
  };

  interface HTMLElementTagNameMap {
    'select-video': HTMLSelectVideoElement
    'text-select-video-button-checkmark': HTMLTextSelectVideoButtonCheckmarkElement
    'text-select-video-button-item': HTMLTextSelectVideoButtonItemElement
    'text-select-video-settings-menu': HTMLTextSelectVideoSettingsMenuElement
    'text-select-video-settings': HTMLTextSelectVideoSettingsElement
    'text-select-video': HTMLTextSelectVideoElement
    'text-video-editor-button-dropdown': HTMLTextVideoEditorButtonDropdownElement
    'text-video-editor-button-increments': HTMLTextVideoEditorButtonIncrementsElement
    'text-video-editor-button-toggle': HTMLTextVideoEditorButtonToggleElement
    'text-video-editor': HTMLTextVideoEditorElement
    'text-video': HTMLTextVideoElement
  }

  interface ElementTagNameMap {
    'select-video': HTMLSelectVideoElement;
    'text-select-video-button-checkmark': HTMLTextSelectVideoButtonCheckmarkElement;
    'text-select-video-button-item': HTMLTextSelectVideoButtonItemElement;
    'text-select-video-settings-menu': HTMLTextSelectVideoSettingsMenuElement;
    'text-select-video-settings': HTMLTextSelectVideoSettingsElement;
    'text-select-video': HTMLTextSelectVideoElement;
    'text-video-editor-button-dropdown': HTMLTextVideoEditorButtonDropdownElement;
    'text-video-editor-button-increments': HTMLTextVideoEditorButtonIncrementsElement;
    'text-video-editor-button-toggle': HTMLTextVideoEditorButtonToggleElement;
    'text-video-editor': HTMLTextVideoEditorElement;
    'text-video': HTMLTextVideoElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
