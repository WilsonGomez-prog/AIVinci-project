import IPromptOption from "./IPromptOption"

export default interface IPromptOptionsSection {
    options: IPromptOption[], 
    name: string,
    filter: string,
    handleFilterChange: Function
}