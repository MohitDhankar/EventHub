const WavyBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      {/* Darker animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-pink-200 to-blue-200 animate-gradient-shift bg-[length:400%_400%]"></div>
      
      {/* Enhanced glittering overlay with darker tones */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/40 to-transparent animate-shimmer bg-[length:200%_100%]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-400/40 to-transparent animate-shimmer bg-[length:200%_100%]" style={{animationDelay: '1s'}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent animate-shimmer bg-[length:200%_100%]" style={{animationDelay: '2s'}}></div>
      </div>

      {/* More realistic wavy patterns with slower, smoother animation */}
      <svg className="absolute inset-0 w-full h-full" style={{animation: 'float 8s ease-in-out infinite'}} viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.6"/>
            <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.6"/>
          </linearGradient>
        </defs>
        <path d="M0,100L40,120C80,140,160,180,240,190C320,200,400,170,480,160C560,150,640,160,720,180C800,200,880,230,960,220C1040,210,1120,160,1160,135L1200,110L1200,800L1160,800C1120,800,1040,800,960,800C880,800,800,800,720,800C640,800,560,800,480,800C400,800,320,800,240,800C160,800,80,800,40,800L0,800Z" fill="url(#wave1)"/>
      </svg>

      <svg className="absolute inset-0 w-full h-full" style={{animation: 'float 10s ease-in-out infinite reverse', animationDelay: '2s'}} viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ec4899" stopOpacity="0.7"/>
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.7"/>
          </linearGradient>
        </defs>
        <path d="M0,250L40,260C80,270,160,290,240,310C320,330,400,350,480,340C560,330,640,290,720,280C800,270,880,290,960,310C1040,330,1120,350,1160,360L1200,370L1200,800L1160,800C1120,800,1040,800,960,800C880,800,800,800,720,800C640,800,560,800,480,800C400,800,320,800,240,800C160,800,80,800,40,800L0,800Z" fill="url(#wave2)"/>
      </svg>

<svg className="absolute inset-0 w-full h-full animate-float delay-[4s]" viewBox="0 0 1200 800" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333ea" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#db2777" stopOpacity="1.0"/>
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.8"/>
          </linearGradient>
        </defs>
        <path d="M0,400L40,410C80,420,160,440,240,450C320,460,400,460,480,445C560,430,640,400,720,390C800,380,880,390,960,410C1040,430,1120,460,1160,475L1200,490L1200,800L1160,800C1120,800,1040,800,960,800C880,800,800,800,720,800C640,800,560,800,480,800C400,800,320,800,240,800C160,800,80,800,40,800L0,800Z" fill="url(#wave3)"/>
      </svg>
    </div>
  );
};

export default WavyBackground;