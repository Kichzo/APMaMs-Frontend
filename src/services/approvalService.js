import { supabase } from '../supabase'

export const approvalService = {
  async getPendingApprovals() {
    const { data, error } = await supabase
      .from('approvals')
      .select('*')
      .eq('status', 'Pending')
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    return data;
  },

  async getAllApprovals() {
    const { data, error } = await supabase
      .from('approvals')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    return data;
  }
}
