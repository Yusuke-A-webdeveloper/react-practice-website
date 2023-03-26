import React, { useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';
import { eventByVisible } from './function';
import { publishLogoList } from './data';

const AppContext = React.createContext();

const initialState = {
  stickyNav: false,
  slideIndex: 0,
  isDown: false,
  startX: 0,
  scrollLeft: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const stickNavBar = () => {
    if (window.scrollY > 0) {
      dispatch({ type: 'STICKY_NAV' });
    } else {
      dispatch({ type: 'DEFAULT_NAV' });
    }
  };

  useEffect(() => {
    const lastIndex = publishLogoList.length - 1;
    if (state.slideIndex > lastIndex) {
      dispatch({ type: 'DEFAULT_INDEX' });
    }
  }, [state.slideIndex]);

  useEffect(() => {
    let slider = setInterval(() => {
      dispatch({ type: 'SLIDE_LOGO' });
    }, 5000);
    return () => clearInterval(slider);
  }, [state.slideIndex]);

  useEffect(() => {
    window.addEventListener('scroll', stickNavBar);
    return () => window.removeEventListener('scroll', stickNavBar);
  }, []);

  useEffect(() => {
    if (state.stickyNav) {
      eventByVisible();
    }
  }, [state.stickyNav]);

  return (
    <AppContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
