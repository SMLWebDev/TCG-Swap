// import { ref } from 'vue'
// import { supabase } from './Supabase.ts'
// import router from "@/router";
//
// const user = ref<{
//     id: string,
//     email: string,
//     name: string,
//     username: string,
//     avatar_url?: string,
//     wishlist: string[],
//     collection: string[],
//     trades: string[],
// } | null>(null)
//
// const message = ref('')
//
// export function useAuth() {
//
//     const fetchUser = async () => {
//         const { data: profiles, error } = await supabase
//             .from('profiles')
//             .select('*')
//
//         if (error || !profiles?.[0]) {
//             user.value = null
//             return null
//         }
//
//         user.value = {
//             id: profiles?.[0].id || '',
//             email: profiles?.[0].email || '',
//             name: profiles?.[0].name || '',
//             username: profiles?.[0].username || '',
//             avatar_url: profiles?.[0].avatar_url || '',
//             wishlist: profiles?.[0].wishlist || ['No data'],
//             collection: profiles?.[0].collection || ['No data'],
//             trades: profiles?.[0].trades || ['No data'],
//         }
//         return user.value
//     }
//
//     supabase.auth.onAuthStateChange(async (event, session) => {
//         console.log(`Auth state changed: ${event} + ${session?.user.id}`)
//
//         if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
//             await fetchUser()
//         } else if (event === "SIGNED_OUT") {
//             user.value = null
//             window.location.href = '/'
//         } else if (event === 'PASSWORD_RECOVERY' && session?.user) {
//             console.log('Password reset in progress')
//             await router.push('/update-password')
//         }
//     })
//
//     const register = async (name: string, username: string, email: string, password: string) => {
//         const { error } = await supabase.auth.signUp({
//             email,
//             password,
//             options: {
//                 data: {
//                     name,
//                     username,
//                     email,
//                 }
//             }
//         })
//
//         if (error) {
//             console.error('Registration failed', error.message)
//             return {error: error.message}
//         } else {
//             alert('Registration successful')
//         }
//     }
//
//
//     const login = async (email: string, password: string) => {
//         const {data, error} = await supabase.auth.signInWithPassword({
//             email,
//             password,
//         })
//
//         if (error) {
//             console.error('Login failed', error.message)
//             return {error: error.message}
//         }
//
//         await fetchUser()
//         return {user: data.user}
//     }
//
//
//     const logout = async () => {
//         await supabase.auth.signOut()
//     }
//
//     const forgotPassword = async (email: string) => {
//         await supabase.auth.resetPasswordForEmail(email, {
//             redirectTo: '/update-password'
//         })
//         alert('Please follow email instructions to reset your password')
//     }
//
//     const updatePassword = async (password: string) => {
//
//     }
//
//     const uploadAvatar = async (file: File) => {
//         if (!user.value) return { error: 'User not authenticated' }
//
//         const filePath = `avatars/${user.value.id}/${file.name}`
//
//         const { error } = await supabase.storage
//             .from('avatars')
//             .upload(filePath, file, { upsert: true })
//
//         if (error) {
//             console.error('Avatar upload failed', error.message)
//             return { error: error.message }
//         }
//
//         const { data } = supabase.storage
//             .from('avatars')
//             .getPublicUrl(filePath)
//
//         if (!data.publicUrl) {
//             return { error: 'Failed to retrieve public URL' }
//         }
//
//         const { error: updateError } = await supabase
//             .from('profiles')
//             .update({ avatar_url: data.publicUrl })
//             .eq('id', user.value.id)
//
//         if (updateError) {
//             return { error: updateError.message }
//         }
//
//         user.value.avatar_url = data.publicUrl
//         return { url: data.publicUrl }
//     }
//
//     const updateProfile = async () => {
//
//     }
//
//     return {
//         user,
//         fetchUser,
//         register,
//         login,
//         logout,
//         uploadAvatar,
//         updateProfile,
//         forgotPassword,
//         updatePassword,
//     }
// }