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

    supabase.auth.onAuthStateChange(async (_, session) => {
        console.log('Auth state changed:', session)

        if (session?.user) {
            await fetchUser()
        } else {
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
        }
        await fetchUser()
    }

    const logout = async () => {
        await supabase.auth.signOut()
        user.value = null
        window.location.href = '/'
    }

    const updatePassword = async (newPassword: string) => {
        const { error } = await supabase.auth.updateUser({
            password: newPassword
        })
        if (error) throw error
    }

    const forgotPassword = async (email: string) => {
        const { error } = await supabase.auth.resetPasswordForEmail(email)

        if (error) throw error
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