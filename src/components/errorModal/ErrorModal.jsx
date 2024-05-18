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
        It seems there is a network issue with the data service provider (TMDB API) when connected through your internet service provider (like Jio network). Please switch to a different network to access the content or try connecting via a VPN (<Link to='https://windscribe.com/'>try Windscribe VPN</Link>).
        </div>

        <button className='button' onClick={refreshPage} >Try again</button>
      </div>
    </div>
  );
};

export default ErrorModal;
