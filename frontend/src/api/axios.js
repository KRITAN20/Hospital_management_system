import axios from "axios";

const handleSubmit = async (event) => {
  event.preventDefault();
  const postData = { email, password };

  try {
    const res = await axios.post("http://localhost:5000/api/auth/signup", postData);
    console.log("Signup success:", res.data);
  } catch (error) {
    console.error("Signup error:", error.response?.data?.errorMsg || error);
  }
};
