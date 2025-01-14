import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaHome, FaGift, FaList, FaTags } from "react-icons/fa";

const Sidebar = () => {
  return (
    <ProSidebar>
        <Menu iconShape="square">
        <MenuItem icon={<FaHome />}>Home</MenuItem>
        <SubMenu title="Categories" icon={<FaList />}>
          <MenuItem>Fresh</MenuItem>
          <MenuItem>Gift Ideas</MenuItem>
          <MenuItem>Today's Deals</MenuItem>
          <MenuItem>Health & Personal Care</MenuItem>
        </SubMenu>
        <MenuItem icon={<FaGift />}>Gift Cards</MenuItem>
        <MenuItem icon={<FaTags />}>Amazon Basics</MenuItem>
      </Menu>
      
    </ProSidebar>
  );
};

export default Sidebar;
