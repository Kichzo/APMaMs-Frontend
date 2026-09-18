import { defineStore } from 'pinia'
import { reportService } from '../services/reportService'

export const useReportStore = defineStore('report', {
  state: () => ({
    reports: [],
    isLoading: false,
    error: null,
  }),
  
  actions: {
    async fetchReports(orgId = null) {
      this.isLoading = true;
      this.error = null;
      try {
        if (orgId) {
          this.reports = await reportService.getReportsByOrg(orgId);
        } else {
          this.reports = await reportService.getAllReports();
        }
      } catch (error) {
        console.error('Error fetching reports:', error);
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    }
  }
})
