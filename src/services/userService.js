import { supabase } from '../supabase'

export const userService = {
  async getAllUsers() {
    const { data, error } = await supabase
      .from('users')
      .select('*, organizations(name)')
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    return data;
  },

  async getUsersByOrg(orgId) {
    const { data, error } = await supabase
      .from('users')
      .select('*, organizations(name)')
      .eq('organization_id', orgId)
      .order('created_at', { ascending: false });
      
    if (error) throw error;
    return data;
  },

  async updateUser(id, updates) {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', id)
      .select();

    if (error) throw error;
    return data[0];
  },

  async createUser(userData) {
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: userData.email,
      password: userData.password,
      options: {
        data: { role: userData.role }
      }
    });

    if (authError) throw authError;

    const { data, error } = await supabase
      .from('users')
      .insert([
        {
          id: authData.user.id,
          first_name: userData.fullName || 'New',
          last_name: userData.lastName || 'User',
          email: userData.email,
          role: userData.role
        }
      ])
      .select();

    if (error) {
      console.warn("Could not insert into public.users:", error.message);
    }
    return data ? data[0] : authData.user;
  }
}
