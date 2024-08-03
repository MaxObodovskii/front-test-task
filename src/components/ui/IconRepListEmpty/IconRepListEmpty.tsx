import SVGIconRep from "@/assets/icon-rep.svg?react";

export const IconRepListEmpty = (): JSX.Element => {
	return (
		<div className="flex justify-center items-center">
			<div className="max-w-60 max-h-40 flex flex-col items-center justify-center">
				<SVGIconRep />
				<p className="max-w-60 max-h-8 text-center text-lg text-gray-600">
					Repository list is empty
				</p>
			</div>
		</div>
	);
};
