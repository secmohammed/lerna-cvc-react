import React from 'react';
import { SvgCss } from 'react-native-svg';
import theme from '../../utils/theme';

const src = `
<svg xmlns="http://www.w3.org/2000/svg" width="18.511" height="19.441" viewBox="0 0 18.511 19.441">
    <defs>
        <style>
            .cls-1{fill:none;stroke-linecap:round}.cls-2,.cls-3{stroke:none}.cls-3{fill:#9cd9e4}
        </style>
    </defs>
    <g id="Messages" class="cls-1">
        <path d="M55 61.509a7.208 7.208 0 0 0 2.736-.535.411.411 0 0 1 .057-.024h.007a1.084 1.084 0 0 1 .377-.067 1.023 1.023 0 0 1 .407.081L61.411 62l-.744-2.975a1.01 1.01 0 0 1 .131-.491 1.148 1.148 0 0 1 .084-.125 6.543 6.543 0 0 0 1.111-3.648A7 7 0 1 0 55 61.509z" class="cls-2" transform="translate(-45.9 -45.9)"/>
        <path d="M61.411 62l-.744-2.975a1.01 1.01 0 0 1 .216-.616 6.543 6.543 0 0 0 1.11-3.648C62 51.025 58.867 48 55 48c-3.867 0-7 3.025-7 6.754 0 3.733 3.133 6.755 7 6.755a7.208 7.208 0 0 0 2.793-.559c.004 0 .007 0 .007-.003a1.084 1.084 0 0 1 .784.013L61.411 62m3 3.341l-3.725-1.37-2.5-.92a9.28 9.28 0 0 1-3.186.558c-2.417 0-4.693-.912-6.408-2.567-1.736-1.674-2.692-3.908-2.692-6.288 0-4.882 4.082-8.854 9.1-8.854 2.48 0 4.797.953 6.524 2.683 1.661 1.664 2.573 3.86 2.57 6.182 0 1.56-.421 3.08-1.221 4.424l.575 2.302.963 3.85z" class="cls-3" transform="translate(-45.9 -45.9)"/>
    </g>
</svg>
`;

const MessageIcon: React.FC<{}> = (props): JSX.Element => (
  <SvgCss xml={src} {...props} />
);

MessageIcon.defaultProps = {
  width: '25',
  height: '25',
  color: theme.lightGray
};

export default React.memo(MessageIcon);
