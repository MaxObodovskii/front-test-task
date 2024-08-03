import { Pagination } from "antd";

interface MainPaginationProps {
	totalPages: number;
	activePage: number;
	onChangePage: (number: number) => void;
}

export const MainPagination = (props: MainPaginationProps): JSX.Element => {
	const { totalPages, activePage, onChangePage } = props;

	return (
		<div className="flex justify-center">
			<Pagination
				current={activePage}
				showSizeChanger={false}
				total={totalPages * 10}
				onChange={onChangePage}
			/>
		</div>
	);
};
