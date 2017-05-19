import * as React from 'react';
import Transitions from '../styles/Transitions';
import CheckBoxUnChecked from '../svg-icons/CheckBoxUnChecked';
import CheckBoxChecked from '../svg-icons/CheckBoxChecked';

function getStyles(props) {
    return {
        root: {
            cursor: 'pointer',
            position: 'relative',
            overflow: 'visible',
            display: 'table',
            height: 'auto',
            width: '100%'
        },
        input: {
            position: 'absolute',
            cursor: 'inherit',
            pointerEvents: 'all',
            opacity: 0,
            width: '100%',
            height: '100%',
            zIndex: 2,
            left: 0,
            boxSizing: 'border-box',
            padding: 0,
            margin: 0
        },
        controls: {
            display: 'flex',
            width: '100%',
            height: '100%'
        },
        box: {
            position: 'absolute',
            opacity: 1,
            transition: Transitions.easeOut('1000ms', 'opacity', '200ms'),
        },
        boxWhenSwitched: {
            opacity: 0,
            transition: Transitions.easeOut('650ms', 'opacity', '150ms'),
        },
        wrap: {
            float: 'left',
            position: 'relative',
            display: 'block',
            flexShrink: 0,
            width: 24,
            height: 24,
            marginRight: 16,
            marginLeft: 0
        },
        label: {
            float: 'left',
            position: 'relative',
            display: 'block',
            width: 'calc(100% - 60px)',
            lineHeight: '24px',
        },
        check: {
            position: 'absolute',
            opacity: 0,
            transform: 'scale(0)',
            transitionOrigin: '50% 50%',
            transition: `${Transitions.easeOut('450ms', 'opacity', '0ms')}, ${Transitions.easeOut('0ms', 'transform', '450ms')}`,
            fill: '#00bcd4'
        },
        checkWhenSwitched: {
            opacity: 1,
            transform: 'scale(1)',
            transition: `${Transitions.easeOut('0ms', 'opacity', '0ms')}, ${Transitions.easeOut('800ms', 'transform', '0ms')}`
        }
    }
};

interface Props extends React.Props<Checkbox> {
    label : string;
    style: any;
    checkedIcon?: any;
    uncheckedIcon?: any;
};

export default class Checkbox extends React.Component<Props, {}>{
     private textInput: HTMLInputElement;

    state = {
        switched: false
    };

    handleChange = (event) => {
        const isInputChecked = this.textInput.checked;
        this.setState({switched: isInputChecked});
    };

    public render() {
        const styles = getStyles(this.props);
        const {label, style, checkedIcon, uncheckedIcon} = this.props;

        const inputElm = (<input
            ref={(ref) => this.textInput = ref}
            type="checkbox"
            style={styles.input}
            onChange={this.handleChange}/>);

        const labelElm = (
            <label style={styles.label}>
                {label}
            </label>
        );
        const rootStyle = {...styles.root, ...style};
        const switchedBoxStyles = this.state.switched && styles.boxWhenSwitched;
        const unCheckStyles = { ...styles.box, ...switchedBoxStyles };
        const switchedCheckStyles = this.state.switched && styles.checkWhenSwitched;
        const checkStyles = { ...styles.check, ...switchedCheckStyles };
        const unCheckedElement = uncheckedIcon
                                    ? React.cloneElement(uncheckedIcon, {style: {...unCheckStyles, ...uncheckedIcon.props.style}})
                                    : React.createElement(CheckBoxUnChecked, {style: unCheckStyles});
        const checkedElement = checkedIcon
                                    ? React.cloneElement(checkedIcon, {style: { ...checkStyles, ...checkedIcon.props.style}})
                                    : React.createElement(CheckBoxChecked, {style: checkStyles});
        const checkboxElement = (
            <div style={styles.wrap}>
                <div>
                    {unCheckedElement}
                    {checkedElement}
                </div>
            </div>
        );
        return (
            <div style={rootStyle}>
                {inputElm}
                <div style={styles.controls}>
                    {checkboxElement}
                    {labelElm}
                </div>
            </div>
        );
    }
};