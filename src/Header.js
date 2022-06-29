
import { Box, Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"
import { Paper, IconButton, InputBase, } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import logo from "./assets/iStoryStudio_Dark.svg"
import "./header.css"
function Header() {
  const print=(e)=>{
    console.log(e)
  }
  return (
    <>

      <Box sx={{ width: "100%", height: 100, display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
        <Box component="img" sx={{ overflow: "hidden", }} src={logo} />
        <Box sx={{  display: "flex"}}>
          <Box className="hover-underline-animation" component={Link} to={"/"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none", color: "black", padding: 2, borderRadius: 2, height: 10, '&:hover': { color: "#0087ca" } }}><Typography sx={{ fontSize: 24, fontWeight: "bold", }}>Home</Typography></Box>
          <Box className="hover-underline-animation" component={Link} to={"/create-mentor"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none", color: "black", padding: 2, borderRadius: 2, height: 10, '&:hover': { color: "#0087ca" } }}><Typography sx={{ fontSize: 24, fontWeight: "bold", }}>Profile</Typography></Box>
          <Box className="hover-underline-animation" component={Link} to={"/create-student"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none", color: "black", padding: 2, borderRadius: 2, height: 10, '&:hover': { color: "#0087ca" } }}><Typography sx={{ fontSize: 24, fontWeight: "bold", }}>About</Typography></Box>
          <Box className="hover-underline-animation" component={Link} to={"/MentorList"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none", color: "black", padding: 2, borderRadius: 2, height: 10, '&:hover': { color: "#0087ca" } }}><Typography sx={{ fontSize: 24, fontWeight: "bold", }}>Product</Typography></Box>
        </Box>
        <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 200, margin: "25px",borderRadius:10}}
        >
          <IconButton sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            onChange={print}
          />

        </Paper>
        <Box sx={{}}>
          <Button sx={{ margin: "10px" }}>Login</Button>
          <Button sx={{ margin: "10px" }}>Signup</Button>
        </Box>

      </Box>

    </>

  );
}

export default Header;
