const SalesCardInfo = ({ title, info, className }) => {
  return (
    <div className={`sales-card-info ${className}`}>
      <h1>{title}</h1>
      <span>{info}</span>
    </div>
  );
};

export default SalesCardInfo;
