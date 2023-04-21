import { element } from "prop-types";
import { createContext, useState } from "react";

export const ToastContext = createContext()

export function ToastContextProvider(props) {
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false)
  const [message, setMessage] = useState('')

  const toggleShow = () => setShow(!show);
  const toggleShowError = () => setShowError(!showError)

  const displayMessage = (message) => {
    setMessage(message)
    setShow(true)
  }

  const displayErrorMessage = (message) => {
    setMessage(message)
    setShowError(true)
  }

  return <ToastContext.Provider value={
    {
      toggleShow,
      toggleShowError,
      setMessage,
      displayMessage,
      displayErrorMessage,
      show,
      showError,
      message
    }
  }>
    {props.children}
  </ToastContext.Provider>
}

ToastContextProvider.propTypes = {
  children: element
}