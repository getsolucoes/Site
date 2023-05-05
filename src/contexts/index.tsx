import { iContextProps } from "../interfaces";
import { GlobalProvider } from "./GlobalContext";
import { MotherProvider } from "./MotherContext";

const Providers = ({ children }: iContextProps) => (
    <GlobalProvider>
        <MotherProvider>{children}</MotherProvider>
    </GlobalProvider>
);

export default Providers;
export { useGlobalContext } from "./GlobalContext";
export { useMotherContext } from "./MotherContext";
