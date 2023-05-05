import Image from "next/image";
import Link from "next/link";
import { iStyledButtonActionProps, StyledButtonAction } from "./styles";

const ButtonAction = ({ location }: iStyledButtonActionProps) => {
    return (
        <StyledButtonAction location={location}>
            <Link href="/">
                Quero ser cliente GET
                {location == "HERO" ? (
                    <Image
                        src="/g_ligth.svg"
                        alt="Get Soluções"
                        width={40}
                        height={40}
                    />
                ) : (
                    <Image
                        src="g_mae.svg"
                        alt="Get Soluções"
                        width={40}
                        height={40}
                    />
                )}
            </Link>
        </StyledButtonAction>
    );
};

export default ButtonAction;
