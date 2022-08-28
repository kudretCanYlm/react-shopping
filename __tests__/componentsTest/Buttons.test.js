import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import IconButton from 'components/base/buttons/IconButton';
import { BsAlignBottom } from 'react-icons/bs';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('IconButtonTest', () => {
  it('render correctly', () => {
    const component = renderer
      .create(
        <IconButton onClick={() => {}} text="test">
          <BsAlignBottom fontSize={20} />
        </IconButton>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('subrenders correctly', () => {
    const subRender = <BsAlignBottom fontSize={20} />;

    const button = shallow(
      <IconButton onClick={() => {}} text="test">
        {subRender}
      </IconButton>
    );

    expect(button.contains(subRender)).toEqual(true);
  });

  it('onClick working', () => {
    //values
    let text = 'not clicked';
    const textAfter = 'clicked';

    //our onClick function
    const fun = () => {
      text = textAfter;
    };

    const component = renderer.create(
      <IconButton className="test-class" onClick={fun} text="test">
        <BsAlignBottom fontSize={20} />
      </IconButton>
    );

    let tree = component.toJSON();

    // manually trigger the callback
    renderer.act(() => {
      tree.props.onClick();
    });

    expect(text).toEqual(textAfter);
  });

  it('there is our className and text', () => {
    const className = 'test-className';
    const text = 'example text';

    const button = shallow(
      <IconButton onClick={() => {}} text={text} className={className}>
        <BsAlignBottom fontSize={20} />
      </IconButton>
    );

    expect(button.hasClass(className)).toEqual(true);
    expect(button.contains(text)).toEqual(true);
  });
});
