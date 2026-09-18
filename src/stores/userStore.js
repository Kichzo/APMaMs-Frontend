import { defineStore } from 'pinia'
import { userService } from '../services/userService'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    isLoading: false,
    error: null,
  }),
  
  actions: {
    async fetchUsers(orgId = null) {
      this.isLoading = true;
      this.error = null;
      try {
        if (orgId) {
          this.users = await userService.getUsersByOrg(orgId);
        } else {
          this.users = await userService.getAllUsers();
        }
      } catch (error) {
        console.error('Error fetching users:', error);
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },

    async updateUser(id, updates) {
      try {
        const updatedUser = await userService.updateUser(id, updates);
        const index = this.users.findIndex(u => u.id === id);
        if (index !== -1) {
          this.users[index] = updatedUser;
        }
        return updatedUser;
      } catch (error) {
        console.error('Error updating user:', error);
        throw error;
      }
    },

    async addUser(userData) {
      try {
        const newUser = await userService.createUser(userData);
        if (newUser) {
          this.users.unshift(newUser); // Add to beginning of list
        }
        return newUser;
      } catch (error) {
        console.error('Error adding user:', error);
        throw error;
      }
    }
  }
})
