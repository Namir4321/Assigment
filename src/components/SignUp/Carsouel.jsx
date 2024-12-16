import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
const Carsouel = ({ group, ImagesNum }) => {
  return (
    <Carousel
      className="w-full h-full"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{ align: "start", loop: true }}
    >
      <CarouselContent className={group}>
        {ImagesNum.map((image, index) => (
          <CarouselItem key={index} className="  w-[100%] my-auto h-[480px]  ">
            <Card className="w-full h-full overflow-hidden border-none ">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover "
              />
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Carsouel;
