import React, { Component } from 'react';

import {
    StyledTimescrollView,
    StyledTimescrollViewContainer,
} from './styled';

import TimescrollViewLine from '../TimescrollViewLine';

import Context from '../../context';



class TimescrollView extends Component<
    any, any
> {
    static contextType = Context;

    public render() {
        const {
            videoTime,
            videoDuration,
        } = this.context;

        const hours = Math.floor(videoDuration / 3600);
        const minutes = Math.floor((videoDuration - 3600 * hours) / 60);
        // const seconds = Math.floor(videoDuration - (3600 * hours + 60 * minutes));

        const totalMinutes = hours * 60 + minutes;
        const total = Math.ceil(totalMinutes / 10);

        const lines = [];
        for (let i = 0; i < total; i++) {
            const line = (
                <TimescrollViewLine
                    startTime={10 * i}
                    endTime={10 * (i + 1)}
                    videoTime={videoTime}
                />
            );
            lines.push(line);
        }

        return (
            <StyledTimescrollView>
                <StyledTimescrollViewContainer>
                    <ul>
                        {
                            lines.map(line => {
                                return (
                                    <li
                                        key={Math.random() * 100000}
                                    >
                                        {line}
                                    </li>
                                );
                            })
                        }
                    </ul>
                </StyledTimescrollViewContainer>
            </StyledTimescrollView>
        );
    }
}

export default TimescrollView;
