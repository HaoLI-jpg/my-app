import image from '../image.jpg'
import { Card, CardActionArea, CardMedia, Typography } from '@mui/material';

export default function Home() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia style={{ height: "800px"}}   component="img" image={image} title="farm" alt="farm"/>
        <Typography>Home Page</Typography>
      </CardActionArea>
    </Card>
  );
}