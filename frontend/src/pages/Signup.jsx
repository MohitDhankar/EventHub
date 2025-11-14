import { useState } from "react";
import { User, Mail, Lock } from "lucide-react";
import Navigation from "../components/Navigation";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { registerUser } from "../api/authApi";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ name, email, password });
      toast({
        title: "Signup Successful",
        description: "You can now login to your account.",
      });
      navigate("/login");
    } catch (err) {
      toast({
        title: "Signup Failed",
        description: err.response?.data?.message || "Something went wrong",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <Navigation />

      <div className="flex justify-center items-center py-20 lg:py-28 px-6">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 lg:p-10 w-full max-w-md border border-white/20 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Create your <span className="text-purple-600">EventHub</span> account
          </h2>

          <form onSubmit={handleSignup} className="space-y-6">
            <div className="space-y-2">
              <label className="text-gray-700 text-sm font-medium flex items-center">
                <User className="w-5 h-5 mr-2" /> Full Name
              </label>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 text-sm font-medium flex items-center">
                <Mail className="w-5 h-5 mr-2" /> Email
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-gray-700 text-sm font-medium flex items-center">
                <Lock className="w-5 h-5 mr-2" /> Password
              </label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3">
              Sign Up
            </Button>
          </form>

          <div className="my-6 flex items-center">
            <div className="flex-grow h-px bg-gray-300" />
            <span className="px-3 text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-300" />
          </div>

          <div className="space-y-4">
            <Button className="w-full flex items-center justify-center gap-3 border bg-white text-gray-800 hover:bg-gray-50 py-2">
              <FcGoogle className="text-2xl" /> Continue with Google
            </Button>

            <Button className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white py-2">
              <FaFacebookF className="text-lg" /> Continue with Facebook
            </Button>
          </div>

          <p className="text-center text-gray-600 text-sm mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-600 font-medium">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
