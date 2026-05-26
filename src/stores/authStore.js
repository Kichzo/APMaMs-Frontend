import { defineStore } from 'pinia'
import { authService } from '../services/authService'
import { supabase } from '../supabase'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    role: localStorage.getItem('role') || null, // fallback
    isLoading: false,
    error: null,
  }),
  
  actions: {
    async initialize() {
      const session = await authService.getCurrentSession()
      if (session) {
        this.user = session.user
        // Try to get role from user metadata first (if set during signup)
        let userRole = session.user.user_metadata?.role;
        if (!userRole) {
           // fallback to database query
           userRole = await authService.getUserRole(session.user.id);
        }
        
        if (userRole) {
          this.role = userRole;
          localStorage.setItem('role', userRole);
        }
      }
      
      // Setup listener for auth state changes
      supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === 'SIGNED_IN' && session) {
          this.user = session.user
          let userRole = session.user.user_metadata?.role;
          if (!userRole) {
             userRole = await authService.getUserRole(session.user.id);
          }
          if (userRole) {
             this.role = userRole;
             localStorage.setItem('role', userRole);
          }
        } else if (event === 'SIGNED_OUT') {
          this.user = null
          this.role = null
          localStorage.removeItem('role')
        }
      })
    },

    async signIn(email, password) {
      this.isLoading = true
      this.error = null
      try {
        const data = await authService.signIn(email, password)
        this.user = data.user
        
        let userRole = data.user.user_metadata?.role;
        if (!userRole) {
           userRole = await authService.getUserRole(data.user.id);
        }
        
        if (userRole) {
          this.role = userRole;
          localStorage.setItem('role', userRole);
        }
        return this.role; // return role to help routing
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.isLoading = false
      }
    },

    async signOut() {
      this.isLoading = true
      this.error = null
      try {
        await authService.signOut()
        this.user = null
        this.role = null
        localStorage.removeItem('role')
      } catch (error) {
        this.error = error.message
        throw error
      } finally {
        this.isLoading = false
      }
    }
  }
})
