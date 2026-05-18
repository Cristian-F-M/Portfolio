import { Fragment } from 'react'
import { twMerge } from 'tailwind-merge'

interface OrderedListProps extends React.ComponentProps<'ol'> {
	ordered: true
}

interface UnoderedListProps extends React.ComponentProps<'ul'> {
	ordered?: false
}

interface BaseListProps<T = unknown> {
	items: T[]
	renderItem: (item: T, index: number) => React.ReactNode
	keyStractor?: (item: T, index: number) => string
	separator?: () => React.ReactNode
}

type ListProps<T> = BaseListProps<T> & (OrderedListProps | UnoderedListProps)

export default function List<T>({
	items,
	className,
	renderItem,
	keyStractor,
	separator,
	...props
}: ListProps<T>) {
	const renderedItems = items.map((item, index) => {
		return (
			<Fragment key={keyStractor?.(item, index) ?? index}>
				<li>{renderItem(item, index)}</li>
				{index < items.length - 1 && separator && separator()}
			</Fragment>
		)
	})

	if (props.ordered)
		return (
			<ol className={twMerge('space-y-2 py-2 px-1', className)} {...props}>
				{...renderedItems}
			</ol>
		)

	return (
		<ul className={twMerge('space-y-2 py-2 px-1', className)} {...props}>
			{...renderedItems}
		</ul>
	)
}