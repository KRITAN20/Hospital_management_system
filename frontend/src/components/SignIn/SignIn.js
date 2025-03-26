// import React, { useState } from "react";
// import { Box, Avatar, Typography, TextField, Button, CircularProgress } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import api from "../../api"; // Ensure you have the correct api path
// import { useAuth } from "../../AuthContext";
// import styles from "./SignIn.module.css";

// export default function SignIn() {
//   const { setUserType, setLoader, setAlert, setAlertMsg } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false); // For loading state
//   const navigate = useNavigate(); // For navigation to dashboard

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const postData = { email, password };

//     try {
//       setLoader(true); // Set loader to true to indicate loading state
//       const res = await api.signin(postData);

//       if (res.data.error) {
//         setLoader(false); // Set loader to false after response
//         setPassword(""); // Clear the password field
//         setAlertMsg(res.data.errorMsg); // Show error message
//         setAlert(true);
//       } else {
//         setLoader(false); // Set loader to false after response
//         setEmail(""); // Clear email field
//         setPassword(""); // Clear password field
//         const loggedUser = res.data.userType; // Get user type from response
//         const { accessToken, refreshToken } = res.data; // Get tokens

//         localStorage.setItem("accessToken", accessToken); // Store tokens
//         localStorage.setItem("refreshToken", refreshToken);

//         setUserType(loggedUser); // Set userType in context
//         navigate(`/dashboard/${loggedUser.toLowerCase()}`); // Redirect to dashboard based on user type
//       }
//     } catch (error) {
//       setLoader(false); // Set loader to false if an error occurs
//       setPassword("");
//       console.error(error);
//       setAlertMsg(error?.response?.data?.errorMsg || "An error occurred!");
//       setAlert(true);
//     }
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.col1}>
//         <Box component="form" className={styles.form} onSubmit={handleSubmit}>
//           <Avatar alt="auth logo" src="/authimg.png" sx={{ width: 100, height: 100 }} />
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>

//           {/* Email Field */}
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             type="email"
//             label="Email Address"
//             name="email"
//             value={email}
//             autoComplete="email"
//             autoFocus
//             onChange={(event) => setEmail(event.target.value)}
//           />

//           {/* Password Field */}
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />

//           {/* Submit Button */}
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//             disabled={loading} // Disable the button while loading
//           >
//             {loading ? <CircularProgress size={24} color="inherit" /> : "Sign In"} 
//           </Button>

//           <Link to="/signup" className={styles.linkBtn}>
//             {"Don't have an account? Sign Up"}
//           </Link>
//         </Box>
//       </div>
//       <div className={styles.col2}>
//         <img src="/medicine.svg" alt="doctor" draggable="false" />
//       </div>
//     </div>
//   );
// }
import React from "react";
import { Box, Avatar, Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./SignIn.module.css";

export default function SignIn() {
  const navigate = useNavigate(); // For navigation to dashboard

  const handleSubmit = (event) => {
    event.preventDefault();
    // Redirect to patient dashboard
    navigate("/dashboard/patient");
  };

  return (
    <div className={styles.container}>
      <Box component="form" className={styles.form} onSubmit={handleSubmit}>
        <Avatar alt="auth logo" src="/authimg.png" sx={{ width: 100, height: 100 }} />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        {/* Email Field */}
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          type="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />

        {/* Password Field */}
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
        />

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </div>
  );
}
