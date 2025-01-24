// LoginPage.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Lock, User } from 'lucide-react';
import MedicalPlus3D from '../MedicalPlus3D';
import MedicalPatterns from '../MedicalPatterns'; // Create this SVG component

const LoginPage = () => {
    const [formData, setFormData] = useState({ emp_id: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
  
    // Add the missing submit handler
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setError('');
  
      try {
        // Simulated API call - replace with actual implementation
        await authAPI.login({
          emp_id: parseInt(formData.emp_id),
          password: formData.password
        });
        
        navigate('/dashboard', { replace: true });
      } catch (err) {
        setError('Invalid credentials. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
      setError('');
    };

      // Add this ripple effect handler
  const createRipple = (e) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${e.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const existingRipple = button.querySelector(".ripple");
    if (existingRipple) {
      existingRipple.remove();
    }

    button.appendChild(circle);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x">
      <MedicalPatterns className="absolute inset-0 w-full h-full opacity-10" />
      
      {/* Blurred Background Layer */}
      <div className="absolute inset-0 backdrop-blur-xl bg-white/10" />

      {/* Login Card */}
      <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4 
                      transition-all duration-300 hover:shadow-3xl border border-white/20
                      before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-400/20 before:to-purple-400/20 before:-z-10 before:rounded-2xl">
        
        {/* Logo Section */}
        <div className="text-center mb-8 space-y-4">
          <div className="flex justify-center mb-2 relative">
            <MedicalPlus3D className="drop-shadow-lg" />
            <h1 className="text-4xl font-bold text-gray-900 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              NAVY
            </h1>
          </div>
          <p className="text-gray-600 font-light tracking-wide">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Employee ID</label>
              <div className="relative group">
                <User className="h-5 w-5 text-gray-400 absolute left-3 top-3.5 transition-colors group-focus-within:text-blue-500" />
                <input
                  type="text"
                  name="emp_id"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-300 focus:border-blue-400 focus:outline-none transition-all bg-white/50"
                  placeholder="Enter your employee ID"
                  value={formData.emp_id}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative group">
                <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-3.5 transition-colors group-focus-within:text-blue-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-300 focus:border-blue-400 focus:outline-none transition-all bg-white/50"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 p-1 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={isLoading}
            onClick={createRipple}
            className="w-full py-3.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl 
                      hover:from-blue-600 hover:to-blue-700 transition-all relative overflow-hidden
                      transform hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-xl"
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </button>

          {/* Footer Links */}
          <div className="text-center pt-4">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;