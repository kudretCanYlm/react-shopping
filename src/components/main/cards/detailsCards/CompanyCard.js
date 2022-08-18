import React from 'react';
import PropTypes from 'prop-types';
import LogoImg from 'components/base/img/LogoImg';
import ScoreCard from './ScoreCard';
import BlankLink from 'components/base/links/Blanklink';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiInformationCircle } from 'react-icons/hi';
import BorderIconLink from 'components/base/links/BorderIconLink';
import ThreeImg from 'components/base/img/ThreeImg';
import { IMG_1, IMG_2, IMG_3 } from 'components/base/img/common/stock-images';

const CompanyCard = ({ companyDetails, className }) => {
  const fonstSize = 20;

  return (
    <div className={`company-card flex-column ${className}`}>
      <div className="top flex-row">
        <div className="left flex-row">
          <LogoImg imgUrl={companyDetails.imgUrl} className="logo" />
          <div className="left-content">
            <h2 className="left-text title-margin-2">{companyDetails.companyName}</h2>
            <p className="left-text">{companyDetails.address}</p>
            <div className="flex-row flex-center-items flex-start">
              <ScoreCard
                score={companyDetails.score}
                iconSize={fonstSize}
                className="icon-margin-top-1"
              />
              <BlankLink href={companyDetails.companyWebSite} className="icon-margin-left-1" />
            </div>
          </div>
        </div>
        <div className="right flex-column">
          <BorderIconLink to="/chat">
            <BsFillChatDotsFill fontSize={fonstSize} />
          </BorderIconLink>
          <BorderIconLink to="/information">
            <HiInformationCircle fontSize={fonstSize} />
          </BorderIconLink>
        </div>
      </div>
      <div className="center flex-row">
        {companyDetails.options.map((option, key) => (
          <OptionCart text={option.text} value={option.value} key={key} />
        ))}
      </div>
      <div className="bottom">
        <h3>About us</h3>
        <div className="about flex-row">
          <p>{companyDetails.about}</p>
          <ThreeImg img_1={IMG_1} img_2={IMG_2} img_3={IMG_3} className="icon-margin-left-1" />
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;

const OptionCart = ({ text, value }) => {
  return (
    <div className={`option-card flex-column`}>
      <h2>{value}</h2>
      <h6>{text}</h6>
    </div>
  );
};
