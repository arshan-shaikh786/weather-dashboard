import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css";
export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1672226405717-697c84f48f9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const HOT_URL="https://media.istockphoto.com/id/1312596921/photo/summer-noon-sun.jpg?s=612x612&w=0&k=20&c=1aaFLIWH15zSWmnenmL50XfkiU0sUboEKpIXf3Jx5S0=";
    const COLD_URL="https://media.istockphoto.com/id/483785638/photo/fallen-leaf-covered-in-winter-frost.webp?a=1&b=1&s=612x612&w=0&k=20&c=pUWgbqzaP4QmtC1nQ9nxpsY9oWTeTrIL29T1aRNgw48=";
    const RAIN_URL="https://media.istockphoto.com/id/1225022383/photo/rain-on-umbrella-concept-for-bad-weather-winter-or-protection.webp?a=1&b=1&s=612x612&w=0&k=20&c=vUlQgCd942j9Z5LU7yneBVZD3LuOCQtE-QLJpg_FeiY=";
    return(
        <div className="InfoBox">
            
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
            info.humidity>80? <ThunderstormIcon/>:info.temp>15?< WbSunnyIcon/>:<AcUnitIcon/>

          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={'span'} >
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Temp Min={info.tempMin}&deg;C</p>
          <p>Temp Max={info.tempMax}&deg;C</p>
          <p>The Weather can be described as <i>{info.weather}</i> and feels like{info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    )
}