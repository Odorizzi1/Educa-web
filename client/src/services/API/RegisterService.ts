
export const registerUser = async (name: string, password: string, email: string) => {
    const response = await fetch("http://localhost:8080/users/create", {
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
  