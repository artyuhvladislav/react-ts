import { createContext, useState } from 'react';



export const UserDataContext = createContext(null);

const UserDataProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null)

  return <UserDataContext.Provider value={{ currentUser, setCurrentUser }}>{children}</UserDataContext.Provider>;
};

export default UserDataProvider;
