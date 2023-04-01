import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import CategoryCard from '../Common/CategoryCard';
import { req } from '../../Util/util';
import { domain } from '../../Constants';
import Carousel from '../Common/Banner';

const Home = () => {
  const [category, setCategory] = useState([]);
  const [banner, setBanner] = useState([]);


  useEffect(() => {
    const getCategory = async () => {
      let response = await req({ url: `${domain}api/server/categories/index.get.json`, method: 'get' });
      let category = response.data;
      setCategory(category);
    }
    getCategory();
    const getBanner = async () => {
      let response = await req({ url: `${domain}api/server/banners/index.get.json`, method: 'get' });
      let banner = response.data;
      setBanner(banner);
    }
    getBanner();
  }, [])

  return (
    <Grid container rowSpacing={4}>
      <Grid item xs={12}>
        <Carousel list={banner} />
      </Grid>
      {
        category.map((categoryEntry, index) => {
          let direction = 'row'
          if (index % 2 != 0) {
            direction = 'row-reverse';
          }
          return (
            <Grid item xs={12} key={categoryEntry.id}>
              <CategoryCard {...categoryEntry} direction={direction} />
            </Grid>
          )
        })
      }

    </Grid>
  );
}

export default Home;