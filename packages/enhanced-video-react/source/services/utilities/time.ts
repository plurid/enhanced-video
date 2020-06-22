export const formatTimeString = (
    time: number,
    current?: boolean,
    videoDurationHours?: any,
) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time - 3600 * hours) / 60);
    const seconds = Math.floor(time - (3600 * hours + 60 * minutes));

    const hoursString = hours + '';
    let minutesString = '';
    let secondsString = '';

    if (minutes < 10) {
        minutesString = '0' + minutes;
    } else {
        minutesString = minutes + '';
    }

    if (seconds < 10) {
        secondsString = '0' + seconds;
    } else {
        secondsString = seconds + '';
    }

    if (hours === 0) {
        if (current) {
            if (videoDurationHours > 0 && videoDurationHours < 10) {
                const timestamp = {
                    hours,
                    minutes,
                    seconds,
                    format: '0:' + minutesString + ':' + secondsString,
                }
                return timestamp;
            }

            if (videoDurationHours > 9) {
                const timestamp = {
                    hours,
                    minutes,
                    seconds,
                    format: '00:' + minutesString + ':' + secondsString,
                }
                return timestamp;
            }
        }

        const timestamp = {
            hours,
            minutes,
            seconds,
            format: minutesString + ':' + secondsString,
        }
        return timestamp;
    }

    if (minutes === 0 && hours === 0) {
        const timestamp = {
            hours,
            minutes,
            seconds,
            format: secondsString,
        }
        return timestamp;
    }

    const timestamp = {
        hours,
        minutes,
        seconds,
        format: hoursString + ':' + minutesString + ':' + secondsString,
    }
    return timestamp;
}
