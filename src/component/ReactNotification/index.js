import React, {useEffect} from 'react';
import firebase from 'firebase/app';
import {toast} from 'react-toastify';
import 'firebase/messaging';
import './index.css';
import { config } from '../../config/FirebaseConfig';
firebase.initializeApp(config);
const messaging = firebase.messaging();

const NotificationComponent = ()=> {
    useEffect(()=>{
        const requestFirebaseNotificationPermission = () =>
      new Promise((resolve, reject) => {
        messaging
          .requestPermission()
          .then(() => messaging.getToken())
          .then((firebaseToken) => {
            resolve(firebaseToken);
          })
          .catch((err) => {
            reject(err);
          });
      });
      /////
      requestFirebaseNotificationPermission()
      .then((firebaseToken) => {
        // eslint-disable-next-line no-console
        console.log(firebaseToken);
      })
      .catch((err) => {
        return err;
      });
    },[])
    
    useEffect(()=>{
        const onMessageListener = () =>
        new Promise((resolve) => {
            messaging.onMessage((payload) => {
                debugger
          resolve(payload);
        });
    });
    ////
    onMessageListener()
    .then((payload) => {
      console.log("payload: ", payload);
      const { title, body } = payload.notifications;
      toast.info(`${title}; ${body}`);
    })
    .catch((err) => {
      toast.error(JSON.stringify(err));
    });
    },[])

    return <div className="notification-container">Notification Component</div>
}

export default NotificationComponent;