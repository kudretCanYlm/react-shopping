import { useEffect, useState } from 'react';

const useScrollPosition = () => {
  const [scrollsPossition, setscrollsPossition] = useState(0);
  useEffect(() => {
    const updateScrollY = () => {
      setscrollsPossition(window.pageYOffset);
    };

    window.addEventListener('scroll', updateScrollY);
    updateScrollY();
    return () => window.removeEventListener('scroll', updateScrollY);
  }, []);

  return scrollsPossition;
};

const useScrollIsToBottom = () => {
  const scrollPossitionY = useScrollPosition();

  const [lastscroll, setlastscroll] = useState({ possition: 0, last: false });

  if (lastscroll.possition > scrollPossitionY) {
    setlastscroll({ possition: scrollPossitionY, last: false });
    return lastscroll.last;
  } else if (lastscroll.possition < scrollPossitionY) {
    setlastscroll({ possition: scrollPossitionY, last: true });
    return lastscroll.last;
  } else {
    return lastscroll.last;
  }
};

export { useScrollPosition, useScrollIsToBottom };
