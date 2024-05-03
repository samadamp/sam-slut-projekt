
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function ImgMediaCard() {


  return (
   
        <div className='flex justify-center items-center flex-col mt-20'>
            <div className='mb-10 '>
      <Card sx={{ width: 1200, backgroundColor: '#EDC89C' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <u>Browse</u>
        </Typography>
      <div className='flex flex-row items-center gap-5 w-fill'>
        <button className='text-4xl '>{"<"}</button>
        
        
      <CardMedia
        component="img"
        height="140"
        image="https://covers.openlibrary.org/b/id/8684447-M.jpg"
        alt="Book Cover"
      />
      
      <CardMedia
        component="img"
        height="140"
        image="https://covers.openlibrary.org/b/id/8684447-M.jpg"
        alt="Book Cover"
      />
      
      <CardMedia
        component="img"
        height="140"
        image="https://covers.openlibrary.org/b/id/8684447-M.jpg"
        alt="Book Cover"
      />
      <CardMedia
        component="img"
        height="140"
        image="https://covers.openlibrary.org/b/id/8684447-M.jpg"
        alt="Book Cover"
      />
      <CardMedia
        component="img"
        height="140"
        image="https://covers.openlibrary.org/b/id/8684447-M.jpg"
        alt="Book Cover"
      />
   
      
      <button className='text-4xl'>{">"}</button>
      </div>
      </CardContent>
    </Card>
    </div>
<div className='mb-8'>
    <Card sx={{ width: 1200, backgroundColor: '#EDC89C' }}>
    <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <u>Top Rated</u>
        </Typography>
      <div className='flex flex-row items-center gap-5 w-fill'>
       
      <CardMedia
        component="img"
        height="140"
        image="https://covers.openlibrary.org/b/id/8684447-M.jpg"
        alt="Book Cover"
      />
      <CardMedia
        component="img"
        height="140"
        image="https://covers.openlibrary.org/b/id/8684447-M.jpg"
        alt="Book Cover"
      />
      <CardMedia
        component="img"
        height="140"
        image="https://covers.openlibrary.org/b/id/8684447-M.jpg"
        alt="Book Cover"
      />
      <CardMedia
        component="img"
        height="140"
        image="https://covers.openlibrary.org/b/id/8684447-M.jpg"
        alt="Book Cover"
      />
      <CardMedia
        component="img"
        height="140"
        image="https://covers.openlibrary.org/b/id/8684447-M.jpg"
        alt="Book Cover"
      />
     
      </div>
      </CardContent>
      </Card>
      </div>


        <div className='mb-8'>
      <Card sx={{ width: 1200, backgroundColor: '#EDC89C' }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <u>Top Authors</u>
        </Typography>
      <div className='flex flex-row items-center gap-5 w-fill'>
       
      <CardMedia
        component="img"
        height="140"
        image="https://covers.openlibrary.org/a/olid/OL23919A-M.jpg"
        alt="Book Cover"
      />
      <CardMedia
        component="img"
        height="140"
        image="https://covers.openlibrary.org/a/olid/OL23919A-M.jpg"
        alt="Book Cover"
      />
      <CardMedia
        component="img"
        height="140"
        image="https://covers.openlibrary.org/a/olid/OL23919A-M.jpg"
        alt="Book Cover"
      />
      <CardMedia
        component="img"
        height="140"
        image="https://covers.openlibrary.org/a/olid/OL23919A-M.jpg"
        alt="Book Cover"
      />
      <CardMedia
        component="img"
        height="140"
        image="https://covers.openlibrary.org/a/olid/OL23919A-M.jpg" 
        alt="Book Cover"
        
      />
    
      </div>
      </CardContent>
      </Card>
      </div>



      </div>
  
  );
}