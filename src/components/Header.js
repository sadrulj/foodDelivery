import React from "react";
import { IconButton } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { BarChart, SearchRounded } from "@mui/icons-material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { useEffect } from "react";
import { useStateValue } from "../StateProvider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Login from "./Auth/Login/Login";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

const Header = () => {
  const [{ cart }, dispatch] = useStateValue();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    const toggleMenu = document.querySelector(".toggleMenu");

    toggleMenu.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <header>
      <img
        className="logo"
        src="https://firebasestorage.googleapis.com/v0/b/fooddelivery-d8524.appspot.com/o/209358347_1195776210871468_764556662967386694_n.jpeg?alt=media&token=5e7031de-0530-4732-a53e-51e5180395d1"
        alt=""
      />
      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>
      <div className="shoppingCart">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={cart ? cart.length : ""} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </div>
      <div className="profileContainer">
        <div className="imgBox">
          <Button onClick={handleOpen}>
            <Avatar {...stringAvatar("Kent Dodds")} />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Login />
            </Box>
          </Modal>
        </div>
        <h2 className="userName">sadrul jamil</h2>
      </div>
      <div className="toggleMenu">
        <BarChart className="toggleIcon" />
      </div>
    </header>
  );
};

export default Header;
