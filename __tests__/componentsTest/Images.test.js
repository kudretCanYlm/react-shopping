import React from 'react';
import Enzyme from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
//componets
import CardImg from 'components/base/img/CardImg';

Enzyme.configure({ adapter: new Adapter() });

//varibles
const cardClassName = 'test classname';
const cardImgUrl = 'https://i.pinimg.com/originals/c7/42/20/c74220fcf2f83f4249b03ed2a2a87016.jpg';

describe('CardImgTest', () => {
  it('render correctly', () => {
    const component = renderer
      .create(<CardImg className={cardClassName} imgUrl={cardImgUrl} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('it has my className and imgurl', () => {
    const imgCom = shallow(<CardImg className={cardClassName} imgUrl={cardImgUrl} />);

    expect(imgCom.hasClass(cardClassName)).toEqual(true);
    expect(imgCom.html()).toContain(`src=\"${cardImgUrl}\"`);

    expect(imgCom.hasClass('not include ClassName')).toEqual(false);
    expect(imgCom.html()).not.toContain(`src=\"wrongurl\"`);
  });
});

describe('LogoImgTest', () => {});
