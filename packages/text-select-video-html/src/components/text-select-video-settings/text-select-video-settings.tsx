import { Component, Prop } from '@stencil/core';

import settingsIcon from '../../assets/settings-icon.svg';



@Component({
    tag: 'text-select-video-settings',
    styleUrl: 'text-select-video-settings.scss',
    shadow: true
})
export class TextSelectVideoSettings {
    @Prop() toggledSettings: boolean;
    @Prop() toggleSettings: () => void;

    @Prop() editable: boolean;
    @Prop() toggleEditable: () => void;

    @Prop() addText: () => void;

    render() {
        return (
            <div class="text-select-video-settings-container">
                <div
                    class="text-select-video-settings-button"
                    innerHTML={settingsIcon}
                    onClick={this.toggleSettings}
                />
                {this.toggledSettings && (
                    <text-select-video-settings-menu
                        toggleMenu={this.toggleSettings}
                        editable={this.editable}
                        toggleEditable={this.toggleEditable}
                        addText={this.addText}
                    />
                )}
            </div>
        );
    }
}
