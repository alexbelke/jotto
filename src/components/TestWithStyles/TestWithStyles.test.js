import React from 'react';
import Blabla, { TestWithStyles} from './TestWithStyles';
import {shallow, mount} from 'enzyme';
import {findByTestAttr} from '../../../test/testUtils';

const defaultProps = {
    guessedWords: [
        { guessedWord: 'train', letterMatchCount: 3 }
    ]
}

/**
 * Factory function to create a ShallowWrapper for the GuessedWords component. 
 * @function setup
 * @param {object} props - COmponent props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<TestWithStyles {...setupProps} />)
}

test('render without error', () => {
    const wrapper = setup();
    expect(wrapper).toHaveLength(1);
});

test('find test attribute', () => {
    const wrapper = setup();
    const div = findByTestAttr(wrapper, 'test-with-styles');
    console.log(wrapper.debug());
    expect(div).toHaveLength(1);
})

//console.log(component.debug());