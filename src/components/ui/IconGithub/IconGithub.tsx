import SVGIconGithub from "@/assets/icon-github.svg?react";

export const IconGithub = (): JSX.Element => {
	return (
		<a
			className="flex items-center space-x-3 rtl:space-x-reverse mr-5"
			href="#"
		>
			<SVGIconGithub />
		</a>
	);
};
