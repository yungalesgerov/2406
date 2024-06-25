import { SvgIcon, SvgIconProps } from "@mui/material";

export const IconExclamation = (props: SvgIconProps) => {
    return (
        <SvgIcon size="24px" viewBox="-2.2 0 402.1 311.7" {...props}>
            <linearGradient id="a">
                <stop offset="0" stop-color="#00ffa3" />
                <stop offset="1" stop-color="#dc1fff" />
            </linearGradient>
            <linearGradient
                id="b"
                gradientTransform="matrix(1 0 0 -1 0 314)"
                gradientUnits="userSpaceOnUse"
                x1="360.879"
                x2="141.213"
                xlink:href="#a"
                y1="351.455"
                y2="-69.294"
            />
            <linearGradient
                id="c"
                gradientTransform="matrix(1 0 0 -1 0 314)"
                gradientUnits="userSpaceOnUse"
                x1="264.829"
                x2="45.163"
                xlink:href="#a"
                y1="401.601"
                y2="-19.148"
            />
            <linearGradient
                id="d"
                gradientTransform="matrix(1 0 0 -1 0 314)"
                gradientUnits="userSpaceOnUse"
                x1="312.548"
                x2="92.882"
                xlink:href="#a"
                y1="376.688"
                y2="-44.061"
            />
            <path
                d="m64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8h-317.4c-5.8 0-8.7-7-4.6-11.1z"
                fill="url(#b)"
            />
            <path
                d="m64.6 3.8c2.5-2.4 5.8-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8h-317.4c-5.8 0-8.7-7-4.6-11.1z"
                fill="url(#c)"
            />
            <path
                d="m333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8h-317.4c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1z"
                fill="url(#d)"
            />
        </SvgIcon>
    );
};
