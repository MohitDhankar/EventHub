import { useState } from "react";
import { fireConfetti } from "../utils/useConfetti";
import { toast } from "react-hot-toast";
import Button from "./Button";
import { registerUser, loginUser } from "../api/authApi";

const AuthModal = ({ isOpen, onClose, mode, onModeChange }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await registerUser(formData);
      fireConfetti();
      toast.success("Account created successfully 🎉");
      setTimeout(() => {
        onClose();
        setFormData({ name: "", email: "", password: "" });
      }, 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser({
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem("token", data.token);
      fireConfetti();
      toast.success("Welcome back 🎉");
      setTimeout(() => {
        onClose();
        setFormData({ name: "", email: "", password: "" });
        window.location.reload(); // or navigate to /profile if using react-router
      }, 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 shadow-xl max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">
          {mode === "login" ? "Login" : "Sign Up"}
        </h2>

        <form
          onSubmit={mode === "login" ? handleLogin : handleSignup}
          className="space-y-4"
        >
          {mode === "signup" && (
            <input
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="w-full border rounded p-3"
              required
            />
          )}

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full border rounded p-3"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            className="w-full border rounded p-3"
            required
          />

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white"
          >
            {mode === "login" ? "Login" : "Sign Up"}
          </Button>
        </form>

        <p className="text-sm text-gray-500 mt-4 text-center">
          {mode === "login" ? "Don't have an account?" : "Already registered?"}{" "}
          <button
            className="text-purple-600 font-medium"
            onClick={() =>
              onModeChange(mode === "login" ? "signup" : "login")
            }
          >
            {mode === "login" ? "Sign up" : "Login"}
          </button>
        </p>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AuthModal;
