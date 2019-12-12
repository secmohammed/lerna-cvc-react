import React from 'react';
import { SvgCss } from 'react-native-svg';
import IconProps from './index.interface';
import theme from '../../utils/theme';

const src = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <defs>
        <style>
            .cls-1{opacity:.28}.cls-2{fill:none}.cls-3{fill:#9a8bc2}
        </style>
    </defs>
    <g id="outline-settings-24px" class="cls-1">
        <g id="Bounding_Boxes">
            <path id="Path_2441" d="M0 0h24v24H0z" class="cls-2" data-name="Path 2441"/>
        </g>
        <g id="Outline">
            <g id="Group_87" data-name="Group 87">
                <path id="Path_2442" d="M19.43 12.98a7.793 7.793 0 0 0 .07-.98 7.793 7.793 0 0 0-.07-.98l2.11-1.65a.5.5 0 0 0 .12-.64l-2-3.46a.5.5 0 0 0-.44-.25.467.467 0 0 0-.17.03l-2.49 1a7.306 7.306 0 0 0-1.69-.98l-.38-2.65A.488.488 0 0 0 14 2h-4a.488.488 0 0 0-.49.42l-.38 2.65a7.683 7.683 0 0 0-1.69.98l-2.49-1a.566.566 0 0 0-.18-.03.5.5 0 0 0-.43.25l-2 3.46a.493.493 0 0 0 .12.64l2.11 1.65a7.931 7.931 0 0 0-.07.98 7.931 7.931 0 0 0 .07.98l-2.11 1.65a.5.5 0 0 0-.12.64l2 3.46a.5.5 0 0 0 .44.25.467.467 0 0 0 .17-.03l2.49-1a7.306 7.306 0 0 0 1.69.98l.38 2.65A.488.488 0 0 0 10 22h4a.488.488 0 0 0 .49-.42l.38-2.65a7.683 7.683 0 0 0 1.69-.98l2.49 1a.566.566 0 0 0 .18.03.5.5 0 0 0 .43-.25l2-3.46a.5.5 0 0 0-.12-.64zm-1.98-1.71a5.343 5.343 0 0 1 .05.73c0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68a5.857 5.857 0 0 1-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43a5.674 5.674 0 0 1-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68a5.857 5.857 0 0 1 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43a5.674 5.674 0 0 1 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7z" class="cls-3" data-name="Path 2442"/>
                <path id="Path_2443" d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2.006 2.006 0 0 1-2 2z" class="cls-3" data-name="Path 2443"/>
            </g>
        </g>
    </g>
</svg>
`;

const ChevronIcon: React.FC<IconProps> = (props): JSX.Element => (
  <SvgCss xml={src} {...props} />
);

ChevronIcon.defaultProps = {
  width: '28',
  height: '28',
  color: theme.lightGray
};

export default React.memo(ChevronIcon);
