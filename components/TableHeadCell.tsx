import	React, {ReactElement} 	from	'react';
import	{ArrowDown}				from	'@yearn-finance/web-lib/icons';

type		TTableHeadCell = {
	label: string,
	sortId?: string,
	sortBy?: string,
	set_sortBy?: React.Dispatch<React.SetStateAction<string>>
	className: string
};
function	TableHeadCell({label, sortId, className, sortBy, set_sortBy = (): void => undefined}: TTableHeadCell): ReactElement {
	return (
		<div className={`flex-row-center tabular-nums ${className}`}>
			<p className={'pr-1 text-typo-secondary'}>{label}</p>
			{sortId ? <div
				onClick={(): void => set_sortBy((n): string => n === sortId ? `-${sortId}` : n === `-${sortId}` ? '' : sortId)}
				className={`p-1 -m-1 cursor-pointer transition-all transform ${sortBy === sortId ? 'text-icons-variant' : sortBy === `-${sortId}` ? 'text-icons-variant rotate-180' : 'text-icons-variant/50 hover:text-icons-variant'}`}>
				<ArrowDown />
			</div> : null}
		</div>
	);
}


type		TTableHead = {
	children?: ReactElement[],
	sortBy?: string,
	set_sortBy?: React.Dispatch<React.SetStateAction<string>>
};
function	TableHead({children, sortBy, set_sortBy}: TTableHead): ReactElement {
	return (
		<div className={'grid grid-cols-22 py-4 px-6 mt-0 w-[1200px] md:mt-8 md:w-full dark:bg-surface bg-typo-off'}>
			{children?.map((child, i): ReactElement => React.cloneElement(child, {key: i, sortBy, set_sortBy}))}
		</div>
	);
}

export {TableHead, TableHeadCell};
export type {TTableHead};