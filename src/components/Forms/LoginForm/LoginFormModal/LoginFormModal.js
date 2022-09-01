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


    return <div class="modal fade" id="loginFormModal" tabindex="-1" aria-labelledby="loginFormModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <LoginForm />
                </div>
                <div class="modal-footer">
                    <SecondaryButton text="Create an account" onClick={registerUser} data-bs-dismiss="modal" />
                    <SecondaryButton text="Continue as Guest" onClick={registerGuest} data-bs-dismiss="modal" />
                </div>
            </div>
        </div>
    </div>
}

export default LoginFormModal