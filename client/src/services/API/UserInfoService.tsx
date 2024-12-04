import { routes } from "./envs";

export const registerUserInfo = async (firstname: string, userId:number,token:string) => {
     const response = await fetch(`${routes.API_URL}/users/userinfo`, {
        method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        firstname,
        userId,
      }),
    });
   
    if (!response.ok) {
      throw new Error("Registration failed!");
    }
  
    return await response.status
  };
  