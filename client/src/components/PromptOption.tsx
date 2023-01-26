import React from 'react'
import { IPromptOption } from '../interfaces';

const promptOption: React.FC<IPromptOption> = ({name, value, maxValue, selected, handleSelect}) => {
  return (
    <button type="button" name={name} onClick={(e)=>{handleSelect!(e)}} value={value} className={`font-semibold text-xs ${!selected ? 'bg-[#dcdcde]' : 'bg-[#c1c1c1]'} py-1 px-1 rounded-[5px] text-black h-7 capitalize flex justify-center items-center`}>{name}</button>
  )
}

export default promptOption