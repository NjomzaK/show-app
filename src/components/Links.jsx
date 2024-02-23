import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/joy";

export const Links = () => {
  return (
    <nav className="nav">
      <Box
        height={180}
        width={180}
        my={4}
        display="center"
        alignItems="center"
        p={3}
        sx={{ borderRadius: 20, border: "2px solid #888" }}
      >
        <Link to="/MovieApp">Movies</Link>
      </Box>
      <Box
        height={180}
        width={180}
        display="center"
        alignItems="center"
        p={3}
        marin
        sx={{ borderRadius: 20, border: "2px solid #888" }}
      >
        <Link to="/ShowApp">Shows</Link>
      </Box>
    </nav>
  );
};
