import React from 'react';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
//componets
import CardImg from 'components/base/img/CardImg';
import LogoImg from 'components/base/img/LogoImg';
import MiniRadiusImg from 'components/base/img/MiniRadiusImg';
import ThreeImg from 'components/base/img/ThreeImg';

Enzyme.configure({ adapter: new Adapter() });

//varibles
const cardClassName = 'test classname';
const cardImgUrl_1 = 'https://i.pinimg.com/originals/c7/42/20/c74220fcf2f83f4249b03ed2a2a87016.jpg';
const cardImgUrl_2 = 'https://i.pinimg.com/originals/c7/42/20/c74220fcf2f83f4249b03ed2a2a87016.jpg';
const cardImgUrl_3 = 'https://i.pinimg.com/originals/c7/42/20/c74220fcf2f83f4249b03ed2a2a87016.jpg';

describe('CardImgTest', () => {
  it('render correctly', () => {
    const component = renderer
      .create(<CardImg className={cardClassName} imgUrl={cardImgUrl_1} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('it has my className and imgurl', () => {
    const imgCom = shallow(<CardImg className={cardClassName} imgUrl={cardImgUrl_1} />);

    expect(imgCom.hasClass(cardClassName)).toEqual(true);
    expect(imgCom.html()).toContain(`src=\"${cardImgUrl_1}\"`);

    expect(imgCom.hasClass('not include ClassName')).toEqual(false);
    expect(imgCom.html()).not.toContain(`src=\"wrongurl\"`);
  });
});

describe('LogoImgTest', () => {
  it('render as correctly', () => {
    const component = renderer
      .create(<LogoImg imgUrl={cardImgUrl_1} className={cardClassName} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('it has my className and imgurl', () => {
    const imgCom = shallow(<LogoImg imgUrl={cardImgUrl_1} className={cardClassName} />);

    expect(imgCom.hasClass(cardClassName)).toEqual(true);
    expect(imgCom.html()).toContain(`src=\"${cardImgUrl_1}\"`);

    expect(imgCom.hasClass('not include ClassName')).toEqual(false);
    expect(imgCom.html()).not.toContain(`src=\"wrongurl\"`);
  });
});

describe('MiniRadiusImgTest', () => {
  it('render as correctly', () => {
    const component = renderer
      .create(<MiniRadiusImg url={cardImgUrl_1} className={cardClassName} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('it has my className and url', () => {
    const imgCom = shallow(<MiniRadiusImg url={cardImgUrl_1} className={cardClassName} />);

    expect(imgCom.hasClass(cardClassName)).toEqual(true);
    expect(imgCom.html()).toContain(`src=\"${cardImgUrl_1}\"`);

    expect(imgCom.hasClass('not include ClassName')).toEqual(false);
    expect(imgCom.html()).not.toContain(`src=\"wrongurl\"`);
  });
});

describe('ThreeImgTest', () => {
  it('render as correctly', () => {
    const component = renderer
      .create(
        <ThreeImg
          img_1={cardImgUrl_1}
          img_2={cardImgUrl_2}
          img_3={cardImgUrl_3}
          className={cardClassName}
        />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('it has my className and images', () => {
    const imgCom = shallow(
      <ThreeImg
        img_1={cardImgUrl_1}
        img_2={cardImgUrl_2}
        img_3={cardImgUrl_3}
        className={cardClassName}
      />
    );

    expect(imgCom.hasClass(cardClassName)).toEqual(true);
    expect(imgCom.childAt(0).html()).toContain(`src=\"${cardImgUrl_1}\"`);
    expect(imgCom.childAt(0).html()).toContain(`src=\"${cardImgUrl_2}\"`);
    expect(imgCom.childAt(0).html()).toContain(`src=\"${cardImgUrl_3}\"`);

    expect(imgCom.hasClass('not include ClassName')).toEqual(false);
    expect(imgCom.childAt(0).html()).not.toContain(`src=\"wrongurl\"`);
  });
});
