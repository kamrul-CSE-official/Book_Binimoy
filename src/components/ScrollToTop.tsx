import { useEffect, useState } from 'react';
import { GrLinkTop } from 'react-icons/gr';

export default function ScrollToTop() {
  const [scrollTopBtn, setScrollTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 380) {
        setScrollTopBtn(true);
      } else {
        setScrollTopBtn(false);
      }
    });
  }, []);

  function scrollUp() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  return (
    <div>
      {scrollTopBtn && (
        <button
          onClick={scrollUp}
          title="Scroll Up"
          className="btn rounded-full border border-accent bg-black"
        >
          <GrLinkTop color="white" size={18} />
        </button>
      )}
    </div>
  );
}
