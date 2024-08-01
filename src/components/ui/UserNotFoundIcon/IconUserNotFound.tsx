import type { FC } from "react";

export const IconUserNotFound: FC = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="max-w-40 max-h-40 flex flex-col items-center justify-center">
				<svg
					className="mb-6"
					fill="none"
					height="110"
					viewBox="0 0 110 110"
					width="110"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						clipRule="evenodd"
						d="M46 35.5C46 30.2533 50.2533 26 55.5 26C60.7467 26 65 30.2533 65 35.5C65 40.7467 60.7467 45 55.5 45C50.2533 45 46 40.7467 46 35.5ZM55.5 17C45.2827 17 37 25.2827 37 35.5C37 45.7173 45.2827 54 55.5 54C65.7173 54 74 45.7173 74 35.5C74 25.2827 65.7173 17 55.5 17ZM32 87.5C32 74.5213 42.5213 64 55.5 64C68.4787 64 79 74.5213 79 87.5C79 89.9853 81.0147 92 83.5 92C85.9853 92 88 89.9853 88 87.5C88 69.5507 73.4493 55 55.5 55C37.5507 55 23 69.5507 23 87.5C23 89.9853 25.0147 92 27.5 92C29.9853 92 32 89.9853 32 87.5Z"
						fill="#808080"
						fillRule="evenodd"
					/>
				</svg>

				<p className="max-w-40 max-h-7 text-center text-lg text-gray-600">
					User not found
				</p>
			</div>
		</div>
	);
};
