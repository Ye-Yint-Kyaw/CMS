import React, { useState, useRef, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { Routers } from './route';
import axios from 'axios';
// import useEffect from 'react-router-dom';

export const App = () => {
    // const [successMessage, setSuccessMessage] = useState<string | null>(null);
    // const [showAlert, setShowAlert] = useState<boolean>(false);
    // const alertTimerRef = useRef<number | null>(null);

    // useEffect(() => {
    //     // axios
    //     //     .get(`http://127.0.0.1:8000/api/users/${customerId}`, {
    //     //         headers: {
    //     //             Authorization: `Bearer ${token}`,
    //     //         },
    //     //     })})

    //     const handleShowAlert = (message: string) => {
    //         setSuccessMessage(message);
    //         setShowAlert(true);

    //         // Clear any existing timer
    //         if (alertTimerRef.current) {
    //             window.clearTimeout(alertTimerRef.current);
    //         }

    //         // Start a new timer to close the alert after 3 seconds
    //         alertTimerRef.current = window.setTimeout(() => {
    //             setShowAlert(false);
    //             setSuccessMessage(null);
    //         }, 3000);
    //     }
    //     handleShowAlert("Successful!");
    // }, []);

    return (
        <>
            {/* <div>
                <Alert variant="success" show={showAlert} onClose={() => setShowAlert(false)} dismissible>

                </Alert>
            </div> */}
            <Routers />
        </>
    );
};
