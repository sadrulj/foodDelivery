import { ChevronRightRounded } from "@mui/icons-material";
import React from "react";

const RowContainer = ({ MenuItems, setData }) => {
  return (
    <div className="rowContainer">
      {MenuItems &&
        MenuItems.map((data) => (
          <div
            className="rowMenuCard"
            // isActive={data.id === "1" ? true : false}
            key={data.id}
            onClick={() => setData(data.itemId)}
          >
            <div className="imgBox">
              <img src={data.imgSrc} alt="" />
            </div>
            <h3>{data.name}</h3>
            <i className="loadMenu">
              <ChevronRightRounded />
            </i>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
