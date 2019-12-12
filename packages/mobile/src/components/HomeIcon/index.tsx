import React from 'react';
import { SvgCss } from 'react-native-svg';
import theme from '../../utils/theme';

const src = `
<svg xmlns="http://www.w3.org/2000/svg" width="19.265" height="18.831" viewBox="0 0 19.265 18.831">
    <defs>
        <style>
            .cls-1{fill:#9cd9e4;stroke:#9cd9e4;stroke-width:.2px}
        </style>
    </defs>
    <path id="Home" d="M92.253 85.018l-8.838-7.746a.65.65 0 0 0-.857 0l-8.838 7.746a.65.65 0 0 0 .857.977l.684-.6v9.665a.65.65 0 0 0 .65.65h14.152a.65.65 0 0 0 .65-.65V85.4l.684.6a.65.65 0 0 0 .857-.977zm-10.766 9.393v-5.354h3v5.353h-3zm7.926-10.149v10.149h-3.625v-6a.65.65 0 0 0-.65-.65h-4.3a.65.65 0 0 0-.65.65v6h-3.626v-10.15l6.426-5.632 6.426 5.632s-.001-.002-.001 0z" class="cls-1" transform="translate(-73.355 -76.98)"/>
</svg>
`;

const HomeIcon: React.FC<{}> = (props): JSX.Element => (
  <SvgCss xml={src} {...props} />
);

HomeIcon.defaultProps = {
  width: '25',
  height: '25',
  color: theme.lightGray
};

export default React.memo(HomeIcon);
