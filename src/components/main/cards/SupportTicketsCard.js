import ThinMidTitle from '../../base/headers/ThinMidTitle';
import PersonCard from './PersonCard';

const SupportTicketsCard = ({ personInfo = [], className = '' }) => {
  return (
    <div className={`support-tickets-card main-card flex-column ${className}`}>
      <ThinMidTitle className="title-margin-3 title-border-bottom-1">Support Tickets</ThinMidTitle>
      {personInfo.length > 0 ? (
        personInfo.map((person, id) => (
          <PersonCard
            name={person.name}
            imgUrl={person.imgUrl}
            key={id}
            linkTo={`member/${person.id}`}
            className={'title-margin-2'}
          />
        ))
      ) : (
        <ThinMidTitle>There isn't nothing</ThinMidTitle>
      )}
    </div>
  );
};

export default SupportTicketsCard;
