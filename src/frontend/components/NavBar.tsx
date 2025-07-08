import { useNameQuery } from "~/hooks/queries/useNameQuery";

export const NavBar = () => {
	const { data } = useNameQuery();

	return (
		<div className="navbar">
			<div className="navbar-start">
				<div className="flex items-center gap-2">
					{data?.name ?? "Loading..."}
				</div>
			</div>

			<div className="navbar-end">
				<div className="flex gap-8 items-center">
					<button type="button" className="btn btn-ghost">
						<i className="ri-menu-line" />
					</button>
				</div>
			</div>
		</div>
	);
};
