import React, { Component } from 'react';
import {withStyles} from '@material-ui/core/styles';
import {withSnackbar} from 'notistack';

export class TestWithStyles extends Component {
    render() {
        return (
            <div data-test="test-with-styles">test with styles</div>
        )
    }
        
}

//export default TestWithStyles;
//export default withStyles({})(TestWithStyles);
export default withStyles({})(withSnackbar(TestWithStyles));

export const TestStyles = TestWithStyles;
