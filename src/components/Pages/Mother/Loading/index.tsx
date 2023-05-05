import { useMotherContext } from "../../../../contexts";
import { StyledLoading } from "./style";

const Loading = () => {
    const { loading } = useMotherContext();
    return <>{loading && <StyledLoading>Loading...</StyledLoading>}</>;
};

export default Loading;
