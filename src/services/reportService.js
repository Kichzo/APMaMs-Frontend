import { supabase } from '../supabase'

export const reportService = {
  async getReportsByOrg(orgId) {
    const { data, error } = await supabase
      .from('reports')
      .select('*, activities(title)')
      .eq('organization_id', orgId) // Assuming organization_id is on report, or we query via activity
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    return data;
  },

  async getAllReports() {
    const { data, error } = await supabase
      .from('reports')
      .select('*, activities(title)')
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    return data;
  }
}
