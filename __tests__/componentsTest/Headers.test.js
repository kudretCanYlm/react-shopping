import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import ThinMidTitle from 'components/base/headers/ThinMidTitle';
import ThickMidTitle from 'components/base/headers/ThickMidTitle';

Enzyme.configure({ adapter: new Adapter() });

describe('ThinMidTitleTest', () => {
  it('render correctly', () => {
    const component = renderer
      .create(<ThinMidTitle className="test">Test title</ThinMidTitle>)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('has my className and text', () => {
    const titleText = 'test title';
    const titleClassName = 'test className';

    const title = shallow(<ThinMidTitle className={titleClassName}>{titleText}</ThinMidTitle>);

    expect(title.hasClass(titleClassName)).toEqual(true);
    expect(title.contains(titleText)).toEqual(true);

    expect(title.hasClass('not include ClassName')).toEqual(false);
    expect(title.contains('not include text')).toEqual(false);
  });
});

describe('ThickMidTitleTest', () => {
  it('render correctly', () => {
    const component = renderer
      .create(<ThickMidTitle className="test">Test component</ThickMidTitle>)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('has my className and text', () => {
    const titleText = 'test title';
    const titleClassName = 'test className';

    const title = shallow(<ThickMidTitle className={titleClassName}>{titleText}</ThickMidTitle>);

    expect(title.hasClass(titleClassName)).toEqual(true);
    expect(title.contains(titleText)).toEqual(true);

    expect(title.hasClass('not include ClassName')).toEqual(false);
    expect(title.contains('not include text')).toEqual(false);
  });
});
