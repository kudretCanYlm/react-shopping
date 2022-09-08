import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
//components
import BlankLink from 'components/base/links/Blanklink';
import { MemoryRouter, Router } from 'react-router-dom';
import BorderIconLink from 'components/base/links/BorderIconLink';
import { DiAtom, DiApple } from 'react-icons/di';
import ButtonLink from 'components/base/links/ButtonLink';
import IconLink from 'components/base/links/IconLink';
import TextLink from 'components/base/links/TextLink';

Enzyme.configure({ adapter: new Adapter() });

//variables
const blankHref = 'www.youtube.com/';
const longBlankHref = 'https://www.npmjs.com/package/webpack-bundle-analyzer';
const linkClassName = 'test classname';
const history = createMemoryHistory({ initialEntries: ['/home'] });
const to_1 = '/test';
const to_2 = '/main';
const icon = <DiAtom fontSize={20} color="red" />;
const notContainIcon = <DiApple fontSize={30} color="red" />;
const linkText = 'Click Here';
const notContainButtonText = "Don't Click Here";

describe('BlankLinkTest', () => {
  it('render correctly', () => {
    const component = renderer
      .create(<BlankLink className={linkClassName} href={blankHref} />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('it has my className,href,href text', () => {
    const linkCom = shallow(<BlankLink className={linkClassName} href={blankHref} />);

    expect(linkCom.hasClass(linkClassName)).toEqual(true);
    expect(linkCom.html()).toContain(`href=\"https://${blankHref}\"`);
    expect(linkCom.html()).toContain(blankHref);

    expect(linkCom.hasClass('not include ClassName')).toEqual(false);
    expect(linkCom.html()).not.toContain(`href=\"${blankHref}\"`);
    expect(linkCom.html()).not.toContain('https://www.npmjs.com/package/webpack-bundle-analyzer');
  });

  it("it hasn't href text length more 20", () => {
    const linkCom = shallow(<BlankLink className={linkClassName} href={longBlankHref} />);

    expect(linkCom.children(0).contains(longBlankHref.substring(0, 20))).toEqual(true);
    expect(linkCom.children(0).contains(longBlankHref)).toEqual(false);
  });
});

describe('BorderIconLinkTest', () => {
  it('render correctly', () => {
    const component = renderer.create(
      <MemoryRouter history={history}>
        <BorderIconLink className={linkClassName} to={to_1}>
          {icon}
        </BorderIconLink>
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });

  it('it has my children,route and className', () => {
    const linkCom = shallow(
      <MemoryRouter history={history}>
        <BorderIconLink className={linkClassName} to={to_1}>
          {icon}
        </BorderIconLink>
      </MemoryRouter>
    );

    expect(linkCom.contains(icon)).toEqual(true);
    expect(linkCom.html()).toContain(`href=\"${to_1}\"`);
    expect(linkCom.children().hasClass(linkClassName)).toEqual(true);

    expect(linkCom.contains(notContainIcon)).toEqual(false);
    expect(linkCom.html()).not.toContain(`href=\"${to_2}\"`);
    expect(linkCom.children().hasClass('not include ClassName')).toEqual(false);
  });
});

describe('ButtonLinkTest', () => {
  it('render correctly', () => {
    const component = renderer
      .create(
        <MemoryRouter history={history}>
          <ButtonLink className={linkClassName} to={to_1}>
            {linkText}
          </ButtonLink>
        </MemoryRouter>
      )
      .toJSON();

    expect(component).toMatchSnapshot(component);
  });

  it('it has my children,route and className', () => {
    const linkCom = shallow(
      <MemoryRouter history={history}>
        <ButtonLink className={linkClassName} to={to_1}>
          {linkText}
        </ButtonLink>
      </MemoryRouter>
    );

    expect(linkCom.contains(linkText)).toEqual(true);
    expect(linkCom.html()).toContain(`href=\"${to_1}\"`);
    expect(linkCom.children().hasClass(linkClassName)).toEqual(true);

    expect(linkCom.contains(notContainButtonText)).toEqual(false);
    expect(linkCom.html()).not.toContain(`href=\"${to_2}\"`);
    expect(linkCom.children().hasClass('not include ClassName')).toEqual(false);
  });
});

describe('IconLinkTest', () => {
  it('render correctly', () => {
    const component = renderer
      .create(
        <MemoryRouter history={history}>
          <IconLink text={linkText} to={to_1} className={linkClassName}>
            {icon}
          </IconLink>
        </MemoryRouter>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });

  it('it has my children ,text ,route and className', () => {
    const linkCom = shallow(
      <MemoryRouter history={history}>
        <IconLink text={linkText} to={to_1} className={linkClassName}>
          {icon}
        </IconLink>
      </MemoryRouter>
    );

    expect(linkCom.contains(icon)).toEqual(true);
    expect(linkCom.html()).toContain(linkText);
    expect(linkCom.html()).toContain(`href=\"${to_1}\"`);
    expect(linkCom.children().hasClass(linkClassName)).toEqual(true);

    expect(linkCom.contains(notContainIcon)).toEqual(false);
    expect(linkCom.html()).not.toContain(notContainButtonText);
    expect(linkCom.html()).not.toContain(`href=\"${to_2}\"`);
    expect(linkCom.children().hasClass('not include ClassName')).toEqual(false);
  });
});

describe('TextLinkTest', () => {

  it("render correctly", () => {
    const component = renderer.create(
      <MemoryRouter history={history}>
        <TextLink className={linkClassName} to={to_1}>
          {linkText}
        </TextLink>
      </MemoryRouter>
    )
  })

  it("it has my children,route and className", () => {

    const linkCom = shallow(
      <MemoryRouter history={history}>
        <TextLink className={linkClassName} to={to_1}>
          {linkText}
        </TextLink>
      </MemoryRouter>
    )

    expect(linkCom.html()).toContain(linkText);
    expect(linkCom.html()).toContain(`href=\"${to_1}\"`);
    expect(linkCom.children().hasClass(linkClassName)).toEqual(true);

    expect(linkCom.html()).not.toContain(notContainButtonText);
    expect(linkCom.html()).not.toContain(`href=\"${to_2}\"`);
    expect(linkCom.children().hasClass('not include ClassName')).toEqual(false);

  })
});
