import React from 'react';
import { DomTreeToastProps } from './types';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


const DomTreeToast: React.FC<DomTreeToastProps> = ({ toastRef, toggleToast, children }) => (
  <div className='toast-container position-fixed top-0 end-0 p-3'>
    <div
      ref={toastRef}
      className='toast'
      role='alert'
      data-bs-animation='true'
      data-bs-autohide='false'
      aria-live='assertive'
      aria-atomic='true'
    >
      <div className='toast-header'>
        <strong className='me-auto'>DOM tree navigation widget</strong>
        <button
          onClick={toggleToast}
          type='button'
          className='btn-close'
          data-bs-dismiss='toast'
          aria-label='Close'
        ></button>
      </div>
      <div className='toast-body'>
        {children}
      </div>
    </div>
  </div>
);

export default DomTreeToast;
