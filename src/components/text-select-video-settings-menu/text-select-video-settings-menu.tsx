import { Component, Prop } from '@stencil/core';

import aboutIcon from '../../assets/about-icon.svg';
import addTextIcon from '../../assets/add-text-icon.svg';



@Component({
    tag: 'text-select-video-settings-menu',
    styleUrl: 'text-select-video-settings-menu.scss',
    shadow: true
})
export class TextSelectVideoSettingsMenu {
    @Prop() toggleMenu: () => void;
    @Prop() editable: boolean;
    @Prop() toggleEditable: () => void;

    @Prop() addText: () => void;

    add = () => {
        this.toggleMenu()
        this.addText()
    }

    about = () => {
        const aboutURL = "https://github.com/plurid/text-select-image-html"
        window.open(aboutURL, '_blank');
    }

    render() {
        return (
            <div class="text-select-video-settings-menu">
                <ul>
                    <li>
                        <text-select-video-button-checkmark
                            toggle={this.toggleEditable}
                            text='Edit'
                            checked={this.editable}
                        />
                    </li>
                    <li>
                        <text-select-video-button-item
                            atClick={this.add}
                            icon={addTextIcon}
                            text='Add text'
                        />
                    </li>
                    <hr class="text-select-video-hr"/>
                    <li>
                        <text-select-video-button-item
                            atClick={this.about}
                            icon={aboutIcon}
                            text='About TSI'
                        />
                    </li>
                </ul>
            </div>
        );
    }
}
