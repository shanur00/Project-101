import './App.css'
import Hero from './components/Hero';
import Navigation from './components/Navigation/Navigation';

export default function App() {
  return (
    <div className="antialiased">
      <div className="w-full min-h-screen relative bg-[#F7F5F3] overflow-x-hidden flex flex-col justify-start items-center">
        <div className="relative flex flex-col justify-start items-center w-full">
          {/* Main container with proper margins */}
          <div className="class-cointainerWithMargin">
            {/* Left vertical line */}
            <div className="class-line left-4 sm:left-6 md:left-8 lg:left-0 top-0"></div>

            {/* Right vertical line */}
            <div className="class-line right-4 sm:right-6 md:right-8 lg:right-0 top-0"></div>

            <div className="class-main class-commonFlex">
              {/* Navigation */}
              <Navigation/>

              {/* Hero Section */}
              <Hero/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}