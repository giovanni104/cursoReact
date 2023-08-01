import React from 'react';
import MenuItem from './MenuItem';

const menuData = [
  {
    label: 'Home',
  },
  {
    label: 'Products',
    subItems: [
      {
        label: 'Electronics',
        subItems: [
          { label: 'Laptops' },
          { label: 'Smartphones' },
          { label: 'Tablets' },
        ],
      },
      {
        label: 'Clothing',
        subItems: [
          { label: 'Shirts' },
          { label: 'Pants' },
          { label: 'Shoes' },
        ],
      },
    ],
  },
  {
    label: 'About Us',
  },
  {
    label: 'Contact',
  },
];

const Menu = () => {
  return (
    <ul className="main-menu">
      {menuData.map((item, index) => (
        <MenuItem key={index} label={item.label} subItems={item.subItems} />
      ))}
    </ul>
  );
};

export default Menu;