// import { createContext, useState } from "react";
// import { useAuth } from "../../services/apiAuth";
// import { useGetCurrentUser } from "./useGetCurrentUser";
// const UsersContext = createContext();
// export default function UsersProvider({ children }) {
//   const { user: AuthUser } = useAuth();
//   const { data } = useGetCurrentUser(AuthUser.uid);
//   const [user, setUser] = useState();

//   return <UsersContext.Provider>{children}</UsersContext.Provider>;
// }
