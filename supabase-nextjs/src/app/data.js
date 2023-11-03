import { supabase } from './supabase.js';

export  class Data {

  async login() {
    let { data: UserData, error } = await supabase
      .from('UserData')
      .select('password');
    if (error) {
      console.error("Error fetching data:", error);
    }
    return UserData;
  }

  async uploadFile(file) {
    const { data, error } = await supabase.storage.from('Photos').upload('file_path', file);
    if (error) {
      console.log("Image did not upload");
    } else {
      console.log("Image uploaded");
    }
  }
}
