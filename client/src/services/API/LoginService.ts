export const login = async (user: string, password: string) => {
    const response = await fetch("https://perguntacerta-kotlin-cold-silence-3112.fly.dev/login", {
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
  