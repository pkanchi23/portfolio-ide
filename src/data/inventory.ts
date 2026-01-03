const itemNames = [
  'Sword', 'Shield', 'Elixir', 'Boots', 'Gloves', 'Helmet', 'Amulet', 'Ring', 'Scroll', 'Potion',
  'Dagger', 'Bow', 'Arrow', 'Staff', 'Wand', 'Robe', 'Cloak', 'Crown', 'Gem', 'Crystal',
  'Orb', 'Tome', 'Key', 'Map', 'Compass', 'Coin', 'Goblet', 'Chalice', 'Idol', 'Talisman',
  'Charm', 'Relic', 'Artifact', 'Fossil', 'Statue', 'Figurine', 'Medal', 'Pendant', 'Brooch', 'Locket'
];

const colors = ['FF5733', 'C70039', '900C3F', '581845', 'DAF7A6', 'FFC300'];

export const inventoryItems = Array.from({ length: 400 }, (_, i) => {
  const name = itemNames[i % itemNames.length];
  const color = colors[i % colors.length];
  const textColor = i % 2 === 0 ? 'FFFFFF' : '000000';
  return {
    id: i + 1,
    name: `${name} #${i + 1}`,
    imageUrl: `https://via.placeholder.com/150/${color}/${textColor}?text=${name}`,
  };
});
