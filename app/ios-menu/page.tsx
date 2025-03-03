"use client";

import "./styles.css";
import { MenuItem } from "./menu-item"; // ✅ Importing from the new file

export default function IOSMenu() {
  return (
    <div className="flex justify-center items-center h-dvh mx-48">
      <div className="flex w-full justify-center items-center h-1/2 bg-zinc-50 border border-stone-200 rounded-lg">
        <div className="ios-menu_root">
          <MenuItem icon="📝" label="New Space" />
          <MenuItem icon="✨" label="Focus" hasChildren>
            <MenuItem icon="🔕" label="Zen Mode" />
            <MenuItem icon="📖" label="Reader Mode" />
            <MenuItem icon="🔒" label="Lock Tab" />
          </MenuItem>
          <MenuItem icon="🔤" label="Heading 1" />
          <MenuItem icon="📋" label="List" />
          <MenuItem icon="✅" label="Task List" />
        </div>
      </div>
    </div>
  );
}
