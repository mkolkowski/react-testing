import React from 'react';
import InvertColorButton from './InvertColorButton';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store'

test('test', () => {
    const mockStore = configureStore();
    let store = mockStore({ value: false });

    const component = renderer.create(
        <InvertColorButton store={store} />
    );
    let tree = component.toJSON(); 
     expect(tree).toMatchSnapshot();

    tree.children[1].props.onClick();
    
    expect(tree.children[0].props.value, true);
});