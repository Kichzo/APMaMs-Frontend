import { defineStore } from 'pinia'
import { activityService } from '../services/activityService'

export const useActivityStore = defineStore('activity', {
  state: () => ({
    activities: [],
    isLoading: false,
    error: null,
  }),
  
  getters: {
    getActivitiesByStatus: (state) => (status) => {
      if (status === 'all') return state.activities;
      return state.activities.filter(a => a.status.toLowerCase() === status.toLowerCase());
    }
  },

  actions: {
    async fetchActivities(orgId = null) {
      this.isLoading = true;
      this.error = null;
      try {
        if (orgId) {
          this.activities = await activityService.getActivitiesByOrg(orgId);
        } else {
          this.activities = await activityService.getAllActivities();
        }
      } catch (error) {
        console.error('Error fetching activities:', error);
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },
    
    async addActivity(activityData) {
      try {
        const newActivity = await activityService.createActivity(activityData);
        this.activities.unshift(newActivity);
        return newActivity;
      } catch (error) {
        console.error('Error adding activity:', error);
        throw error;
      }
    },

    async updateActivity(id, updates) {
      try {
        const updatedActivity = await activityService.updateActivity(id, updates);
        const index = this.activities.findIndex(a => a.id === id);
        if (index !== -1) {
          this.activities[index] = updatedActivity;
        }
        return updatedActivity;
      } catch (error) {
        console.error('Error updating activity:', error);
        throw error;
      }
    }
  }
})
