import { RightContainer } from "../RightContainer/RightContainer";
import { LeftContainer } from "../LeftContainer/LeftContainer";
import { IconStartSearch } from "@/components/ui/IconStartSearch";

export const MainContainer = (): JSX.Element => {
	return (
		<div>
			<LeftContainer />

			<IconStartSearch />

			<RightContainer />
		</div>
	);
};
