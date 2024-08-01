import { useEffect, useState } from "react";

interface RequestData<T> {
	data: T;
}

type RequestFunction<T> = () => Promise<RequestData<T>>;

export function useRequest<T>(
	request: RequestFunction<T>
): [T | null, boolean, string] {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>("");

	useEffect(() => {
		setIsLoading(true);

		request()
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				if (error instanceof Error) {
					setError(error.message);
				} else {
					setError("An unknown error occurred while requesting data");
				}
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [request]);

	return [data, isLoading, error];
}
