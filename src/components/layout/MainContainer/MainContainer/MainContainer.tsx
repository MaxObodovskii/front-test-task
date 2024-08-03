import type { IUser } from "@/components/types/IUser";
import { RightContainer } from "../RightContainer/RightContainer";
import { LeftContainer } from "../LeftContainer/LeftContainer";
import type { IRepository } from "@/components/types/IRepository";

interface MainContainerProps {
	userData: { user: IUser | null; repositories: Array<IRepository> | null };
}

export const MainContainer = (props: MainContainerProps): JSX.Element => {
	const { userData } = props;
	const { user, repositories } = userData;

	return (
		<div className="flex my-7 mx-14">
			<LeftContainer userData={user} />

			<RightContainer repositories={repositories} userData={user} />
		</div>
	);
};
