export interface IItem {
	name: string;
	sellIn: number;
	quality: number;
}

export interface IItemsArray {
	items: IItem[];
}