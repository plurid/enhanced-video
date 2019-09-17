import gql from 'graphql-tag';



export const getTextSelectVideo = gql`
    query TextSelectVideo($imageSha: String!) {
        textSelectVideo(imageSha: $imageSha) {
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
                    id
                    currentVersionId
                    versions {
                        id
                        createdAt
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
`


export const extractTextSelectVideo = gql`
    query ExtractTextSelectVideo($imageSrc: String!, $imageSha: String!) {
        extractTextSelectVideo(imageSrc: $imageSrc, imageSha: $imageSha) {
            status
            errors {
                path
                message
            }
        }
    }
`;
