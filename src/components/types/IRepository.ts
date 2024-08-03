import type { IUser } from "./IUser";

export interface IRepository {
	id: number;
	name: string;
	full_name: string;
	owner: IUser;
	html_url: string;
	description: string;
}
