import React from 'react';
import { SvgCss } from 'react-native-svg';
import theme from '../../utils/theme';

const src = `
<svg xmlns="http://www.w3.org/2000/svg" width="18.3" height="18.3" viewBox="0 0 18.3 18.3">
    <defs>
        <style>
            .cls-1{fill:#9cd9e4;stroke:#9cd9e4;stroke-width:.3px}
        </style>
    </defs>
    <path id="Profile" d="M16.727 12.939a11.568 11.568 0 0 0-2.822-1.7 15.347 15.347 0 0 1-2.167-1.21 7.61 7.61 0 0 0 1.887-4.575 7.191 7.191 0 0 0-.551-3.3C12.577 1.172 11.467 0 9 0S5.423 1.172 4.927 2.156a7.183 7.183 0 0 0-.552 3.3 7.6 7.6 0 0 0 1.887 4.575 15.272 15.272 0 0 1-2.168 1.21 11.577 11.577 0 0 0-2.822 1.7A5.533 5.533 0 0 0 0 16.477 1.5 1.5 0 0 0 1.5 18h15a1.5 1.5 0 0 0 1.5-1.523 5.535 5.535 0 0 0-1.273-3.538zm.04 3.824a.375.375 0 0 1-.268.112H1.5a.375.375 0 0 1-.266-.112.38.38 0 0 1-.108-.269 4.492 4.492 0 0 1 .943-2.759A11.43 11.43 0 0 1 4.6 12.25a12.338 12.338 0 0 0 2.437-1.4l.759-.718-.659-.81A6.51 6.51 0 0 1 5.5 5.458a6.219 6.219 0 0 1 .431-2.795A3.115 3.115 0 0 1 9 1.125a3.116 3.116 0 0 1 3.069 1.538 6.222 6.222 0 0 1 .431 2.8 6.506 6.506 0 0 1-1.635 3.865l-.659.81.759.717a12.364 12.364 0 0 0 2.437 1.4 11.379 11.379 0 0 1 2.53 1.485 4.384 4.384 0 0 1 .943 2.759.375.375 0 0 1-.108.264z" class="cls-1" transform="translate(.15 .15)"/>
</svg>
`;

const ProfileIcon: React.FC<{}> = (props): JSX.Element => (
  <SvgCss xml={src} {...props} />
);

ProfileIcon.defaultProps = {
  width: '25',
  height: '25',
  color: theme.lightGray
};

export default React.memo(ProfileIcon);
