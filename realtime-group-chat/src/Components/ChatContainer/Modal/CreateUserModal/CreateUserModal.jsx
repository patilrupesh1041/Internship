import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './CreateUserModal.module.css';

export default function CreateUserModal({ onCloseCreateUserModalHandler, onCreateUserNameHandler }) {
    const [isBrowser, setIsBrowser] = useState(false);
    const [userName,setUserName]= useState('');
    const [isMaxLengthError,setIsMaxLengthError]=useState(false);
    const [isMinLengthError,setIsMinLengthError]=useState(false);

    const onInputChangeHandler = (event) =>{
        event.preventDefault();
        const userNameInputValue=event.target.value;

        setIsMaxLengthError(false);
        setIsMinLengthError(false);

        if(userNameInputValue.length < 3) {
            setIsMinLengthError(true);
        }
        else if(userNameInputValue.length > 12) {
            setIsMaxLengthError(true);
        }
        setUserName(userNameInputValue);

    };

    const onSubmitUserNameHandler = () =>{
        if(userName && !isMaxLengthError && !isMinLengthError){
            onCreateUserNameHandler(userName.trim());
            onCloseCreateUserModalHandler();
        }
    };

    useEffect(() => {
        setIsBrowser(true);
    }, []);


    let modalUI = isBrowser
        ? ReactDOM.createPortal(
              <div className="modal d-block">
                <div className={`position-fixed h-100 w-100 ${styles.Backdrop}`}></div>
                  <div
                      className="modal-dialog modal-dialog-centered"
                      role="document">
                      <div className="modal-content">
                          <div className="modal-header">
                              <h5 className="modal-title">Create User</h5>
                          </div>
                          <div className="modal-body">
                              <div class="input-group has-validation">
                                  <span class="input-group-text">@</span>
                                  <div class="form-floating is-invalid">
                                      <input
                                          type="text"
                                          class="form-control is-invalid"
                                          id="floatingInputGroup2"
                                          placeholder="Username"
                                          required
                                          value={userName}
                                          onChange={onInputChangeHandler}
                                      />
                                      <label htmlFor="floatingInputGroup2">
                                          Username
                                      </label>
                                    </div>
                                    {isMinLengthError ? (
                                        <div className="invalid-feedback">
                                        Minimum length is 3 characters.
                                        </div>
                                    ) : null}
                                    {isMaxLengthError ? (
                                        <div className="invalid-feedback">
                                        Maximum length is 12 characters.
                                        </div>
                                    ) : null}
                              </div>
                          </div>
                          <div className="modal-footer">
                          <button 
                                type="button" 
                                className="btn btn-primary"
                                disabled={!userName || isMaxLengthError || isMinLengthError}
                                onClick={onSubmitUserNameHandler}
                            >
                                Create
                            </button>
                          </div>
                      </div>
                  </div>
                </div>,
                document.getElementById('_next.js-modal-root')       
    )
        : null;
    return modalUI;
}
