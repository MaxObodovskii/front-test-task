import SVGIconStartSearch from "@/assets/icon-start-search.svg?react";

export const IconStartSearch = (): JSX.Element => {
	return (
		<div className="flex justify-center items-center">
			<div className="max-w-52 max-h-48 flex flex-col items-center justify-center">
				<SVGIconStartSearch />
				<p className="max-w-52 max-h-16 text-center text-lg text-gray-600">
					Start with searching a GitHub user
				</p>
			</div>
		</div>
	);
};
