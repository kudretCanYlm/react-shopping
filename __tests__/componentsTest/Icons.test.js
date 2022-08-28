import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
//components
import { AiFillClockCircle, AiFillApple } from 'react-icons/ai';
import ArrowUpDownIcon from 'components/base/icons/ArrowUpDownIcon';
import BorderIcon from 'components/base/icons/BorderIcon';
import GraphUpDownIcon from 'components/base/icons/GraphUpDownIcon';

Enzyme.configure({ adapter: new Adapter() });

//varibles
const iconClassName = 'test className';
const iconfontSize = 20;
var textBefore = 'test';
const textAfter = 'test clicked';

describe('ArrowUpDownIconTest', () => {
  it('render correctly', () => {
    const component = renderer
      .create(<ArrowUpDownIcon className={iconClassName} fontSize={iconfontSize} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('it has my className and fontsize', () => {
    const iconCom = shallow(<ArrowUpDownIcon className={iconClassName} fontSize={iconfontSize} />);

    expect(iconCom.html()).toContain(`font-size=\"${iconfontSize}\"`);
    expect(iconCom.hasClass(iconClassName)).toEqual(true);

    expect(iconCom.html()).not.toContain(`font-size=\"40\"`);
    expect(iconCom.hasClass('not include ClassName')).toEqual(false);
  });
});

describe('BorderIconTest', () => {
  const children = <AiFillClockCircle fontSize={20} />;
  const notChildren = <AiFillApple fontSize={20} />;

  const onClick = () => {
    textBefore = textBefore + ' clicked';
  };

  it('render correctly and work my onClick function', () => {
    const component = renderer
      .create(
        <BorderIcon onClick={onClick} className={iconClassName}>
          {children}
        </BorderIcon>
      )
      .toJSON();

    renderer.act(() => {
      component.props.onClick();
    });

    expect(component).toMatchSnapshot();
    expect(textBefore).toEqual(textAfter);
  });

  it('it has my className and my children', () => {
    const iconCom = shallow(
      <BorderIcon onClick={onClick} className={iconClassName}>
        {children}
      </BorderIcon>
    );

    expect(iconCom.hasClass(iconClassName)).toEqual(true);
    expect(iconCom.containsMatchingElement(children)).toEqual(true);

    expect(iconCom.hasClass('not include ClassName')).toEqual(false);
    expect(iconCom.containsMatchingElement(notChildren)).toEqual(false);
  });
});

describe('GraphUpDownIconTest', () => {
  it('render correctly', () => {
    const component = renderer
      .create(<GraphUpDownIcon className={iconClassName} fontSize={iconfontSize} isToUp />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('it has my className and my fontSize', () => {
    const iconCom = shallow(
      <GraphUpDownIcon className={iconClassName} fontSize={iconfontSize} isToUp />
    );

    expect(iconCom.hasClass(iconClassName)).toEqual(true);
    expect(iconCom.html()).toContain(`font-size=\"${iconfontSize}\"`);

    expect(iconCom.hasClass('not include ClassName')).toEqual(false);
    expect(iconCom.html()).not.toContain(`font-size=\"40\"`);
  });

  it('istoUp=true working', () => {
    const iconCom = shallow(
      <GraphUpDownIcon className={iconClassName} fontSize={iconfontSize} isToUp={true} />
    );

    expect(iconCom.children().hasClass('icon-up')).toEqual(true);
    expect(iconCom.children().hasClass('icon-down')).toEqual(false);
  });

  it('isToUp=false working', () => {
    const iconCom = shallow(
      <GraphUpDownIcon className={iconClassName} fontSize={iconfontSize} isToUp={false} />
    );

    expect(iconCom.children().hasClass('icon-down')).toEqual(true);
    expect(iconCom.children().hasClass('icon-up')).toEqual(false);
  });
});
