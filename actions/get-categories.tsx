

import { Category } from "@/types";

const URL=process.env.NEXT_PUBLIC_API_URL;

const getCategory = async (): Promise<Category> => {
  const res = await fetch(URL+'/categories',
    {
      method: "GET",
      credentials: "include",
  }
    );
  

  
  return res.json()

};

export default getCategory;