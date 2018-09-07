<link rel="stylesheet" type="text/css" href="style.css">



# Future


When the user sets the video to be processed, the user can specify from which timestamp to which timestamp to process, and select one or more portions of the screen that contain the actual text that should be selectable.

    {
        startTime: 320,
        endTime: 409,
        selectZones: [
            {
                startX: 230,
                startY: 150,
                endX: 450,
                endY: 300
            },
            {
                startX: 750,
                startY: 650,
                endX: 950,
                endY: 900
            }
        ]
    }
