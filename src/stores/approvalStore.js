import { defineStore } from 'pinia'
import { approvalService } from '../services/approvalService'

export const useApprovalStore = defineStore('approval', {
  state: () => ({
    approvals: [],
    isLoading: false,
    error: null,
  }),
  
  actions: {
    async fetchApprovals() {
      this.isLoading = true;
      this.error = null;
      try {
        this.approvals = await approvalService.getAllApprovals();
      } catch (error) {
        console.error('Error fetching approvals:', error);
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    }
  }
})
