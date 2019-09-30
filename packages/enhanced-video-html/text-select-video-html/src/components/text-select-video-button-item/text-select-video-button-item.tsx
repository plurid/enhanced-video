import { Component, Prop } from '@stencil/core';



@Component({
    tag: 'text-select-video-button-item',
    styleUrl: 'text-select-video-button-item.scss',
    shadow: true
})
export class TextSelectVideoButtonItem {
    @Prop() atClick: (event: MouseEvent) => void;
    @Prop() icon: string;
    @Prop() text: string;

    render() {
        return (
            <div class="text-select-video-button-item" onClick={this.atClick}>
                <span
                    class="text-select-video-button-icon"
                    innerHTML={this.icon}
                />
                <span>
                    {this.text}
                </span>
            </div>
        );
    }
}
