import { element } from "prop-types";
import { createContext, useState } from "react";

export const ToastContext = createContext()

export function ToastContextProvider(props) {
  const [show, setShow] = useState(false);
  const [message, setMessage] = useState('')

  const toggleShow = () => setShow(!show);

  const displayMessage = (message) => {
    setMessage(message)
    setShow(true)
  }

  return <ToastContext.Provider value={
    {
      toggleShow,
      setMessage,
      displayMessage,
      show,
      message
    }
  }>
    {props.children}
  </ToastContext.Provider>
}

ToastContextProvider.propTypes = {
  children: element
}