import type { FC } from "react";
import { IconGithub } from "../../../ui/IconGithub";
import { InputGithub } from "../../../ui/InputGithub";
import classes from "./NavbarItem.module.css";

export const NavbarItem: FC = () => {
	return (
		<div>
			<nav className={classes["NavbarBg"]}>
				<div className="max-w-screen-xl flex flex-wrap items-center mx-auto p-4">
					<IconGithub />
					<InputGithub />
				</div>
			</nav>
		</div>
	);
};
