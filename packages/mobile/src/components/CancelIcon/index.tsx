import React from 'react';
import { SvgCss } from 'react-native-svg';
import IconProps from './index.interface';
import theme from '../../utils/theme';

const src = `
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 14.92 14.92">
    <defs>
        <style>
            .cls-1{fill:none;stroke:#fff;stroke-linecap:round;stroke-width:1.3px}
        </style>
    </defs>
    <g id="Group_179" data-name="Group 179" transform="translate(-393.04 -261.04)">
        <path id="More" d="M11 7l-7 7 7-7-7-7 7 7 7-7-7 7 7 7z" class="cls-1" transform="translate(389.5 261.5)"/>
    </g>
</svg>
`;

const CancelIcon: React.FC<IconProps> = (props): JSX.Element => (
  <SvgCss xml={src} {...props} />
);

CancelIcon.defaultProps = {
  width: '22',
  height: '22',
  color: theme.white
};

export default React.memo(CancelIcon);
