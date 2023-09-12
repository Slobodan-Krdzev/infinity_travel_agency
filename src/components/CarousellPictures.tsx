import { ArangementGaleryImage } from "@/types/types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Image from "next/image";

type CarousellPicturesProps = {
  galery: ArangementGaleryImage[];
};

const CarousellPictures = ({ galery = [] }: CarousellPicturesProps) => {

  return (
    <>
      <section
        style={{
          width: "80%",
          margin: "2rem auto",
        }}
      >
        <Carousel
          swipeable={true}
          draggable={true}
          ssr={true} 
          infinite={false}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousell-styles"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          pauseOnHover
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 4,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
        >
          {galery.map((image) => (
            <Image
              key={image.url}
              src={image.url}
              alt={image.location.country}
              width={200}
              height={200}
            />
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default CarousellPictures;
