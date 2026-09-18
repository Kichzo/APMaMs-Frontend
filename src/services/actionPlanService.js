import { supabase } from '../supabase'

export const actionPlanService = {
  async getActionPlansByOrg(orgId) {
    const { data, error } = await supabase
      .from('action_plans')
      .select('*')
      .eq('organization_id', orgId)
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    return data;
  },

  async getAllActionPlans() {
    const { data, error } = await supabase
      .from('action_plans')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    return data;
  },
}
