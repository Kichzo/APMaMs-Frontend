import { supabase } from '../supabase'

export const financialService = {
  async getFinancialsByOrg(orgId) {
    const { data, error } = await supabase
      .from('financials')
      .select('*')
      .eq('organization_id', orgId)
      .order('transaction_date', { ascending: false });
      
    if (error) throw error;
    return data;
  },

  async getAllFinancials() {
    const { data, error } = await supabase
      .from('financials')
      .select('*')
      .order('transaction_date', { ascending: false });
      
    if (error) throw error;
    return data;
  }
}
