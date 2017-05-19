import * as React from 'react';
import SvgIcon from '../svg-icon/SvgIcon';


interface Props extends React.Props<Pair1Tick> {
};

export default class Pair1Tick extends React.Component<Props, {}>{
    public render() {
        return (
            <SvgIcon {...this.props}>
                <path fill="#4a90d6" fillOpacity="1" stroke='#00bcd4' strokeOpacity="1" strokeWidth="2" strokeDasharray="none" strokeLinejoin="round" strokeLinecap="butt" strokeDashoffset="" fillRule="nonzero" opacity="1" markerStart="" markerMid="" markerEnd="" d="M1.075000746920665,0.49999236315500184L11.700000588595826,12.374992186203713"/>
                <path fill="#4a90d6" stroke='#00bcd4' strokeWidth="2" strokeDasharray="none" strokeLinejoin="round" strokeLinecap="butt" strokeDashoffset="" fillRule="nonzero" markerStart="" markerMid="" markerEnd="" d="M-0.17499923445288343,11.124992204830164L11.700000588595826,0.49999236315500184"/>
            </SvgIcon>
        );
    }
};