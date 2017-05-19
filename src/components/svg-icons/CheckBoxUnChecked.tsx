import * as React from 'react';
import SvgIcon from '../svg-icon/SvgIcon';

interface Props extends React.Props<CheckBoxUnChecked> {
    style: any;
};

export default class CheckBoxUnChecked extends React.Component<Props, {}>{
    public render() {
        return (
            <SvgIcon {...this.props}>
                <path
                    d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
            </SvgIcon>
        );
    }
};