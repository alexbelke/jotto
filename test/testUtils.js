import checkPropTypes from 'check-prop-types';

/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper  - Enzyme shallow wrapper to search within.
 * @param {String} val - Value of data-test arrtibute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`);
}

export const checkProps = (component, conformingProps) => {
    const propsError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name);
    expect(propsError).toBeUndefined();
}