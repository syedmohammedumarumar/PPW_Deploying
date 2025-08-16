import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 100);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
      <style>{`
        .typing-animation {
          animation: typeWriter 3s steps(20) infinite;
        }
        
        .typing-animation-delay-1 {
          animation: typeWriter 2s steps(15) infinite;
          animation-delay: 1s;
        }
        
        .typing-animation-delay-2 {
          animation: typeWriter 2.5s steps(18) infinite;
          animation-delay: 2s;
        }
        
        .typing-animation-delay-3 {
          animation: typeWriter 3s steps(25) infinite;
          animation-delay: 3s;
        }
        
        @keyframes typeWriter {
          0% { width: 0; }
          70% { width: 100%; }
          100% { width: 100%; }
        }
        
        .terminal-line {
          overflow: hidden;
          white-space: nowrap;
        }
        
        .coding-boy {
          animation: bounce 2s ease-in-out infinite;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        .floating-code {
          animation: float 4s ease-in-out infinite;
        }
        
        .floating-code:nth-child(2) {
          animation-delay: -1s;
        }
        
        .floating-code:nth-child(3) {
          animation-delay: -2s;
        }
        
        .floating-code:nth-child(4) {
          animation-delay: -3s;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.5;
          }
          25% {
            transform: translateY(-20px) rotate(2deg);
            opacity: 1;
          }
          50% {
            transform: translateY(-40px) rotate(-1deg);
            opacity: 0.7;
          }
          75% {
            transform: translateY(-20px) rotate(1deg);
            opacity: 1;
          }
        }
        
        .keyboard-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
          from {
            box-shadow: 0 0 5px #3b82f6;
          }
          to {
            box-shadow: 0 0 20px #3b82f6, 0 0 30px #3b82f6;
          }
        }

        .loading-text {
          animation: loadingDots 1.5s ease-in-out infinite;
        }
        
        @keyframes loadingDots {
          0%, 80%, 100% {
            opacity: 1;
          }
          40% {
            opacity: 0.5;
          }
        }
      `}</style>

      <div className="max-w-4xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Code Editor */}
        <div className="bg-gray-900 rounded-lg border border-gray-700 mb-6 sm:mb-8">
          {/* Editor header */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-gray-800 rounded-t-lg border-b border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1 sm:space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-xs sm:text-sm ml-2 sm:ml-4">portfolio.js</span>
            </div>
          </div>
          
          {/* Code content */}
          <div className="p-3 sm:p-4 lg:p-6 font-mono text-xs sm:text-sm space-y-1 sm:space-y-2">
            <div className="text-purple-400 terminal-line typing-animation">
              <span className="text-blue-400">const</span> <span className="text-yellow-300">portfolio</span> = <span className="text-purple-400">()</span> <span className="text-blue-400">=&gt;</span> <span className="text-purple-400">&#123;</span>
            </div>
            <div className="pl-2 sm:pl-4 text-green-400 terminal-line typing-animation-delay-1">
              <span className="text-blue-400">return</span> <span className="text-yellow-300">&quot;Welcome to Umar's Portfolio&quot;</span><span className="text-purple-400">;</span>
            </div>
            <div className="text-purple-400 terminal-line typing-animation-delay-2">&#125;</div>
            <div className="text-gray-500 terminal-line typing-animation-delay-2">
              // Initializing portfolio...
            </div>
            <div className="text-orange-400 terminal-line typing-animation-delay-3">
              <span className="text-yellow-300">console</span><span className="text-purple-400">.</span><span className="text-green-400">log</span><span className="text-purple-400">(</span><span className="text-yellow-300">&quot;Portfolio loaded successfully!&quot;</span><span className="text-purple-400">)</span>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-lg sm:text-xl lg:text-2xl text-blue-400 font-mono loading-text">
            Loading Umar's Portfolio...
          </h2>
        </div>

        {/* Simple Progress Bar */}
        <div className="flex flex-col items-center px-4">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-gray-800 rounded-full h-2 mb-3 sm:mb-4">
            <div 
              className="bg-gradient-to-r from-blue-400 to-blue-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-gray-300 text-base sm:text-lg">{progress}%</div>
        </div>
        
      </div>
    </div>
  );
};

export default LoadingScreen;