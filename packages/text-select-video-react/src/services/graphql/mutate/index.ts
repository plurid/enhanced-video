import gql from 'graphql-tag';



export const updateTextSelectVideo = gql`
    mutation UpdateTextSelectVideo ($input: UpdateTextSelectVideoInput!) {
        updateTextSelectVideo(input: $input) {
            status
            errors {
                path
                message
            }
            textSelectVideo {
                user {
                    username
                }
                imagePath
                imageSource
                imageHeight
                imageWidth
                imageText {
                    currentVersionId
                    versions {
                        id
                        user {
                            username
                        }
                        xCoordPercentage
                        yCoordPercentage
                        perspective
                        rotation
                        skew
                        color
                        fontFamily
                        fontSizePercentage
                        bold
                        italic
                        letterSpacingPercentage
                        lineHeight
                        wordSpacingPercentage
                        content
                        link
                        linkTo
                        viewable
                    }
                }
            }
        }
    }
`;
