import './UserInformationForm.css'

import Input from "../../Inputs/Input/Input"

function UserInformationForm(props) {

    let defaultData = [
        {
            placeholder: "Username",
            size: 12,
        },
        {
            placeholder: "Password",
            size: 4,
            offset: 2
        },
        {
            placeholder: "Confirm Password",
            size: 2
        },
        {
            placeholder: "First Name",
            size: 4,
            offset: 2
        },
        {
            placeholder: "Last Name",
            size: 2
        },
        {
            placeholder: "Phone Number",
            size: 4,
            offset: 2
        },
        {
            placeholder: "Email",
            size: 2
        }
    ]

    let data = props.data || defaultData

    return <div className="row user-information-form">
        <p>User Information</p>
        {data.map((input) => {
            if (input.offset) {
                return <div className={'col-'+ input.size + ' offset-' + input.offset + ' user-information-form-' + input.placeholder + '-wrapper'}>
                    <Input name={input.placeholder} />
                </div>
            }
            else {
                return <div className={'col-' + input.size + ' user-information-form-' + input.placeholder + '-wrapper'}>
                    <Input name={input.placeholder} />
                </div>
            }
        })}
    </div>
}

export default UserInformationForm