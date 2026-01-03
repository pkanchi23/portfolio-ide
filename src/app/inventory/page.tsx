'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { inventoryItems } from '../../data/inventory';
import styles from './inventory.module.css';

const InventoryPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const { scrollWidth, scrollHeight, clientWidth, clientHeight } = containerRef.current;
      const scrollLeft = (scrollWidth - clientWidth) / 2;
      const scrollTop = (scrollHeight - clientHeight) / 2;
      containerRef.current.scrollTo({
        left: scrollLeft,
        top: scrollTop,
      });
    }
  }, []);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Inventory</h1>
      <div className={styles.container} data-testid="inventory-container" ref={containerRef}>
        <div className={styles.grid}>
          {inventoryItems.map((item) => (
            <div key={item.id} className={styles.item}>
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={100}
                height={100}
                className={styles.itemImage}
              />
              <div className={styles.itemName}>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
