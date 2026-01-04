import React from 'react';
import { inventoryItems } from '../../data/inventory';
import styles from './inventory.module.css';

const InventoryPage = () => {
  // To make the grid more expansive, we'll pad the items list with empty slots.
  // This will create a 20x20 grid, which is 400 slots.
  const totalSlots = 400;
  const filledSlots = inventoryItems.map((item, index) => ({
    ...item,
    // Distribute items across the grid by assigning them a random-like position
    position: (item.id * 37) % totalSlots,
  }));

  const gridItems = Array.from({ length: totalSlots }).map((_, index) => {
    const item = filledSlots.find(p => p.position === index);
    return item ? (
      <div key={item.id} className={styles.item}>
        <img src={item.imageUrl} alt={item.name} className={styles.itemImage} />
        <div className={styles.itemName}>{item.name}</div>
      </div>
    ) : (
      <div key={index} className={styles.item}></div> // Empty slot
    );
  });

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Inventory</h1>
      <div className={styles.container} data-testid="inventory-container">
        <div className={styles.grid}>
          {gridItems}
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
