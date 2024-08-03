import type { ChangeEvent } from "react";

interface InputGithubProps {
	valueInput: string;
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const InputGithub = (props: InputGithubProps): JSX.Element => {
	const { valueInput, onChangeHandler } = props;

	return (
		<div className="flex md:order-2">
			<button
				aria-controls="navbar-search"
				aria-expanded="false"
				className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
				data-collapse-toggle="navbar-search"
				type="button"
			>
				<svg
					aria-hidden="true"
					className="w-5 h-5"
					fill="none"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
					/>
				</svg>
				<span className="sr-only">Search</span>
			</button>
			<div className="relative hidden md:block w-96">
				<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
					<svg
						aria-hidden="true"
						className="w-4 h-4 text-gray-500 dark:text-gray-400"
						fill="none"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
						/>
					</svg>
					<span className="sr-only">Search icon</span>
				</div>
				<input
					className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					id="search-navbar"
					placeholder="Enter GitHub username"
					type="text"
					value={valueInput}
					onChange={onChangeHandler}
				/>
			</div>
		</div>
	);
};