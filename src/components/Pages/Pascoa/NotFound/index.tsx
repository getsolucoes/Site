import Image from "next/image";
import { StyledContainer } from "../styles";

const NotFoundPascoa = () => {
    return (
        <StyledContainer isBanner>
            <div>
                <Image src="/pascoa.jpg" alt="Pascoa Get" fill priority />
            </div>
        </StyledContainer>
    );
};

export default NotFoundPascoa;
