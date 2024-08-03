import { useState, type ChangeEvent } from "react";

interface InputResult {
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const useInput = (): InputResult => {
	const [value, setValue] = useState("");

	const onChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setValue(event.target.value);
	};

	return {
		value,
		onChange,
	};
};
