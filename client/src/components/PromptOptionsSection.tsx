import React, {useState} from 'react'
import { IPromptOptionsSection} from '../interfaces';

import PromptOption from './PromptOption';

const PromptOptionsSection: React.FC<IPromptOptionsSection> = ({ options, name, filter, handleFilterChange }) => {
    const [selectedFilter, setSelectedFilter] = useState<string>("standard")
    const handleSelectFilter = (event: React.FormEvent<HTMLInputElement>) => {
        const target= (event.target as HTMLInputElement);
        handleFilterChange(target.value);
        setSelectedFilter(target.name);
    }

    return (
        <div className='flex flex-col justify-start h-fit gap-2 bg-slate-100 p-3'>
            <h3 className='font-bold w-full text-center capitalize' >{name} Options</h3>
            <div className='flex flex-row items-start w-60 flex-wrap gap-2'>
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