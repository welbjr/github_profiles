import { useState } from "react";

import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import Search from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

export default function ProfileInput() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function onChange(e) {
    setName(e.target.value);
  }

  function onClick() {
    navigate(`/github_profiles/users/${name}`);
  }

  return (
    <Box
      sx={{
        display: "flex",
        margin: "auto",
        marginTop: "35px",
        justifyContent: "center",
        width: "50%",
      }}
    >
      <Input fullWidth placeholder="Nome" value={name} onChange={onChange} />
      <IconButton
        color="primary"
        aria-label="pesquisar"
        component="span"
        onClick={onClick}
      >
        <Search />
      </IconButton>
    </Box>
  );
}
