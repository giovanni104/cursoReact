import React, { useState } from 'react';

const MenuItem = ({ label, subItems }) => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu);
  };

  return (
    <li className="menu-item">
      <div className="menu-item-label" onClick={toggleSubmenu}>
        {label}
      </div>
      {showSubmenu && subItems && subItems.length > 0 && (
        <ul className="submenu">
          {subItems.map((subItem, index) => (
            <MenuItem key={index} label={subItem.label} subItems={subItem.subItems} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;