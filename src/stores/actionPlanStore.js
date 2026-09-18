import { defineStore } from 'pinia'
import { actionPlanService } from '../services/actionPlanService'

export const useActionPlanStore = defineStore('actionPlan', {
  state: () => ({
    actionPlans: [],
    isLoading: false,
    error: null,
  }),
  
  actions: {
    async fetchActionPlans(orgId = null) {
      this.isLoading = true;
      this.error = null;
      try {
        if (orgId) {
          this.actionPlans = await actionPlanService.getActionPlansByOrg(orgId);
        } else {
          this.actionPlans = await actionPlanService.getAllActionPlans();
        }
      } catch (error) {
        console.error('Error fetching action plans:', error);
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    }
  }
})
