import { supabase } from '../supabase'

export const authService = {
  async signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
    return data
  },

  async signUp(email, password, role) {
    // When signing up, we might want to also create a record in our `users` table
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          role: role
        }
      }
    })
    if (error) throw error
    return data
  },

  async signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  async getCurrentSession() {
    const { data, error } = await supabase.auth.getSession()
    if (error) throw error
    return data.session
  },
  
  async getUserRole(userId) {
    // Attempt to fetch role from our custom users table
    const { data, error } = await supabase
      .from('users')
      .select('role')
      .eq('id', userId)
      .single()
      
    if (error) {
      console.warn("Could not fetch user role from table, checking auth metadata", error)
      return null;
    }
    return data.role
  }
}
