export const login = async (user: string, password: string) => {
    const response = await fetch("http://localhost:8080/login", {
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
  