import React, { useState, useEffect } from 'react';
import Context from './index';
import { toast } from 'react-toastify'
const LoginProvider = (props) => {
  const [authorizationToken, setToken] = useState({token: '', status: 1});
  const [user, setUser] = useState({});

  const cookieToken = localStorage.getItem('token');
  const userStorage = localStorage.getItem('info');

  const logIn = (user, token) => {
    user = keysToLowerCase(user);
    token = keysToLowerCase(token);
    // save the token from the login response in a cookie
    localStorage.setItem('token', JSON.stringify(token), { expires: 1 })
    // save the userId from the login response in a cookie
    localStorage.setItem('info', JSON.stringify(user), { expires: 1 })
    setUser(user);
    setToken(token);
  }

  useEffect(() => {
    localStorage.setItem('info', JSON.stringify(user), { expires: 1 });
  },[user]);

 useEffect(() => {
    if (cookieToken) setToken(JSON.parse(cookieToken));
    if (userStorage) setUser(JSON.parse(userStorage));
  }, [])

  useEffect(() => {
      if (authorizationToken != undefined &&
        authorizationToken.status == 0)
        {
            toast.success("Loggin success!");
        }
        localStorage.setItem('token', JSON.stringify(authorizationToken), { expires: 1 });
  }, [authorizationToken]);

  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('info');
    setToken({token: '', status: 1});
    setUser({});
  }

  const { value } = props;
  return (
    <Context.Provider
      value={{
        ...props,
        state: authorizationToken,
        userState: user, setUser,
        logIn: logIn,
        logOut: logOut
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

function keysToLowerCase(obj) {
    if(obj instanceof Array) {
        for (var i in obj) {
            obj[i] = keysToLowerCase(obj[i]);
        }
    }
    if (!typeof(obj) === "object" || typeof(obj) === "string" || typeof(obj) === "number" || typeof(obj) === "boolean") {
        return obj;
    }
    var keys = Object.keys(obj);
    var n = keys.length;
    var lowKey;
    while (n--) {
        var key = keys[n];
        if (key === (lowKey = key.toLowerCase()))
            continue;
        obj[lowKey] = keysToLowerCase(obj[key]);
        delete obj[key];
    }
    return (obj);
}


export default LoginProvider;
