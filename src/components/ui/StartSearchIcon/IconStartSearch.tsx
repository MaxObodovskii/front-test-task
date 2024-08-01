import type { FC } from "react";

export const IconStartSearch: FC = () => {
	return (
		<div className="flex justify-center items-center h-screen">
			<div className="max-w-52 max-h-48 flex flex-col items-center justify-center">
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
						d="M51.4937 22.9167C35.7366 22.9167 22.9167 35.7366 22.9167 51.4937C22.9167 67.2508 35.7366 80.0707 51.4937 80.0707C57.9227 80.0707 63.8453 77.9147 68.6182 74.3235L80.2002 85.9021C80.9863 86.6881 82.0194 87.0834 83.0511 87.0834C84.0828 87.0834 85.1159 86.6881 85.902 85.902C87.4784 84.3256 87.4783 81.7766 85.902 80.2002L74.3235 68.6182C77.9147 63.8453 80.0707 57.9227 80.0707 51.4937C80.0707 35.7366 67.2508 22.9167 51.4937 22.9167ZM30.9814 51.4937C30.9814 40.1816 40.1816 30.9814 51.4937 30.9814C62.8058 30.9814 72.006 40.1816 72.006 51.4937C72.006 62.8058 62.8058 72.006 51.4937 72.006C40.1816 72.006 30.9814 62.8058 30.9814 51.4937Z"
						fill="#808080"
						fillRule="evenodd"
					/>
				</svg>
				<p className="max-w-52 max-h-16 text-center text-lg text-gray-600">
					Start with searching a GitHub user
				</p>
			</div>
		</div>
	);
};
