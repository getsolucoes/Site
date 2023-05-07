import styled from "styled-components";

interface iPreviewProps {
    width: number;
    un: "px" | "%";
    height: number;
    src: string;
}

const Styled = styled.div<iPreviewProps>`
    width: ${(props) => props.width}${(props) => props.un};
    height: ${(props) => props.height}px;
    border-radius: 5px;
    background-image: url(${(props) => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
`;

export const Preview = ({ width, un, height, src }: iPreviewProps) => {
    return <Styled width={width} un={un} height={height} src={src} />;
};
