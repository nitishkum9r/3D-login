import { useEffect } from 'react';

const MedicalPatterns = ({ className }) => {
  useEffect(() => {
    // Initialize animation on mount
    const elements = document.querySelectorAll('.medical-pattern path');
    elements.forEach((el, i) => {
      el.style.animation = `float 6s ease-in-out ${i * 0.2}s infinite`;
    });
  }, []);

  return (
    <svg 
      className={className}
      viewBox="0 0 1920 1080" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        
        .medical-pattern path {
          fill: rgba(255, 255, 255, 0.05);
          transition: fill 0.3s ease;
        }
      `}</style>

      <g className="medical-pattern" opacity="0.15">
        {/* Stethoscope */}
        <path d="M1823 421c-24.8 24.8-65 24.8-89.8 0l-47.9-47.9c-24.8-24.8-24.8-65 0-89.8 24.8-24.8 65-24.8 89.8 0l47.9 47.9c24.8 24.8 24.8 65 0 89.8z" />
        <path d="M1690 554l-47.9-47.9c-24.8-24.8-65-24.8-89.8 0-24.8 24.8-24.8 65 0 89.8l47.9 47.9c24.8 24.8 65 24.8 89.8 0 24.8-24.8 24.8-65 0-89.8z" />
        
        {/* Heart */}
        <path d="M1420 320c-40.7-46.2-107-50-151.8-9.2-44.9 40.8-48.9 107.3-8.2 153.5l79.5 90.4 79.5-90.4c40.7-46.2 36.7-112.7-8.2-153.5-44.8-40.8-111.1-37-151.8 9.2z" />
        
        {/* Pill */}
        <path d="M1150 450h200v60h-200z" transform="rotate(45 1150 450)" />
        <path d="M1150 450h200v60h-200z" transform="rotate(-45 1250 550)" />
        
        {/* Cross */}
        <path d="M800 300h120v320h-120z" transform="rotate(45 800 300)" />
        <path d="M800 300h120v320h-120z" transform="rotate(-45 920 300)" />
        
        {/* DNA Helix */}
        <path d="M250 600c50-30 100-30 150 0 50 30 100 30 150 0" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
              strokeLinecap="round" />
        <path d="M250 630c50 30 100 30 150 0 50-30 100-30 150 0" 
              stroke="currentColor" 
              strokeWidth="2" 
              fill="none"
              strokeLinecap="round" />
        
        {/* Medical Wave Pattern */}
        <path d="M0 800c100-50 200-50 300 0s200 50 300 0 200-50 300 0 200 50 300 0 200-50 300 0 200 50 300 0 200-50 300 0 200 50 300 0 200-50 300 0v280H0z" />
      </g>
    </svg>
  );
};

export default MedicalPatterns;