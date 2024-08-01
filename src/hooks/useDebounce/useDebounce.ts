import { useCallback, useRef, type MutableRefObject } from "react";

/* Или нужно использовать unknow (чтобы убрать eslint-disable), но по сути же может приходить любые аргументы сюда */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDebounce<ReturnType extends (...args: Array<any>) => void>(
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
				callback(...args);
			}, delay);
		},
		[callback, delay]
	);
}
