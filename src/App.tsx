import { useState } from 'react';
import { Item } from './Item';
import { GildedRose } from './model/GildRose';
import { ItemList } from './ItemList';
import styles from './App.module.css';

const App = () => {
  const initialItems = [
    new Item('Sulfuras, Hand of Ragnaros', 0, 80),
    new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
    new Item('+5 Dexterity Vest', 10, 20),
    new Item('Aged Brie', 2, 0),
    new Item('Elixir of the Mongoose', 5, 7),
  ];

  const [items, setItems] = useState(initialItems);
  const gildedRose = new GildedRose(items);

  const updateItems = () => {
    setItems([...gildedRose.updateQuality()]);
  };

  return (
    <div className={styles.app}>
      <ItemList items={items} />
      <button className={styles.button} onClick={updateItems}>Update Quality</button>
    </div>
  );
};

export default App;
