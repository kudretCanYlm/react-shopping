import React from 'react';
import PropTypes from 'prop-types';

const LogoImg = ({ imgUrl, className = "" }) => {

    return (
        <div className={`logo-img flex-column flex-center-items ${className}`}>
            <img
                src={imgUrl}
            />
        </div>
    )
}

//prop-type
LogoImg.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default LogoImg;
