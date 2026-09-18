import { supabase } from '../supabase'

export const orgService = {
  async getAllOrganizations() {
    const { data, error } = await supabase
      .from('organizations')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    return data;
  },

  async getOrganizationById(id) {
    const { data, error } = await supabase
      .from('organizations')
      .select('*')
      .eq('id', id)
      .single();
      
    if (error) throw error;
    return data;
  }
}
