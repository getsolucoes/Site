import { useMotherContext } from "../../../../../contexts";
import { StyledLoading } from "./style";

export const Loading = () => {
    const { loading } = useMotherContext();
    return <>{loading && <StyledLoading>Loading...</StyledLoading>}</>;
};
