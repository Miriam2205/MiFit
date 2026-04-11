import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState('');
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    const syncAuth = () => {
      const savedToken = window.localStorage.getItem('token') || '';
      const savedUserId = window.localStorage.getItem('userId') || '';
      const savedUser = window.localStorage.getItem('user');
      let parsedUser = null;

      if (savedUser) {
        try {
          parsedUser = JSON.parse(savedUser);
        } catch (error) {
          console.error('No se pudo leer user de localStorage', error);
        }
      }

      setToken(savedToken);
      setUser(parsedUser);
      setUserId(savedUserId);
      setAuthReady(true);
    };

    syncAuth();
    window.addEventListener('storage', syncAuth);

    return () => {
      window.removeEventListener('storage', syncAuth);
    };
  }, []);

  const login = ({ token: nextToken, user: nextUser, userId: nextUserId, email }) => {
    const resolvedUserId = nextUserId || nextUser?._id || '';

    if (nextToken) {
      window.localStorage.setItem('token', nextToken);
    } else {
      window.localStorage.removeItem('token');
    }

    if (email) {
      window.localStorage.setItem('lastEmail', email);
    }

    if (nextUser) {
      window.localStorage.setItem('user', JSON.stringify(nextUser));
    } else {
      window.localStorage.removeItem('user');
    }

    if (resolvedUserId) {
      window.localStorage.setItem('userId', resolvedUserId);
    } else {
      window.localStorage.removeItem('userId');
    }

    setToken(nextToken || '');
    setUser(nextUser || null);
    setUserId(resolvedUserId);
  };

  const logout = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('userId');
    setToken('');
    setUser(null);
    setUserId('');
  };

  const updateUser = (nextUser) => {
    if (!nextUser) return;

    window.localStorage.setItem('user', JSON.stringify(nextUser));

    if (nextUser._id) {
      window.localStorage.setItem('userId', nextUser._id);
      setUserId(nextUser._id);
    }

    setUser(nextUser);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        userId,
        authReady,
        isAuthenticated: Boolean(token),
        login,
        logout,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }

  return context;
};
