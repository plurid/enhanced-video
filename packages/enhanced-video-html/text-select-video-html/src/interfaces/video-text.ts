export interface ITextVideo {
    id: string;
    begin: number;
    end: number;
    xPercentage: number;
    yPercentage: number;
    xCoord: number;
    yCoord: number;
    perspective: string;
    rotation: string;
    skew: string;
    color: string;
    fontFamily: string;
    fontSize: number;
    bold: boolean;
    italic: boolean;
    letterSpacing: number;
    lineHeight: string | number;
    wordSpacing: number;
    content: string;
}


export interface ITextSelectVideoData {
    id: string;
    videoText: ITextVideo[];
}
