export class Item {
	name = '';
	sellIn = 0;
	quality = 0;

	constructor(name: string, sellIn: number, quality: number) {
		this.name = name;
		this.sellIn = sellIn;
		this.quality = quality;
	}
}