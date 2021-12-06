import { HeartIcon } from "./HeartIcon"
import { LinkIcon } from './LinkIcon';
import { MapIcon } from './MapIcon';
import { StartIcon } from './StartIcon';
import { TwitterIcon } from './TwitterIcon';
import { UsersIcon } from './UsersIcon';
import { IIconProps } from '../../interfaces/IIconPros';
import { DropDownIcon } from './DropDownIcon';
import { GitIcon } from "./GitIcon";
import { CloseIcon } from './CloseIcon';
import { SearchIcon } from './SearchIcon';


interface IPropsIcon extends IIconProps{
    name: 'heart' | 'link' | 'map' | 'start' | 'twitter' | 'users' | 'dropdown' | 'git' | 'close' | 'search';
}

export const Icon = ({name, ...props} : IPropsIcon) => {

    switch (name) {
        case "heart": 
            return <HeartIcon {...props}/>;
        case "link": 
            return <LinkIcon {...props}/>;
        case "map": 
            return <MapIcon {...props}/>;
        case "start": 
            return <StartIcon {...props}/>;
        case "twitter": 
            return <TwitterIcon {...props}/>;
        case "users": 
            return <UsersIcon {...props}/>;
        case "dropdown": 
            return <DropDownIcon {...props}/>;
        case "git": 
            return <GitIcon {...props}/>;
        case "close": 
            return <CloseIcon {...props}/>;
        case "search": 
            return <SearchIcon {...props}/>;

        default: return null;
    }
}
