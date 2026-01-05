import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react'; 
import CustomCursor from './components/CustomCursor';
import { useScroll } from './hooks/useScroll';

// --- DATA ---
const CHARACTERS = [
  { 
    id: 1, 
    name: "THE PROFESSOR", 
    role: "The Mastermind", 
    quote: "Time is greater than money.", 
    color: "#E50914",
    img: "/images/professor.jpg",
    backupImg: "https://images.unsplash.com/photo-1559582798-678dfc71ccd1?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    id: 2, 
    name: "TOKYO", 
    role: "The Narrator", 
    quote: "I am a ticking bomb.", 
    color: "#ffffff",
    img: "/images/tokyo.jpg",
    backupImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    id: 3, 
    name: "BERLIN", 
    role: "The Captain", 
    quote: "Betrayal is an inherent part of love.", 
    color: "#8B0000",
    img: "/images/berlin.jpg",
    backupImg: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop"
  },
  { 
    id: 4, 
    name: "NAIROBI", 
    role: "The Heart", 
    quote: "Let the matriarchy begin.", 
    color: "#E50914",
    img: "/images/nairobi.jpg",
    backupImg: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1000&auto=format&fit=crop"
  }
];

// --- COMPONENTS ---

const Preloader = ({ loading }) => {
  return (
    <div 
      className="preloader" 
      style={{ transform: loading ? 'translateY(0)' : 'translateY(-100%)' }}
    >
      <h1 className="cinematic-text loader-text">LOADING...</h1>
    </div>
  );
};

const AudioPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(new Audio('/bella_ciao.mp3'));

  const toggleAudio = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio file missing? Put bella_ciao.mp3 in public folder."));
    }
    setPlaying(!playing);
  };

  useEffect(() => {
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
    return () => audioRef.current.pause();
  }, []);

  return (
    <button onClick={toggleAudio} className="music-btn">
      {playing ? <Volume2 size={24} /> : <VolumeX size={24} />}
    </button>
  );
};

const Hero = ({ scrollY }) => {
  return (
    <section className="hero">
      <div className="vignette"></div>
      <div 
        className="hero-bg"
        style={{ transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0005})` }} 
      />
      <div className="hero-content" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
        <h2 className="hero-subtitle">NETFLIX ORIGINAL</h2>
        <h1 className="cinematic-text hero-title">MONEY <br /> HEIST</h1>
        
        {/* BUTTON CHANGED TO LINK */}
        <a 
          href="https://youtu.be/_InqQJRqGW4?si=sQt0Ydr5bvCHrP-3" 
          target="_blank" 
          rel="noopener noreferrer"
          className="trailer-btn"
        >
          WATCH TRAILER
        </a>
      </div>
    </section>
  );
};

const StickyCharacterSection = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const distance = -top;
      const totalScrollableDistance = height - viewportHeight;
      let percentage = distance / totalScrollableDistance;
      percentage = Math.max(0, Math.min(1, percentage));
      
      const newIndex = Math.min(CHARACTERS.length - 1, Math.floor(percentage * CHARACTERS.length));
      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeChar = CHARACTERS[activeIndex];

  return (
    <div ref={containerRef} className="sticky-wrapper">
      <div className="sticky-viewport">
        
        <div className="char-info">
             <h2 className="char-number">0{activeIndex + 1}</h2>
             
             <div className="char-details-container">
               {CHARACTERS.map((char, index) => (
                 <div 
                   key={char.id}
                   className="char-text-card"
                   style={{
                     opacity: index === activeIndex ? 1 : 0,
                     transform: index === activeIndex ? 'translateY(0)' : 'translateY(50px)',
                     pointerEvents: index === activeIndex ? 'all' : 'none',
                     filter: index === activeIndex ? 'blur(0)' : 'blur(10px)'
                   }}
                 >
                   <h3 className="cinematic-text char-name">{char.name}</h3>
                   <p className="char-role">{char.role}</p>
                   <p className="char-quote">"{char.quote}"</p>
                 </div>
               ))}
             </div>
        </div>

        <div className="char-image-section">
            {CHARACTERS.map((char, index) => (
              <div 
                key={char.id}
                className="char-img-wrapper"
                style={{
                  opacity: index === activeIndex ? 1 : 0,
                  transform: index === activeIndex ? 'scale(1)' : 'scale(1.1)',
                  zIndex: index === activeIndex ? 2 : 1
                }}
              >
                <img 
                  src={char.img} 
                  alt={char.name} 
                  className="char-img"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = char.backupImg;
                  }} 
                />
              </div>
            ))}
        </div>

      </div>
    </div>
  );
};

const MaskSection = () => {
  return (
    <section className="mask-section">
      <div 
        className="mask-bg" 
        style={{backgroundImage: "url('/images/dali_mask_bg.jpg')"}} 
      ></div>
      <div className="mask-content">
        <h2 className="cinematic-text mask-title">O PARTIGIANO</h2>
        <p style={{fontSize: '2rem', marginTop: '20px', fontWeight: 'bold', textShadow: '0 5px 15px rgba(0,0,0,0.8)'}}>
          The mask is not to hide. <br/> It is to Show.
        </p>
      </div>
    </section>
  );
}

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="cinematic-text" style={{ fontSize: '4rem', color: '#333' }}>BELLA CIAO</h2>
    </footer>
  );
}

// --- MAIN APP ---
function App() {
  const scrollY = useScroll();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  return (
    <>
      <Preloader loading={loading} />
      <div className="noise-overlay"></div>
      <CustomCursor />
      <AudioPlayer />
      
      <main>
        <Hero scrollY={scrollY} />
        <StickyCharacterSection />
        <MaskSection />
        <Footer />
      </main>
    </>
  );
}

export default App;