import { Carousel } from 'react-responsive-carousel';
import { domain } from '../../Constants';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

/**
 * Banner
 * A reusable component for displaying Carousel
 * 
 * Props
 * @param {Array} list - Carousel data list
 * 
 * Examples
 * <Banner list={[{id: "123", bannerImageUrl: "/image.png", bannerImageAlt: "offer"}]}  />
 */
const Banner = ({ list }) => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      showStatus={false}
      infiniteLoop={true}
    >
      {
        list.map((listEntry) => {
          return (
            <div key={listEntry.id}>
              <img src={`${domain}api${listEntry.bannerImageUrl}`} alt={listEntry.bannerImageAlt} loading='lazy' />
            </div>
          )
        })
      }
    </Carousel>
  );
}

export default Banner;