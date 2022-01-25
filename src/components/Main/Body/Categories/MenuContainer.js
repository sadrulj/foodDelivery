import React from "react";
import { ChevronRightRounded } from "@mui/icons-material";

const MenuContainer = () => {
  return (
    <div className="menuCard">
      <h3>Menu Container</h3>
      <div className="viewAll">
        <p>View All</p>
        <i>
          <ChevronRightRounded />
        </i>
      </div>
    </div>
  );
};

export default MenuContainer;
