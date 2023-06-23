import React from 'react';
import { signInWithGooglePopup } from '../../utils/firebase.utils';

export default function Signin() {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign in Page</h1>
      <button onClick={logGoogleUser}> Sign in with Google Pop up </button>
    </div>
  );
}
