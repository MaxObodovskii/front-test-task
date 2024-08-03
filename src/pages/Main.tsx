import {
	useCallback,
	useEffect,
	useMemo,
	useState,
	type ChangeEvent,
} from "react";
import type { FunctionComponent } from "../common/types";
import type { IUser } from "@/components/types/IUser";
import type { IRepository } from "@/components/types/IRepository";
import { MainContainer } from "../components/layout/MainContainer";
import { Navbar } from "../components/layout/Navbar";
import { fetchUserAndRepositories } from "@/components/services/GithubService";
import { useDebounce } from "@/hooks/useDebounce/useDebounce";
import { useInput } from "@/hooks/useInput/useInput";
import { MainPagination } from "@/components/layout/MainPagination";
import { IconStartSearch } from "@/components/ui/IconStartSearch";
import { IconUserNotFound } from "@/components/ui/IconUserNotFound";
import { Spinner } from "@/components/ui/Spinner";

export const Main = (): FunctionComponent => {
	const { value, onChange } = useInput();

	const [isLoadingDebounce, setIsLoadingDebounce] = useState(false);
	const [isLoadingPage, setIsLoadingPage] = useState(false);

	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);

	const debouncedSearch = useDebounce(fetchUserAndRepositories, 500);

	const [userData, setUserData] = useState<{
		user: IUser | null;
		repositories: Array<IRepository> | null;
	}>({ user: null, repositories: null });

	useEffect(() => {
		if (userData) {
			const totalRepos = userData.user?.public_repos || 0;
			const itemsPerPage = 4;

			setTotalPages(Math.ceil(totalRepos / itemsPerPage));
		}
	}, [userData]);

	const onChangeHandler = useCallback(
		(event: ChangeEvent<HTMLInputElement>): void => {
			onChange(event);

			setIsLoadingDebounce(true);

			if (event.target.value === "") {
				setUserData({ user: null, repositories: null });

				setIsLoadingDebounce(false);
			} else {
				debouncedSearch(
					event.target.value,
					4,
					page,
					(data: { user: IUser; repositories: Array<IRepository> }) => {
						setUserData(data);

						setIsLoadingDebounce(false);
					}
				);
			}
		},
		[debouncedSearch, onChange, page]
	);

	const onChangePage = (page: number): void => {
		setPage(page);

		setIsLoadingPage(true);

		if (value) {
			debouncedSearch(
				value,
				4,
				page,
				(data: { user: IUser; repositories: Array<IRepository> }) => {
					setUserData(data);

					setIsLoadingPage(false);
				}
			);
		}
	};

	const renderIcon = useMemo((): JSX.Element | null => {
		if (value === "") {
			return <IconStartSearch />;
		}

		if (userData.user === null && userData.repositories === null) {
			return <IconUserNotFound />;
		}

		return null;
	}, [value, userData.user, userData.repositories]);

	const isLoading = isLoadingDebounce || isLoadingPage;

	return (
		<div>
			<Navbar valueInput={value} onChangeHandler={onChangeHandler} />

			{renderIcon}

			{isLoading && <Spinner />}

			{!isLoading && <MainContainer userData={userData} />}

			{!isLoading &&
				userData.user &&
				userData.repositories &&
				userData.repositories.length > 0 && (
					<MainPagination
						activePage={page}
						totalPages={totalPages}
						onChangePage={onChangePage}
					/>
				)}
		</div>
	);
};
