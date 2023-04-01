import Grid from '@mui/material/Grid';
import ButtonComp from './ButtonComp';
import { domain } from '../../Constants';

/**
 * CategoryCard
 * A reusable component for displaying the category
 * 
 * Props
 * @param {string} name - Category name
 * @param {string} description - Category description
 * @param {string} imageUrl - Category image url
 * @param {string} direction - flex direction 
 * 
 * Examples
 * <CategoryCard name={"Beverages"} description={"explore description"} imageUrl={"./image.png"} direction={'column'} />
 */
const CategoryCard = ({ name, description, imageUrl, direction }) => {
  return (
    <Grid container direction={direction}>
      <Grid item xs={4}>
        <img className='category-card-img' src={`${domain}api${imageUrl}`} alt={name} ></img>
      </Grid>
      <Grid item xs={8}>
        <Grid container spacing={1} direction={'column'} justifyContent={'center'} alignItems={'center'}>
          <Grid item>
            <span>{name}</span>
          </Grid>
          <Grid item>
            <span>{description}</span>
          </Grid>
          <Grid item>
            <ButtonComp variant="contained">Explore {name}</ButtonComp>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CategoryCard;