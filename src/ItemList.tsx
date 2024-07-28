import { IItem, IItemsArray } from "./types";

export const ItemList = ({ items }: IItemsArray) => {
	return (
		<div>
			<h1>Items</h1>
			<ul>
				{items.map((item: IItem, index: number) => (
					<li key={`${item.quality}-${index}`}>
						{item.name} - Sell In: {item.sellIn} - Quality: {item.quality}
					</li>
				))}
			</ul>
		</div>
	);
};