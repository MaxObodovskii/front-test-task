import type { FunctionComponent } from "../common/types";
import { MainContainer } from "../components/layout/MainContainer";
import { Navbar } from "../components/layout/Navbar";

export const Main = (): FunctionComponent => {
	return (
		<div>
			<Navbar />
			<MainContainer />
		</div>
	);
};
