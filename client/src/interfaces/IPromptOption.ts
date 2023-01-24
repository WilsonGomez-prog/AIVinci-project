export default interface IPromptOption {
    name: string,
    value: string | number,
    maxValue?: number
    selected: boolean
    handleSelect?: Function
}