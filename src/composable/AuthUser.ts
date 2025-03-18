import { ref } from 'vue'
import { supabase } from './Supabase.ts'

const user = ref<{
    id: string,
    email: string,
    name: string,
    username: string,
    wishlist: string[],
    collection: string[],
    trades: string[],
} | null>(null)

export function useAuth() {

    const fetchUser = async () => {
        const { data: profiles, error } = await supabase
            .from('profiles')
            .select('*')

        console.log(profiles)

        if (error || !profiles?.[0]) {
            user.value = null
            return null
        }

        user.value = {
            id: profiles?.[0].id || '',
            email: profiles?.[0].email || '',
            name: profiles?.[0].name || '',
            username: profiles?.[0].username || '',
            wishlist: profiles?.[0].wishlist || ['No data'],
            collection: profiles?.[0].collection || ['No data'],
            trades: profiles?.[0].trades || ['No data'],
        }
        return user.value
    }


    const register = async (name: string, username: string, email: string, password: string) => {
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    name,
                    username,
                    email,
                }
            }
        })

        if (error) {
            console.error('Registration failed', error.message)
            return {error: error.message}
        } else {
            alert('Registration successful')
        }
    }


    const login = async (email: string, password: string) => {
        const {data, error} = await supabase.auth.signInWithPassword({email, password})

        if (error) {
            console.error('Login failed', error.message)
            return {error: error.message}
        }

        await fetchUser()
        return {user: data.user}
    }


    const logout = async () => {
        await supabase.auth.signOut()
        user.value = null
    }


    const updateProfile = async (avatar_url: string) => {
        if (!user.value) return { error: 'User not found!' }

        const { error } = await supabase
            .from('profiles')
            .update({ avatar_url: avatar_url })
            .eq('id', user.value.id)

        if (error) {
            console.error('Failed to update user', error.message)
            return { error: error.message }
        }

        return { success: true }
    }

    return {
        user,
        fetchUser,
        register,
        login,
        logout,
        updateProfile,
    }
}