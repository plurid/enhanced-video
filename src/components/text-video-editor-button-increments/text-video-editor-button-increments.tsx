import { Component, Prop, State } from '@stencil/core';



const STEP = 1;


@Component({
    tag: 'text-video-editor-button-increments',
    styleUrl: 'text-video-editor-button-increments.scss',
    shadow: true
})
export class TextVideoEditor {
    @Prop() type: string;
    @Prop() changeValue: (type: string, value: number) => void;
    @Prop() value: number;
    @Prop() icon: string;
    @Prop() unit: string;
    @Prop() step: number;

    @State() stepValue: number;

    componentWillLoad() {
        this.stepValue = this.step || STEP;
    }

    inputChange = (e: any) => {
        const value = e.target.value;
        this.changeValue(this.type, value);
    }

    round = (val: number) => {
        return Math.round(val * 100) / 100
    }

    render() {
        return (
            <span class="text-video-editor-button">
                <span
                    class="text-video-editor-button-icon"
                    innerHTML={this.icon}
                />
                <span class="text-video-editor-button-increments">
                    <span
                        class="text-video-editor-button-increment-button text-video-editor-button-increment-up"
                        onClick={this.changeValue.bind(this, this.type, this.round(this.value + this.stepValue))}
                    >
                        &#x25b2; { /* up arrow */ }
                    </span>
                    <span
                        class="text-video-editor-button-increment-button text-video-editor-button-increment-down"
                        onClick={this.changeValue.bind(this, this.type, this.round(this.value - this.stepValue))}
                    >
                        &#x25bc; { /* down arrow */ }
                    </span>
                </span>

                <input
                    type="number"
                    value={this.value}
                    step={this.stepValue}
                    onInput={this.inputChange}
                />

                <span class="text-video-editor-button-increments-unit">
                    {this.unit || 'px'}
                </span>
            </span>

        );
    }
}
