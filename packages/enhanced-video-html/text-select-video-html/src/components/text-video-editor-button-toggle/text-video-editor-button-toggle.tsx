import { Component, Prop } from '@stencil/core';



@Component({
    tag: 'text-video-editor-button-toggle',
    styleUrl: 'text-video-editor-button-toggle.scss',
    shadow: true
})
export class TextVideoEditor {
    @Prop() toggled: boolean;
    @Prop() toggle: () => void;
    @Prop() icon: string;

    render() {
        return (
            <span
                class={`
                    text-video-editor-button
                    ${this.toggled ? 'text-video-editor-button-icon-active': ''}
                `}
                onClick={this.toggle}
            >
                <span
                    class="text-video-editor-button-icon"
                    innerHTML={this.icon}
                />
            </span>
        );
    }
}
