import type { ChangeEvent } from "react";
import { NavbarItem } from "../NavbarItem/NavbarItem";

interface NavbarProps {
	valueInput: string;
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Navbar = (props: NavbarProps): JSX.Element => {
	const { valueInput, onChangeHandler } = props;

	return (
		<div>
			<NavbarItem valueInput={valueInput} onChangeHandler={onChangeHandler} />
		</div>
	);
};
