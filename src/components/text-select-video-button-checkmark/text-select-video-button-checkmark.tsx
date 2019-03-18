import { Component, Prop } from '@stencil/core';



@Component({
    tag: 'text-select-video-button-checkmark',
    styleUrl: 'text-select-video-button-checkmark.css',
    shadow: true
})
export class TextSelectVideoButtonCheckmark {
    @Prop() toggle: (event: MouseEvent) => void;
    @Prop() text: string;
    @Prop() checked: boolean;

    render() {
        return (
            <div class="enhanced-video-button-checkmark" onClick={this.toggle}>
                <span>
                    {this.text}
                </span>
                <span class={
                    this.checked
                        ? 'enhanced-video-button-checkbox enhanced-video-button-checkbox-fill'
                        : 'enhanced-video-button-checkbox'
                    }
                >
                </span>
            </div>
        );
    }
}
