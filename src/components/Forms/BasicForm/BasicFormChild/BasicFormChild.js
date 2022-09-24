import Input from "../../../Inputs/Input/Input"

function BasicFormChild(props) {
    return <div {...props}>
        <Input name={props.name} placeholder={props.placeholder} defaultValue={props.defaultValue || null} value={props.value || null} readOnly={props.readOnly || null} onChange={props.onChange || null}/>
    </div>
}

export default BasicFormChild