const TextA = ({ children, color = 'purple' }) => {
  return <p className={'text-a ' + color}>{children}</p>;
};

export default TextA;
