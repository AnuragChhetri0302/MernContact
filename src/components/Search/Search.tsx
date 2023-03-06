import React, { useState } from 'react'
import { Button } from '../Button/Button';
import Style from './Search.module.scss';

type Props = {
    onChangeParentValue: (newValue: string) => void;
};

const Search: React.FC<Props> = ({ onChangeParentValue }) => {
    const [childValue, setChildValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChildValue(event.target.value);
        onChangeParentValue(event.target.value);
    };
    return (
        <div className={Style.searchData}>
            <input type='text' className={Style.search} placeholder="Search" value={childValue} onChange={handleChange} />
        </div>
    )
}

export default Search