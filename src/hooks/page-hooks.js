import { useEffect, useState } from 'react';
import $ from 'jquery';

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

const useScrollIsToBottomAbs = () => {
  const scrollEvent = () => {
    console.log(event);
    const { scrollHeight, scrollTop, clientHeight } = event.target;

    if (Math.abs(scrollHeight - clientHeight - scrollTop) < 1) {
      console.log('scrolled');
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', scrollEvent);
    scrollEvent();
    return () => document.removeEventListener('scroll', scrollEvent);
  }, []);
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

const useScrollIsInBottom = () => {
  const handleUserScroll = () => {
    // get scroll top value
    const scrollTop = document.documentElement.scrollTop;

    // get the entire height, including padding
    const scrollHeight = document.documentElement.scrollHeight;

    // check if user is near to the bottom of the body
    if (scrollTop + window.innerHeight + 50 >= scrollHeight) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleUserScroll);
    return () => {
      window.removeEventListener('scroll', handleUserScroll);
    };
  }, []);
};

const useScrollPositionTest = () => {
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

const useTitle = (title) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    return () => {
      document.title = prevTitle;
    };
  });
};

export {
  useScrollPosition,
  useScrollIsToBottom,
  useScrollIsInBottom,
  useTitle,
  useScrollIsToBottomAbs,
  useScrollPositionTest
};
