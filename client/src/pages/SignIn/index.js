import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import AuthActions from '~/store/ducks/auth';

export default function SignIn() {
  const dispatch = useDispatch();

  const { signInRequest } = AuthActions;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signInRequest(email, password));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <input value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">submit</button>
    </form>
  );
}
