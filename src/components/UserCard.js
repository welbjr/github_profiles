import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function UserCard({ profileData }) {
  return (
    <Card
      sx={{ maxWidth: 345, margin: "auto", marginTop: "15px" }}
      variant="outlined"
    >
      <CardMedia
        component="img"
        height="345"
        image={profileData.avatar_url}
        alt="imagem de perfil"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {profileData.login}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {profileData.bio || "(Perfil sem bio)"}
        </Typography>
      </CardContent>
    </Card>
  );
}
