import { defineStore } from 'pinia'
import { orgService } from '../services/orgService'

export const useOrgStore = defineStore('organization', {
  state: () => ({
    organizations: [],
    isLoading: false,
    error: null,
  }),
  
  actions: {
    async fetchOrganizations() {
      this.isLoading = true;
      this.error = null;
      try {
        this.organizations = await orgService.getAllOrganizations();
      } catch (error) {
        console.error('Error fetching organizations:', error);
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    }
  }
})
