import React, { useState, useEffect } from 'react';
import Context from './index';
import Cookie from "js-cookie";
import Router from "next/router";
import jwt_decode from "jwt-decode";
import {goHome} from '../../services/game';

export const TOKEN_STORAGE_KEY = "player2.authToken";
export const USER_STORAGE_KEY = "player2.userInfo";

const LoginProvider = (props) => {
  const [authorizationToken, setToken] = useState({token: ''});
  const [user, setUser] = useState({});

  useEffect(() => {
    let cookieToken = Cookie.get(TOKEN_STORAGE_KEY);
    let userstr = Cookie.get(USER_STORAGE_KEY);

    setToken({token: cookieToken});
    if (userstr) setUser(JSON.parse(userstr));

  }, []);

  const logIn = (user, token) => {    
    user = keysToLowerCase(user);

    Cookie.set(TOKEN_STORAGE_KEY, token.token);
    Cookie.set(USER_STORAGE_KEY, JSON.stringify(user));

    setUser(user);
    setToken(token);

    goHome();
  };

  const logOut = () => {
    Cookie.remove(TOKEN_STORAGE_KEY);
    Cookie.remove(USER_STORAGE_KEY);
    setToken({token: ''});
    setUser({});

    Router.push('/account/login');
  }

  const getUser = () => {
    let user = Cookie.get(USER_STORAGE_KEY);
    let obj = JSON.parse(user);
    setUser(obj);

    return obj;
  };

  const getDecodedToken = () => {
    let cookieToken = Cookie.get(TOKEN_STORAGE_KEY);
    if (cookieToken)
      return jwt_decode(cookieToken);

    return {exp: 0};
  };

  const getAuthToken = () => {
    let user = getUser();
    let cookieToken = Cookie.get(TOKEN_STORAGE_KEY);

    return cookieToken + user['id'];
  }

  const expiresAt = () => {
    let decodedToken = getDecodedToken();

    return new Date(decodedToken.exp * 1000);
  }

  const isExpired = () => {
    let date = new Date();
    return date > expiresAt();
  }

  const isValid = () =>  {
    return !isExpired();
  }

  const { value } = props;

  return (
    <Context.Provider
      value={{
        ...props,
        state: authorizationToken,
        userState: user, setUser,
        decodedToken: getDecodedToken,
        logIn: logIn,
        logOut: logOut,
        isValid: isValid,
        getUser: getUser,
        getAuthToken: getAuthToken
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
