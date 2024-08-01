import SVGIconUser from "@/assets/icon-user.svg?react";

export const IconUserNotFound = (): JSX.Element => {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="max-w-40 max-h-40 flex flex-col items-center justify-center">
				<SVGIconUser />
				<p className="max-w-40 max-h-7 text-center text-lg text-gray-600">
					User not found
				</p>
			</div>
		</div>
	);
};
