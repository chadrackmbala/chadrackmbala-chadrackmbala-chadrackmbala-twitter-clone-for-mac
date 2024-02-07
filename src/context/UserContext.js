import { createContext } from "react";

const UserContext = createContext({
   name: "",
   userProfil: "",
   isLogged: false,
});

export default UserContext;