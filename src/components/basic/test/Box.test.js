import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/react';
import { Box } from '../Box';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

//*
describe("Box tests", () => {
  it('display should be inline', () => {
    const tree = renderer.create(<Box $display="inline" />).toJSON();
    expect(tree).toHaveStyleRule("display: inline;");
  });

  it('border-radius should be 2rem', () => {
    const tree = renderer.create(<Box $radius="2rem" />).toJSON();
    expect(tree).toHaveStyleRule("border-radius: 2rem;");
  });

  it('background-color should be #AAA', () => {
    const tree = renderer.create(<Box $color="#AAA" />).toJSON();
    expect(tree).toHaveStyleRule("background-color: #AAA;");
  });

  it('border should be 1px solid green', () => {
    const tree = renderer.create(<Box $border="1px solid green" />).toJSON();
    expect(tree).toHaveStyleRule("border: 1px solid green;");
  });

  it('padding should be 5rem', () => {
    const tree = renderer.create(<Box $padding="5rem" />).toJSON();
    expect(tree).toHaveStyleRule("padding: 5rem;");
  });

  it('margin should be 5rem', () => {
    const tree = renderer.create(<Box $margin="5rem" />).toJSON();
    expect(tree).toHaveStyleRule("margin: 5rem;");
  });

  it('width should be 10rem', () => {
    const tree = renderer.create(<Box $width="10rem" />).toJSON();
    expect(tree).toHaveStyleRule("width: 10rem;");
  });

  it('height should be 20rem', () => {
    const tree = renderer.create(<Box $height="20rem" />).toJSON();
    expect(tree).toHaveStyleRule("height: 20rem;");
  });

  it('index should be 99', () => {
    const tree = renderer.create(<Box $zindex="99" />).toJSON();
    expect(tree).toHaveStyleRule("z-index: 99;");
  });
});

//*/

describe("Box inverted tests", () => {

  it("display shouldn't be block", () => {
    const tree = renderer.create(<Box $display="inline" />).toJSON();
    expect(tree).not.toHaveStyleRule("display: block;");
  });

  it("border-radius shouldn't be 3rem", () => {
    const tree = renderer.create(<Box $radius="2rem" />).toJSON();
    expect(tree).not.toHaveStyleRule("border-radius: 3rem;");
  });

  it("background-color shouldn't be #BBB", () => {
    const tree = renderer.create(<Box $color="#AAA" />).toJSON();
    expect(tree).not.toHaveStyleRule("background-color: #BBB;");
  });

  it("border shouldn't be 1px solid red", () => {
    const tree = renderer.create(<Box $border="1px solid green" />).toJSON();
    expect(tree).not.toHaveStyleRule("border: 1px solid red;");
  });

  it("padding shouldn't be 10rem", () => {
    const tree = renderer.create(<Box $padding="5rem" />).toJSON();
    expect(tree).not.toHaveStyleRule("padding: 10rem;");
  });

  it("margin shouldn't be 51rem", () => {
    const tree = renderer.create(<Box $margin="5rem" />).toJSON();
    expect(tree).not.toHaveStyleRule("margin: 51rem;");
  });

  it("width shouldn't be 11rem", () => {
    const tree = renderer.create(<Box $width="10rem" />).toJSON();
    expect(tree).not.toHaveStyleRule("width: 11rem;");
  });

  it("height shouldn't be 10rem", () => {
    const tree = renderer.create(<Box $height="20rem" />).toJSON();
    expect(tree).not.toHaveStyleRule("height: 10rem;");
  });

  it("index shouldn't be 1", () => {
    const tree = renderer.create(<Box $zindex="99" />).toJSON();
    expect(tree).not.toHaveStyleRule("z-index: 1;");
  });
});
//*/