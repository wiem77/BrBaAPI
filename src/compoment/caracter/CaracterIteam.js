import React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"
const CaracterIteam = ({ item }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="370"
            image={item.img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name} "{item.nickname}"
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.birthday}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.occupation}
              <br />
              {item.portrayed}
              <br />
              {item.status}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}
export default CaracterIteam
