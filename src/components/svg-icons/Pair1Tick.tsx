import * as React from 'react';
import SvgIcon from '../svg-icon/SvgIcon';


interface Props extends React.Props<Pair1Cross> {
};

export default class Pair1Cross extends React.Component<Props, {}>{
    public render() {
        return (
            <SvgIcon {...this.props}>
                <path fillOpacity="1" stroke="#000000" strokeOpacity="1" strokeWidth="2" strokeDasharray="none" strokeLinejoin="round" strokeLinecap="butt" strokeDashoffset="" fillRule="nonzero" opacity="1" markerStart="" markerMid="" markerEnd="" d="M2.481246050028062,10.343754522735367L7.168746154801851,14.25000461004686"/>
                <path fill="#4a90d6" fillOpacity="1" stroke="#000000" strokeOpacity="1" strokeWidth="2" strokeDasharray="none" strokeLinejoin="round" strokeLinecap="butt" strokeDashoffset="" fillRule="nonzero" opacity="1" markerStart="" markerMid="" markerEnd="" d="M6.700000663101633,14.249992158264035L14.8250005420297,4.249992307275647"/>
            </SvgIcon>
        );
    }
};