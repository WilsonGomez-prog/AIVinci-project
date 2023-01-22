export default interface IFormField {
    labelName: string,
    type: string,
    name: string,
    placeholder: string,
    value: any,
    handleChange: Function,
    isSurpriseMe: boolean,
    handleSurpriseMe: Function
}