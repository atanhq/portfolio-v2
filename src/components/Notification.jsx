import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import { ToastContainer } from 'react-bootstrap';

const Notification = () => {

  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

    return (
        <>
          <ToastContainer position="top-end" className="p-3 toast-slide">
            <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header>
                <img src={"holder.js/20x20?text=%20"} className="rounded me-2" alt="" />
                <strong className="me-auto">Nana</strong>
                <small>just now</small>
              </Toast.Header>
              <Toast.Body>Hey there! Thanks for checking out my portfolio. Fancy a chat? :) <p className="copy-email">Copy Email</p></Toast.Body>
            </Toast>
          </ToastContainer>
        </>
    )
}

export default Notification