const reducer = (state, action) => {
  switch (action.type) {
    case 'STICKY_NAV':
      return { ...state, stickyNav: true };
    case 'DEFAULT_NAV':
      return { ...state, stickyNav: false };

    case 'SLIDE_LOGO':
      const newIndex = state.slideIndex + 6;
      return { ...state, slideIndex: newIndex };
    case 'DEFAULT_INDEX':
      return { ...state, slideIndex: 0 };

    default:
      throw new Error('there is no such action type');
  }
};

export default reducer;
