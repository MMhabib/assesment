


const Banner =()=> {
    return (
        <div className="relative w-full h-80 bg-gradient-to-r from-stone-200 via-stone-100 to-stone-300 overflow-hidden">
          {/* Left side vertical text */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 text-stone-400 text-2xl tracking-widest">
            <div className="vertical-text">
              {Array.from("TIMELESS").map((letter, index) => (
                <div key={index} className="my-1">{letter}</div>
              ))}
            </div>
          </div>
          
          {/* Right side vertical text */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 text-stone-400 text-2xl tracking-widest">
            <div className="vertical-text">
              {Array.from("ELEGANCE").map((letter, index) => (
                <div key={index} className="my-1">{letter}</div>
              ))}
            </div>
          </div>
          
          {/* Main content with images */}
          <div className="flex justify-center items-center h-full px-20">
            {/* Left image - Red/Black outfit */}
            <div className="relative w-64 h-64 mx-2 bg-black">
              <img 
                src="/path/to/red-black-outfit.jpg" 
                alt="Model in red and black outfit" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Center image with text overlay */}
            <div className="relative w-64 h-64 mx-2 bg-gray-100">
              <img 
                src="/path/to/black-white-stripe-outfit.jpg" 
                alt="Model in black outfit with white stripes" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-0 w-full text-center">
                <p className="text-red-500 font-medium text-lg">It's your time to be</p>
                <p className="text-red-500 font-medium text-lg">yourself!</p>
              </div>
            </div>
            
            {/* Right image - Green/Black outfit */}
            <div className="relative w-64 h-64 mx-2 bg-black">
              <img 
                src="/path/to/green-black-outfit.jpg" 
                alt="Model in green and black outfit" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Add CSS for vertical text */}
          <style jsx>{`
            .vertical-text {
              writing-mode: vertical-lr;
              text-orientation: upright;
              letter-spacing: 0.5em;
            }
          `}</style>
        </div>
      );
    };
  export default Banner;