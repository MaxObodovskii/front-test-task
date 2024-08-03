import type { ChangeEvent } from "react";
import { IconGithub } from "@/components/ui/IconGithub";
import { InputGithub } from "@/components/ui/InputGithub";

interface NavbarItemProps {
	valueInput: string;
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const NavbarItem = (props: NavbarItemProps): JSX.Element => {
	const { valueInput, onChangeHandler } = props;

	return (
		<div>
			<nav className="bg-blue-600">
				<div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
					<IconGithub />
					<InputGithub
						valueInput={valueInput}
						onChangeHandler={onChangeHandler}
					/>
				</div>
			</nav>
		</div>
	);
};
