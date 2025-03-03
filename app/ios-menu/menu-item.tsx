"use client";

import { useState } from "react";

type MenuItemProps = {
  icon: React.ReactNode;
  label: string;
} & (
  | { hasChildren?: false; children?: never } // If hasChildren is false, children should not exist
  | { hasChildren: true; children: React.ReactNode } // If hasChildren is true, children is required
);

export const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  label,
  hasChildren = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    if (hasChildren) {
      setIsOpen((prev) => !prev);
    }
  };

  return hasChildren ? (
    <div className={`ios-menu_dropdownWrapper ${isOpen ? "open" : ""}`}>
      <div
        className={`ios-menu_dropdown ${isOpen ? "open" : "closed"}`}
        data-state={isOpen ? "open" : "closed"}
      >
        <button className="ios-menu_item" onClick={toggleDropdown}>
          <span className="ios-menu_indicator">▶</span>
          <span className="ios-menu_label">{label}</span>
          <span className="ios-menu_icon">{icon}</span>
        </button>
        <div className={`ios-menu_dropdownContent ${isOpen ? "open" : ""}`}>
          {children}
        </div>
      </div>
    </div>
  ) : (
    <div className="ios-menu_item">
      <span className="ios-menu_indicator"></span>
      <span className="ios-menu_label">{label}</span>
      <span className="ios-menu_icon">{icon}</span>
    </div>
  );
};
