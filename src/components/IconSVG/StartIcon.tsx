import { IIconProps } from '../../interfaces/IIconPros';

export const StartIcon = ({ size=24, color='#8b949e' }: IIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.8967 1.55738C12.7282 1.21607 12.3806 1 12 1C11.6194 1 11.2718 1.21607 11.1033 1.55738L8.24574 7.34647L1.85537 8.28051C1.47881 8.33555 1.16613 8.59956 1.04875 8.96157C0.931375 9.32358 1.02965 9.72083 1.30227 9.98636L5.92548 14.4894L4.83439 20.851C4.77004 21.2261 4.92429 21.6053 5.23226 21.8291C5.54024 22.0528 5.94853 22.0823 6.28545 21.9051L12 18.8998L17.7145 21.9051C18.0515 22.0823 18.4598 22.0528 18.7677 21.8291C19.0757 21.6053 19.23 21.2261 19.1656 20.851L18.0745 14.4894L22.6977 9.98636C22.9703 9.72083 23.0686 9.32358 22.9512 8.96157C22.8339 8.59956 22.5212 8.33555 22.1446 8.28051L15.7543 7.34647L12.8967 1.55738ZM9.80671 8.70262L12 4.25925L14.1933 8.70262C14.3388 8.99747 14.62 9.20193 14.9454 9.24949L19.8516 9.9666L16.3023 13.4236C16.0664 13.6534 15.9587 13.9845 16.0144 14.309L16.8518 19.1917L12.4655 16.8849C12.1741 16.7317 11.8259 16.7317 11.5345 16.8849L7.14818 19.1917L7.98561 14.309C8.04127 13.9845 7.93361 13.6534 7.69773 13.4236L4.14841 9.9666L9.05463 9.24949C9.37998 9.20193 9.66117 8.99747 9.80671 8.70262Z" fill={color} />
        </svg>
    )
}
