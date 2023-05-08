import ContatoPage from "../../../Contato";
import { useMotherContext } from "../../../../../contexts";

export const SuccessPage = () => {
    const { isSuccess } = useMotherContext();
    return <>{isSuccess && <ContatoPage />}</>;
};
