import {supabase} from "./supabase.js"
export async function login() {
    
  let { data: UserData, error } = await  supabase 
  .from('UserData')
  .select('id')
  if(error) {
    console.error("Error fetching data:", error)
  }
  return UserData;
}