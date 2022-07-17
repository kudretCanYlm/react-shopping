import { BsGraphUp, BsGraphDown } from 'react-icons/bs';

const GraphUpDownIcon = ({ isToUp = false, className = '', fontSize = 40 }) => {
  return (
    <div className={`graph-up-down-icon ${className}`}>
      {isToUp ? (
        <BsGraphUp className="bs-graph-icon icon-up" fontSize={fontSize} />
      ) : (
        <BsGraphDown className="bs-graph-icon icon-down" fontSize={fontSize} />
      )}
    </div>
  );
};

export default GraphUpDownIcon;
