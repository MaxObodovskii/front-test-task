import { IconGithub } from "@/components/ui/IconGithub";
import { InputGithub } from "@/components/ui/InputGithub";

export const NavbarItem = (): JSX.Element => {
	return (
		<div>
			<nav className="bg-blue-600">
				<div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
					<IconGithub />
					<InputGithub />
				</div>
			</nav>
		</div>
	);
};
