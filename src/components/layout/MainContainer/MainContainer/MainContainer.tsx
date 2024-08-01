import type { FC } from "react";
import { RightContainer } from "../RightContainer/RightContainer";
import { LeftContainer } from "../LeftContainer/LeftContainer";
import { IconStartSearch } from "../../../ui/StartSearchIcon";

export const MainContainer: FC = () => {
	return (
		<div>
			<LeftContainer />

			<IconStartSearch />

			<RightContainer />
		</div>
	);
};
