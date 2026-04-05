import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import { ToastContainer } from 'react-bootstrap';
import { HashLink } from "react-router-hash-link";

const Notification = () => {

  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

    return (
        <>
          <ToastContainer position="top-end" className="p-3 toast-slide">
            <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header>
                <img src="https://placehold.co/20x20/000000/FFF" className="rounded me-2" alt="" />
                <strong className="me-auto">Nana</strong>
                <small>just now</small>
              </Toast.Header>
              <Toast.Body>Hey there! Thanks for stopping by. Fancy a chat? :)
                <div className="notification-cta">
                  <p className="copy-email">Copy Email</p>
                  <p className="copy-email"><HashLink smooth to="/#projects">View Projects</HashLink></p>
                </div>
              </Toast.Body>
            </Toast>
          </ToastContainer>
        </>
    )
}

export default Notification