

import React, { SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent } from 'react';
import s from './SuperSelect.module.css';
import { themeType } from '../../../hw12/HW12';

type DefaultSelectPropsType = DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: Array<themeType>;
    onChangeOption?: (option: number) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
                                                         options,
                                                         className,
                                                         onChange,
                                                         onChangeOption,
                                                         ...restProps
                                                     }) => {
    const mappedOptions: React.ReactNode[] = options
        ? options.map((o) => (
            <option
                key={o.id}
                value={o.id}
            >
                {o.value}
            </option>
        ))
        : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e);
        onChangeOption && onChangeOption(Number(e.currentTarget.value));
    };

    const finalSelectClassName = `${s.select} ${className || ''}`;

    return (
        <select
            className={finalSelectClassName}
            onChange={onChangeCallback}
            {...restProps}
        >
            {mappedOptions}
        </select>
    );
};

export default SuperSelect;
