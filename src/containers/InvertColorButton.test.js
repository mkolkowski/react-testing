import React from 'react';
import InvertColorButton from './InvertColorButton';
import renderer from 'react-test-renderer';
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

describe('behave correctly', () => {
    var getComponent = (initValue) =>{
        const mockStore = configureStore();
        let store = mockStore({ value: initValue });
        const component = renderer.create(
            <InvertColorButton store={store} />
        );
        return component;
    }

    test('value inverted to true', () => {
        //Arrange
        const component = getComponent(false);

        //Act
        component.root.findByType("button").props.onClick();

        //Assert
        expect(component.root.findByType("input").props.value, true);
    });

    test('value inverted to false', () => {
       //Arrange
       const component = getComponent(true);

       //Act
       component.root.findByType("button").props.onClick();

       //Assert
       expect(component.root.findByType("input").props.value, false);
    });
}
)
