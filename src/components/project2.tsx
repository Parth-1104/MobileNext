import React, { useState, useEffect } from 'react';

const ProjectsComingSoon = () => {
  const [loaded, setLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Launch date - adjust this to your desired reveal date
  const launchDate = new Date('2025-03-19T00:00:00');
  
  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => setLoaded(true), 500);
    
    // Update countdown timer every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      
      // Calculate progress percentage (capped at 100%)
      const now = new Date().getTime();
      const startDate = new Date('2025-03-19T00:00:00').getTime();
      const total = launchDate.getTime() - startDate;
      const elapsed = now - startDate;
      const newProgress = Math.min(100, Math.max(0, (elapsed / total) * 100));
      setProgress(newProgress);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Calculate time remaining
  const timeRemaining = () => {
    const diff = launchDate.getTime() - currentTime.getTime();
    
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    return { days, hours, minutes, seconds };
  };

  const handleSubscribe = () => {
    if (email.trim() !== '' && email.includes('@')) {
      setShowSuccess(true);
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setEmail('');
      }, 5000);
    }
  };
  const handleClick2 = () => {
    window.open('https://forms.office.com/Pages/ResponsePage.aspx?id=9NpbLPKP2Uu9VHxQqyGVkHiDwdnGBnRJkHESRsFQ5jJUMzY0RzNBQTE2RzBZUzZXUkhHN0tYUzY4WC4u&origin=QRCode', '_blank');
  };
  
  const { days, hours, minutes, seconds } = timeRemaining();
  
  return (
    <section id='project2'>
    <div className="flex flex-col mt-[109px] mr-2 items-center justify-center min-h-screen bg-gray-50 p-4">
      <div 
        className={`max-w-4xl mx-auto transition-all duration-1000 ${
          loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
            Projects Coming Soon
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're working on exciting new initiatives. Stay tuned for our upcoming project reveals.
          </p>
        </div>
        
        {/* Placeholder for future projects */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12 p-8 text-center">
          <div className="mb-6">
            <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Innovation in Progress</h2>
          <p className="text-gray-600 mb-6">
          <div>
  <h3>
    Got an innovative app? Showcase it to industry leaders <br />  
    Register your app 
  </h3>

  <button 
  onClick={handleClick2}
  className="relative group bg-gradient-to-r mt-3  from-blue-500 to-blue-300 text-white font-bold  rounded-xl overflow-hidden transition-all duration-300 hover:scale-110 shadow-xl 
  md:py-4 md:px-10 md:text-lg text-sm px-6 py-3"
>
  <span className="relative z-10">Register Now</span>
</button>
</div>

          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="bg-blue-100 text-blue-800 rounded-full px-3 py-1">Innovation</span>
            <span className="bg-green-100 text-green-800 rounded-full px-3 py-1">Technology</span>
            <span className="bg-purple-100 text-purple-800 rounded-full px-3 py-1">Solutions</span>
            <span className="bg-yellow-100 text-yellow-800 rounded-full px-3 py-1">Enterprise</span>
          </div>
        </div>
        
        {/* Countdown to reveal */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Projects Reveal In:</h3>
          <div className="flex justify-center gap-4">
            <div className="w-20 h-20 flex flex-col items-center justify-center bg-white rounded-lg shadow p-2">
              <div className="text-2xl font-bold text-gray-800">{days}</div>
              <div className="text-xs text-gray-500 uppercase">Days</div>
            </div>
            <div className="w-20 h-20 flex flex-col items-center justify-center bg-white rounded-lg shadow p-2">
              <div className="text-2xl font-bold text-gray-800">{hours}</div>
              <div className="text-xs text-gray-500 uppercase">Hours</div>
            </div>
            <div className="w-20 h-20 flex flex-col items-center justify-center bg-white rounded-lg shadow p-2">
              <div className="text-2xl font-bold text-gray-800">{minutes}</div>
              <div className="text-xs text-gray-500 uppercase">Minutes</div>
            </div>
            <div className="w-20 h-20 flex flex-col items-center justify-center bg-white rounded-lg shadow p-2">
              <div className="text-2xl font-bold text-gray-800">{seconds}</div>
              <div className="text-xs text-gray-500 uppercase">Seconds</div>
            </div>
          </div>
        </div>
        
        {/* Progress indicator */}
        {/* <div className="w-full max-w-lg mx-auto mb-12">
          <div className="flex justify-between mb-2 text-sm text-gray-600">
            <span>Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div> */}
        
        {/* Newsletter signup with success message */}
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 mb-8 relative">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Be the First to Know</h3>
          <p className="text-gray-600 mb-4">Subscribe to receive notifications when we reveal our projects.</p>
          
          {/* Success message - shows only after clicking Notify Me */}
          {showSuccess && (
            <div className="absolute top-0 left-0 right-0 transform -translate-y-full mb-4">
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md transition-all duration-500 animate-fade-in">
                <div className="flex items-center">
                  <div className="py-1 mr-2">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Success!</p>
                    <p className="text-sm">Thank you for subscribing. We'll notify you when our projects launch.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button 
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors duration-300"
              onClick={handleSubscribe}
            >
              Notify Me
            </button>
          </div>
        </div>
        
        {/* Contact information */}
        <div className="text-center text-gray-600 text-sm">
          <p>Questions? Contact us at <span className="text-blue-600">info@bennett.edu.in</span></p>
        </div>
      </div>
      
      {/* Success message - alternative floating version */}
      {showSuccess && (
        <div className="fixed bottom-8 right-8 max-w-sm bg-white rounded-lg shadow-lg border-l-4 border-green-500 p-4 animate-slide-up">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">
                Successfully subscribed
              </h3>
              <div className="mt-2 text-sm text-green-700">
                <p>
                  Thank you for subscribing! We'll notify you when our new projects are revealed.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      )}
    </div>
    </section>
  );
};

export default ProjectsComingSoon;