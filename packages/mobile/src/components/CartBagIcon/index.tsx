import React from 'react';
import { SvgCss } from 'react-native-svg';
import theme from '../../utils/theme';

const src = `
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 17.647 22.2">
    <defs>
        <style>
            .cls-1{fill:#9cd9e4;stroke:#9cd9e4;stroke-width:.2px}
        </style>
    </defs>
    <path id="finished" d="M-1377.4-318.3a3.6 3.6 0 0 1-2.628-1.147 3.6 3.6 0 0 1-.944-2.708l.983-12.384a1.547 1.547 0 0 1 1.535-1.42h1.941v-.087a4.257 4.257 0 0 1 4.252-4.253 4.257 4.257 0 0 1 4.252 4.253v.087h1.94a1.547 1.547 0 0 1 1.535 1.422l.983 12.38a3.6 3.6 0 0 1-.943 2.71 3.6 3.6 0 0 1-2.629 1.147zm-1.3-16.139l-.983 12.383a2.271 2.271 0 0 0 .6 1.733 2.272 2.272 0 0 0 1.683.734h10.279a2.272 2.272 0 0 0 1.683-.734 2.27 2.27 0 0 0 .6-1.734l-.982-12.379a.253.253 0 0 0-.251-.234h-1.94v1.587a.645.645 0 0 1-.644.644.645.645 0 0 1-.644-.644v-1.587h-5.928v1.587a.644.644 0 0 1-.644.644.644.644 0 0 1-.644-.644v-1.587h-1.941a.252.252 0 0 0-.244.23zm3.479-1.608v.087h5.928v-.087a2.967 2.967 0 0 0-2.964-2.964 2.968 2.968 0 0 0-2.966 2.963zm1.4 11.182l-1.824-1.824a.752.752 0 0 1 0-1.065.754.754 0 0 1 1.065 0l1.292 1.292 3.361-3.361a.751.751 0 0 1 1.064 0 .752.752 0 0 1 0 1.065l-3.892 3.892a.75.75 0 0 1-.533.221.751.751 0 0 1-.537-.221z" class="cls-1" transform="translate(1381.082 340.401)"/>
</svg>
`;

const CartBagIcon: React.FC<{}> = (props): JSX.Element => (
  <SvgCss xml={src} {...props} />
);

CartBagIcon.defaultProps = {
  width: '28',
  height: '28',
  color: theme.lightGray
};

export default React.memo(CartBagIcon);
