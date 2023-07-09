import {createContext, Dispatch, SetStateAction} from "react";

const menuContext = createContext<{ isMenuOpen: boolean, setIsMenuOpen: Dispatch<SetStateAction<boolean>> }>({
  isMenuOpen: false,
  setIsMenuOpen: () => {
  },
});

export default menuContext;