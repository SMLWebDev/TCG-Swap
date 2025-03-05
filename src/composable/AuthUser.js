import { ref } from "vue"

const user = ref(null)

export default function useAuthUser() {
    const login = async ({ email, password }) => {}

    const loginWithSocialProvider = (provider) => {}

    const logout = async () => {}

    const isLoggedIn = () => {}

    const register = async ({ email, password, ...meta }) => {}

    const update = async (data) => {}

    const sendPasswordReset = async (email) => {}

    return {
        login,
        loginWithSocialProvider,
        logout,
        isLoggedIn,
        register,
        update,
        sendPasswordReset,
    }
}