import { supabase } from '../supabase'

export const activityService = {
  async getActivitiesByOrg(orgId) {
    let query = supabase.from('activities').select('*, organizations(name)');
    if (orgId) {
      query = query.eq('organization_id', orgId);
    }
    query = query.order('created_at', { ascending: false });
      
    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  async getAllActivities() {
    const { data, error } = await supabase
      .from('activities')
      .select('*, organizations(name)')
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    return data;
  },

  async createActivity(activityData) {
    const { data, error } = await supabase
      .from('activities')
      .insert([activityData])
      .select();
      
    if (error) throw error;
    return data[0];
  },

  async updateActivity(id, updates) {
    const { data, error } = await supabase
      .from('activities')
      .update(updates)
      .eq('id', id)
      .select();

    if (error) throw error;
    return data[0];
  }
}
