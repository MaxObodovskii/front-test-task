import { useCallback, useRef, type MutableRefObject } from "react";

export function useDebounce<
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	ReturnType extends (...args: Array<any>) => Promise<any>,
>(
	callback: ReturnType,
	delay: number
): (...args: Parameters<ReturnType>) => void {
	const timer: MutableRefObject<NodeJS.Timeout | undefined> = useRef();

	return useCallback(
		(...args: Parameters<ReturnType>) => {
			if (timer.current) {
				clearTimeout(timer.current);
			}

			timer.current = setTimeout(() => {
				callback(...args).catch((error) => {
					console.error(error);
				});
			}, delay);
		},
		[callback, delay]
	);
}
