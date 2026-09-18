import { defineStore } from 'pinia'
import { financialService } from '../services/financialService'

export const useFinancialStore = defineStore('financial', {
  state: () => ({
    transactions: [],
    isLoading: false,
    error: null,
  }),
  
  actions: {
    async fetchTransactions(orgId = null) {
      this.isLoading = true;
      this.error = null;
      try {
        if (orgId) {
          this.transactions = await financialService.getFinancialsByOrg(orgId);
        } else {
          this.transactions = await financialService.getAllFinancials();
        }
      } catch (error) {
        console.error('Error fetching transactions:', error);
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    }
  }
})
