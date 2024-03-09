import React, {FunctionComponent, SVGProps} from 'react';
import { ReactComponent as DownIcon } from './icons/downIcon.svg';
import { ReactComponent as UpIcon } from './icons/upIcon.svg';
import { ReactComponent as NoneIcon } from './icons/noneIcon.svg';

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}
type IconType = FunctionComponent<SVGProps<SVGSVGElement>>
export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === '') return down;
    if (sort === down) return up;
    if (sort === up) return '';
    return down;
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const Icon:IconType = sort === down ? DownIcon : sort === up ? UpIcon : NoneIcon;

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <Icon/>
        </span>
    )
}

export default SuperSort
