import { routes } from "./envs";

export const login = async (user: string, password: string) => {
    const response = await fetch(`${routes.API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: user,
        password: password,
      }),
    });
  
    if (!response.ok) {
      throw new Error("Login failed!");
    }
  
    return await response.json();
  };
  