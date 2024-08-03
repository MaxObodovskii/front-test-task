import type { IRepository } from "@/components/types/IRepository";
import type { IUser } from "@/components/types/IUser";
import { IconRepListEmpty } from "@/components/ui/IconRepListEmpty";

interface RightContainerProps {
	userData: IUser | null;
	repositories: Array<IRepository> | null;
}

export const RightContainer = (props: RightContainerProps): JSX.Element => {
	const { userData, repositories } = props;

	const totalPublicRepositories = userData?.public_repos;

	return (
		<div className="max-w-877px max-h-591px">
			{totalPublicRepositories != null && totalPublicRepositories > 0 && (
				<p className="font-semibold text-3xl mb-8">
					Repositories ({totalPublicRepositories})
				</p>
			)}
			{repositories && repositories.length > 0
				? repositories.map((repository: IRepository) => (
						<div
							key={repository.id}
							className="max-w-877px max-h-112px bg-gray-100 px-8 py-6 mb-6"
						>
							<h3 className="font-medium text-2xl mb-4 text-blue-600">
								{repository.full_name ?? "There is no full name"}
							</h3>
							<p>{repository.description ?? "There is no description"}</p>
						</div>
					))
				: repositories && <IconRepListEmpty />}
		</div>
	);
};
