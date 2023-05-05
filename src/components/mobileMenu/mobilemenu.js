import React, {useEffect} from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack, Button } from "@mui/material";
import { useRef } from "react";
import { Link, Outlet } from "react-router-dom";

function Mobilemenu() {
    const [open, setOpen] = React.useState(false);
    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            setOpen(false);
          }
        }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
    const handleClickOpen = () => {
      setOpen(!open);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <Stack>
      <MenuIcon
        color="white"
        style={{ width: "50px", height: "50px", margin: "0 2rem" }}
        // onClick={handleClickOpen}
      />
      {open && (
        <div className="mobile-menu-container" ref={ref}>
          {[{ name: "Home", path: "/home" },
          {name: "Code", path: "/home/code"},
          {name: "Staff Code", path: "/home/staffcode"},
          {name: "Blood Group", path: "/home/bloodgroup"}].map((item) => {
            return (
              //   <Link href={item.path} key={item.name}>
              //     <Button variant="text" color="white" onClick={handleClose}>
              //       {item.name}
              //     </Button>
              //   </Link>
              <Button key={item.name} color="secondary" variant="text" onClick={handleClose}>
                <Link to={item.path} style={{ textDecoration: "none" }}>
                  {item.name}
                </Link>
              </Button>
            );
          })}
        </div>
      )}
    </Stack>
  );
}

export default Mobilemenu;
