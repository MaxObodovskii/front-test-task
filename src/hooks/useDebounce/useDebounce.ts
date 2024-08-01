import { useCallback, useRef, type MutableRefObject } from "react";

export function useDebounce(
	callback: (...args: Array<unknown>) => void,
	delay: number
): (...args: Array<unknown>) => void {
	const timer: MutableRefObject<NodeJS.Timeout | undefined> = useRef();

	return useCallback(
		(...args: Array<unknown>) => {
			if (timer.current) {
				clearTimeout(timer.current);
			}

			timer.current = setTimeout(() => {
				callback(...args);
			}, delay);
		},
		[callback, delay]
	);
}
