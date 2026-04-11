import { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import { ToastContainer } from 'react-bootstrap';
import { HashLink } from "react-router-hash-link";
import CopyEmail from './CopyEmail';

const Notification = () => {

  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

    return (
        <>
        <div className="toast-wrapper">
          <ToastContainer className="p-3 toast-slide">
            <Toast show={showA} onClose={toggleShowA}>
              <Toast.Header>
                <img src="https://placehold.co/20x20/000000/FFF" className="rounded me-2" alt="" />
                <strong className="me-auto">Nana</strong>
                <small>just now</small>
              </Toast.Header>
              <Toast.Body>Hey there! Thanks for stopping by. Fancy a chat? :)
                <div className="notification">
                  <CopyEmail />
                  <HashLink smooth to="/#projects" className="cta">View Projects</HashLink>
                </div>
              </Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
        </>
    )
}

export default Notification