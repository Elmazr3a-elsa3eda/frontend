import React, { createContext, useState, useContext, useEffect } from 'react';

const SnackbarContext = createContext();

export const useSnackbar = () => {
  return useContext(SnackbarContext);
};

export const SnackbarProvider = ({ children }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const openSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
    setTimeout(() => {
      closeSnackbar();
    }, 3000);
  };

  const closeSnackbar = () => {
    setSnackbarOpen(false);
    setSnackbarMessage('');
  };

  return (
    <SnackbarContext.Provider value={{ openSnackbar, closeSnackbar }}>
      {children}
      {snackbarOpen && (
        <div className="fixed z-50 bottom-4 left-2/4 -translate-x-2/4 w-fit mx-auto rounded-lg bg-darkerblue text-white p-4">
          <p>{snackbarMessage}</p>
        </div>
      )}
    </SnackbarContext.Provider>
  );
};
