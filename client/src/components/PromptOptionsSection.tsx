import React, {useState} from 'react'
import { IPromptOptionsSection} from '../interfaces';

import PromptOption from './PromptOption';

const PromptOptionsSection: React.FC<IPromptOptionsSection> = ({ options, name, filter, handleFilterChange }) => {
    const [selectedFilter, setSelectedFilter] = useState<string>(filter)
    const handleSelectFilter = (event: React.FormEvent<HTMLInputElement>) => {
        const target= (event.target as HTMLInputElement);
        handleFilterChange({name: target.name, value: target.value, selected: true});
        setSelectedFilter(target.name);
    }

    return (
        <div className='flex flex-col mx-auto md:max-2xl:mx-0 justify-center w-fit h-fit gap-2 bg-slate-100 p-1'>
            <h3 className='font-bold w-full text-center capitalize' >{name} Options</h3>
            <div className='flex flex-row justify-center w-60 flex-wrap gap-2 m-0'>
            {
                options.map((option) => (
                    <PromptOption key={option.name} name ={option.name} value={option.value} handleSelect={handleSelectFilter} selected={selectedFilter === option.name} />
                ))
            }
            </div>
        </div>
    )
}

export default PromptOptionsSection