import { IItem } from '../types';

const MIN_QUALITY = 0;
const MAX_QUALITY = 50;

export class GildedRose {
	items: IItem[] = [];

	constructor(items: IItem[] = []) {
		this.items = items;
	}

	updateQuality() {
		for (let item of this.items) {
			this.updateItem(item);
		}

		return this.items;
	}

	updateItem(item: IItem) {
		switch (item.name) {
			case 'Aged Brie':
				this.updateAgedBrie(item);
				break;
			case 'Backstage passes to a TAFKAL80ETC concert':
				this.updateBackstagePasses(item);
				break;
			case 'Sulfuras, Hand of Ragnaros':
				break;
			default:
				this.updateNormalItem(item);
		}

		if (item.name !== 'Sulfuras, Hand of Ragnaros') {
			item.sellIn -= 1;
		}

		if (item.sellIn < 0) {
			this.handleExpiredItem(item);
		}
	}

	updateAgedBrie(item: IItem) {
		if (item.quality < MAX_QUALITY) {
			item.quality += 1;
		}
	}

	updateBackstagePasses(item: IItem) {
		if (item.quality < MAX_QUALITY) {
			item.quality += 1;
			if (item.sellIn < 11) {
				item.quality += 1;
			}
			if (item.sellIn < 6) {
				item.quality += 1;
			}
		}
	}

	updateNormalItem(item: IItem) {
		if (item.quality > MIN_QUALITY) {
			item.quality -= 1;
		}
	}

	handleExpiredItem(item: IItem) {
		switch (item.name) {
			case 'Aged Brie':
				if (item.quality < MAX_QUALITY) {
					item.quality += 1;
				}
				break;
			case 'Backstage passes to a TAFKAL80ETC concert':
				item.quality = MIN_QUALITY;
				break;
			default:
				if (item.quality > MIN_QUALITY) {
					item.quality -= 1;
				}
		}
	}
}
