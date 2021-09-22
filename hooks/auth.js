import React, {
    createContext,
    useCallback,
    useState,
    useContext,
    useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";



const AuthContext = createContext({});
const AuthProvider = ({ children }) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function loadStoreData() {
            const [user] = await AsyncStorage.multiGet([
                "@Cesta:user",
            ]);

            setData({ user: user });
        }
        setLoading(false);
    }

    );

    const signIn = useCallback(async ({ user }) => {
        console.log({ user })
        await AsyncStorage.multiSet([
            ["@Cris:user", JSON.stringify(user)],
        ]);

        setData({ user });
    }, []);
    const signOut = useCallback(async () => {
        await AsyncStorage.multiRemove(["Cris:user", "@Cris:token"]);
        setData({});
    }, []);

    return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
export { AuthContext, AuthProvider, useAuth };
