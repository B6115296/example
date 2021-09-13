

const useLocalStorage = key => {
  

  const setLocalStorage = val => {
    window.localStorage.setItem(key, JSON.stringify( val ))
  };

  return { setLocalStorage };
};

export default useLocalStorage;
