import type { IUser } from "@/components/types/IUser";
import SVGIconFollowers from "@/assets/icon-followers.svg?react";
import SVGIconFollowing from "@/assets/icon-following.svg?react";

interface LeftContainerProps {
	userData: IUser | null;
}

export const LeftContainer = (props: LeftContainerProps): JSX.Element => {
	const { userData } = props;

	return (
		<>
			{userData && (
				<div className="flex flex-col max-w-72 max-h-432 mr-20">
					<img
						alt={userData.login}
						className="max-w-72 max-h-72 rounded-full mb-7"
						src={userData.avatar_url}
					/>
					<div className="max-w-52 max-h-8 mb-3">
						<h2 className="text-xl font-bold text-black">{userData.name}</h2>
					</div>
					<div className="max-w-52 max-h-8 mb-6">
						<p className="text-blue-600">{userData.login}</p>
					</div>
					<div className="flex justify-between">
						<p className="flex">
							<span className="mr-2">
								<SVGIconFollowers />
							</span>
							{userData.followers} followers
						</p>
						<p className="flex">
							<span className="mr-2">
								<SVGIconFollowing />
							</span>
							{userData.following} following
						</p>
					</div>
				</div>
			)}
		</>
	);
};
