import './LoginFormModal.css'

import PrimaryButton from '../../../Buttons/PrimaryButton/PrimaryButton';
import SecondaryButton from "../../../Buttons/SecondaryButton/SecondaryButton"
import LoginForm from "../LoginForm/LoginForm"
import { useNavigate } from "react-router-dom";

function LoginFormModal() {
    const navigate = useNavigate()

    const registerUser = () => {
        navigate('/users/register?type=user')
    }

    const registerGuest = () => {
        navigate('/users/register?type=guest')
    }


    return <div className="modal fade" id="loginFormModal" tabIndex="-1" aria-labelledby="loginFormModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <LoginForm />
                </div>
                <div className="modal-footer">
                    <SecondaryButton text="Create an account" onClick={registerUser} data-bs-dismiss="modal" />
                    <SecondaryButton text="Continue as Guest" onClick={registerGuest} data-bs-dismiss="modal" />
                </div>
            </div>
        </div>
    </div>
}

export default LoginFormModal