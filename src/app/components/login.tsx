

'use client'
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { authAtom } from '../store/auth';
import { useStore } from "jotai";

type LoginProps = {
}

const Login = (props: LoginProps): JSX.Element => {
  const [ uidInput, setUidInput ] = useState('');
  
  // const [ { isLoggedIn, uid }, setAuth ] = useAtom(authAtom);
  const store = useStore();
  const { isLoggedIn, uid } = store.get(authAtom);

  const handleLogin = e => {
    // setAuth({
    //   uid: uidInput,
    //   isLoggedIn: true,
    // });
    store.set(authAtom, {
      uid: uidInput,
      isLoggedIn: true,
    });
    setUidInput('');
  };

  return (
    <div>
      <h2>Login</h2>
      <p>Is logged in: {`${isLoggedIn}`}, current UID: {uid}</p>
      <TextField id="uid" label="UID" variant="standard" value={uidInput} onChange={e => setUidInput(e.target.value)} />
      <Button variant="contained" onClick={handleLogin}>Login</Button>
    </div>
  )
}
export default Login;