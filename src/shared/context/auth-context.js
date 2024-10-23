import { createContext } from "react";

// AuthContext is an object that contains the default value of the context. The default value is used when a component does not have a matching Provider or Consumer.
export const AuthContext = createContext({
    isLoggedIn: false,
    token: null,
    userId: null,
    login: () => {},
    logout: () => {}
});