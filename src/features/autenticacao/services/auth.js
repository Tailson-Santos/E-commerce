import { supabase } from "../../../services/supabase";

export async function cadastrar(email, senha) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password: senha,
  });

  if (error) throw error;

  return data;
}

export async function login(email, senha) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password: senha,
  });

  if (error) throw error;

  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;
}
