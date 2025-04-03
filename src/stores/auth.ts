import { defineStore } from 'pinia'
import {ref, computed, onMounted} from 'vue'
import { supabase } from "@/composable/Supabase.ts";

interface UserProfile {
    id: string;
    email: string;
    name?: string;
    username?: string;
    avatar_url?: string;
    wishlist?: string[];
    collection?: string[];
    trades?: string[];
}

export const useAuthStore = defineStore('auth', () => {
    const user = ref<UserProfile | null>(null)
    const loading = ref(null)
    const error = ref(null)


        supabase.auth.onAuthStateChange(async (event, session) => {

            if (event === 'SIGNED_IN') {
                // user.value = session?.user || null
            }

            if (event === 'SIGNED_OUT') {
                window.location.href = '/login'
                user.value = null
            }
        })

    const fetchUser = async () => {
        const { data: authUser, error: authError } = await supabase.auth.getUser()
        if (authError || !authUser?.user) {
            console.error('Failed to get authenticated user:', authError)
            return
        }

        const { data: profiles, error } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', authUser.user.id)
            .single()

        if (error) {
            console.error('failed to fetch user: ', error)
            return
        }
        user.value = {
            id: profiles.id || '',
            email: profiles.email || '',
            name: profiles.name || '',
            username: profiles.username || '',
            avatar_url: profiles.avatar_url || '',
            wishlist: profiles.wishlist || ['No data'],
            collection: profiles.collection || ['No data'],
            trades: profiles.trades || ['No data'],
        }
    }

    const restoreSession = async () => {
        const { data: session } = await supabase.auth.getSession()
        if (session?.session?.user) {
            await fetchUser()
        }
    }

    const login = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (!user) {
            alert('No user found.')
        }

        if (error) {
            console.error('failed to login: ', error.message)
            return {error: error.message}
        }
        await fetchUser()
    }

    const register = async (name: string, username: string, email: string, password: string) => {
        const { data, error } = await supabase.auth.signUp({
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
            console.error('failed to register: ', error.message)
            return {error: error.message}
        } else {
            alert('Registration successful!')
            window.location.href = '/profile'
        }
        await fetchUser()
    }

    const logout = async () => {
        await supabase.auth.signOut()
    }

    const updatePassword = async (newPassword: string) => {
        try {
            const { error } = await supabase.auth.updateUser({
                password: newPassword,
            })

            if (error) throw error
            return { success: true, message: 'Password updated successfully!' }
        } catch (err: any) {
            console.error('Update password error: ', err.message)
            return { success: false, message: err.message }
        }
    }

    const forgotPassword = async (email: string) => {
        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/profile/update-password`,
            })
            if (error) throw error
            return { success: true, message: 'Password reset email sent!' }
        } catch (err: any) {
            console.error('Password reset error: ', err.message)
            return { success: false, message: err.message }
        }

    }

    const isLoggedIn = computed(() => !!user.value)

    onMounted(() => {
        restoreSession()
    })

    return {
        user,
        fetchUser,
        restoreSession,
        login,
        register,
        logout,
        updatePassword,
        forgotPassword,
        isLoggedIn,
    }
}, {
    persist: {
        storage: localStorage,
    }
})