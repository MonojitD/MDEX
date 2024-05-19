import React from 'react';
import './error-modal.scss'

import errorIcon from '../../assets/error.png'
import { Link } from 'react-router-dom';

function refreshPage(){ 
  window.location.reload(); 
}

const ErrorModal = ({ errorMessage }) => {
  if (!errorMessage) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <img src={errorIcon} alt="" />
        <p className='error_titile'>{errorMessage}</p>
        <div className="error_msg">
        It seems our data service is facing a network issue when connected through your internet service provider ( like Jio networks don't support our API provider ). Please switch to a different network to access the content or just connect again via a VPN (<Link to='https://windscribe.com/'> you can try this VPN </Link>).
        </div>

        <button className='button' onClick={refreshPage} >Load again</button>
      </div>
    </div>
  );
};

export default ErrorModal;
