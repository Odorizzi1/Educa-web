import { routes } from "./envs";

export const registerUser = async (name: string, password: string, email: string) => {
    const response = await fetch(`${routes.API_URL}/users/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        password,
        email,
      }),
    });
  
    if (!response.ok) {
      throw new Error("Registration failed!");
    }
  
    return await response.status
  };
  