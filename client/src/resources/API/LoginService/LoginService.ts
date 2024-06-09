import axios from "axios";

interface Login {
    email: string,
    password: string
}

export const login = async (data: Login) => {
  try {
    const checkLogin = await axios.post("http://localhost:3000/auth/login", data);
    return checkLogin.data;
  } catch (err) {
    throw new Error("not found teachers");
  }
};
