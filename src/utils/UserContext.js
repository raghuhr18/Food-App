import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Dummy name",
        email: "dummyemail@gmail.com"
    }
})
export default UserContext



