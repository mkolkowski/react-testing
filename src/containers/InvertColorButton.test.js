import React from 'react';
import TestUtils from 'react-dom/test-utils';
import InvertColorButton from './InvertColorButton';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import configureStore from 'redux-mock-store'

test('renders correctly', () => {
    //Arrange
    const mockStore = configureStore();
    let store = mockStore({ value: false });

    //Act
    const component = renderer.create(
        <InvertColorButton store={store} />
    );
    let tree = component.toJSON();

    //Assert
    expect(tree).toMatchSnapshot();
});

//hoc - don't have children using shallow (maybe: enzyme dive?)
describe('behave correctly - shallow, one level', () => {
    var getComponent = (initValue) => {
        const mockStore = configureStore();
        let store = mockStore({ value: initValue });

        const shallowRenderer = new ShallowRenderer();
        shallowRenderer.render(<InvertColorButton store={store} />);

        var component = shallowRenderer.getRenderOutput();
        return component;
    }

    test('value inverted to true - shallow, one level', () => {
        //Arrange
        const component = getComponent(false);
        console.log(component.props.children);

        //Act
        component.props.onClick();

        //Assert
        expect(component.props.store.getState().value, true);
    });

    test('value inverted to false - shallow, one level', () => {
        //Arrange
        const component = getComponent(true);

        //Act
        component.props.onClick();

        //Assert
        expect(component.props.store.getState().value, false);
    });
}
)


describe('behave correctly - simulate click', () => {
    var getComponent = (initValue) => {
        const mockStore = configureStore();
        let store = mockStore({ value: initValue });
        const component = renderer.create(
            <InvertColorButton store={store} />
        );
        return component;
    }

    test('value inverted to true - simulate click', () => {
        //Arrange
        const component = getComponent(false);

        //Act
        var button = component.root.findByType("button");
        TestUtils.Simulate.click(button);

        //Assert
        expect(component.root.findByType("input").props.value, true);
    });
});