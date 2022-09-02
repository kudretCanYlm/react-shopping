import React from 'react';
import IconLink from 'components/base/links/IconLink';
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs';
import BorderIcon from 'components/base/icons/BorderIcon';
import { Link } from 'react-router-dom';

const DetailsFooter = () => {
  const iconFontSize = 25;

  return (
    <footer className="details-footer flex-column">
      <div className="footer-icons flex-row">
        <BorderIcon>
          <BsLinkedin fontSize={iconFontSize} className="icon-color-2" />
        </BorderIcon>
        <BorderIcon>
          <BsGithub fontSize={iconFontSize} className="icon-color-2" />
        </BorderIcon>
        <BorderIcon>
          <BsInstagram fontSize={iconFontSize} className="icon-color-2" />
        </BorderIcon>
      </div>
      <p>&copy; 2022 Kudret Can Yalım</p>
    </footer>
  );
};

export default DetailsFooter;
