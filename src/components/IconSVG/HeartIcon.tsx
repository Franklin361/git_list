import { IIconProps } from '../../interfaces/IIconPros';

interface IPropsHeartIcon extends IIconProps{
    borderColor?:string
}

export const HeartIcon = ({ size = 24, color="rgba(204, 104, 161, 0)", borderColor="#CC68A0" }: IPropsHeartIcon) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.0554 3.41708C19.7228 3.69364 20.3292 4.099 20.84 4.60999C21.351 5.12075 21.7563 5.72718 22.0329 6.39464C22.3095 7.0621 22.4518 7.77751 22.4518 8.49999C22.4518 9.22248 22.3095 9.93789 22.0329 10.6053C21.7563 11.2728 21.351 11.8792 20.84 12.39L19.78 13.45L12 21.23L4.22 13.45L3.16 12.39C2.1283 11.3583 1.54871 9.95903 1.54871 8.49999C1.54871 7.04096 2.1283 5.64169 3.16 4.60999C4.19169 3.5783 5.59096 2.9987 7.05 2.9987C8.50903 2.9987 9.9083 3.5783 10.94 4.60999L12 5.66999L13.06 4.60999C13.5708 4.099 14.1772 3.69364 14.8446 3.41708C15.5121 3.14052 16.2275 2.99817 16.95 2.99817C17.6725 2.99817 18.3879 3.14052 19.0554 3.41708Z" fill={color} stroke={borderColor} strokeWidth="2px"/>
        </svg>
    )
}