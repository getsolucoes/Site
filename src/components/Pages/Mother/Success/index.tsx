import ContatoPage from "../../Contato";
import { useMotherContext } from "../../../../contexts";

const SuccessPage = () => {
    const { isSuccess } = useMotherContext();
    return <>{isSuccess && <ContatoPage />}</>;
};

export default SuccessPage;
