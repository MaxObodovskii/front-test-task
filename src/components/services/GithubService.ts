import axios from "axios";
import type { IUser } from "@/components/types/IUser";
import type { IRepository } from "../types/IRepository";

const githubToken = import.meta.env["REACT_APP_GITHUB_TOKEN"] as string;
const AUTHORIZATION_URL: string = `https://api.github.com/repos/user/repo/issues?state=closed&access_token=${githubToken}`;

export const fetchUserAndRepositories = async (
	login: string,
	perPage: number,
	page: number,
	callback: (userData: {
		user: IUser;
		repositories: Array<IRepository>;
	}) => void
): Promise<void> => {
	try {
		const userPromise = axios.get<IUser>(
			`https://api.github.com/users/${login}`,
			{
				headers: {
					Authorization: AUTHORIZATION_URL,
				},
			}
		);

		const repositoriesPromise = axios.get<Array<IRepository>>(
			`https://api.github.com/users/${login}/repos?per_page=${perPage}&page=${page}`,
			{
				headers: {
					Authorization: AUTHORIZATION_URL,
				},
			}
		);

		const [userDataResponse, repositoriesResponse] = await Promise.all([
			userPromise,
			repositoriesPromise,
		]);

		const userData = userDataResponse.data;
		const repositories = repositoriesResponse.data;

		callback({ user: userData, repositories: repositories });
	} catch (error) {
		console.error(error);
	}
};
