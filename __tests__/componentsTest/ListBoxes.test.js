import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
//componets
import ListBoxTypeA from 'components/base/listboxes/ListBoxTypeA';

Enzyme.configure({ adapter: new Adapter() });

//variables
const listBoxClassName = 'test classname';
const listBoxName = 'test name';
let selectValue = 'no selected';
const listboxList = [
  {
    name: 'name-a',
    value: 'value-a'
  },
  {
    name: 'name-b',
    value: 'value-b'
  },
  {
    name: 'name-c',
    value: 'value-c'
  },
  {
    name: 'name-d',
    value: 'value-d'
  }
];

const onChangeSelect = (value) => {
  selectValue = value;
};

describe('ListBoxTypeA Test', () => {
  it('renderer correctly', () => {
    const component = renderer
      .create(
        <ListBoxTypeA
          className={listBoxClassName}
          name={listBoxName}
          list={listboxList}
          onChangeSelect={onChangeSelect}
        />
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('it has my className,name and list', () => {
    const ListBoxComponent = shallow(
      <ListBoxTypeA
        className={listBoxClassName}
        name={listBoxName}
        list={listboxList}
        onChangeSelect={onChangeSelect}
      />
    );

    expect(ListBoxComponent.hasClass(listBoxClassName)).toEqual(true);
    expect(ListBoxComponent.html()).toContain(`name=\"${listBoxName}\"`);

    ListBoxComponent.children().map((option, i) => {
      expect(option.html()).toContain(`value=\"${listboxList[i].value}\"`);
      expect(option.html()).toContain(listboxList[i].name);
    });
  });

  it('onClick work', () => {
    const ListBoxComponent = shallow(
      <ListBoxTypeA
        className={listBoxClassName}
        name={listBoxName}
        list={listboxList}
        onChangeSelect={onChangeSelect}
      />
    );

    ListBoxComponent.at(0).simulate('change', {
      // target: { value: listboxList[0].value, name:listboxList[0].name }
      selectedIndex: { index: 0, text: listboxList[0].name }
    });

    expect(selectValue).toEqual('te');
  });
});
