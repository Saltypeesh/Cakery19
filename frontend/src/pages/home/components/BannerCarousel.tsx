import { Button } from "@/components/ui/button";
import { CarouselContent, CarouselItem, Carousel } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import Autoplay from "embla-carousel-autoplay";

const quoteStyle =
  "min-w-[360px] text-center text-4xl font-light leading-[46px] tracking-wide text-[#F8F4F0] sm:text-left sm:text-5xl lg:text-[54px] sm:text-[54px] sm:leading-[54px] lg:leading-[68px]";

const BannerCarousel = () => {
  // Notice: Banner Carousel file size should be less than 1MB for mobile
  return (
    <section className="h-full w-full overflow-hidden">
      <Carousel
        className="w-full"
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: true,
            stopOnMouseEnter: true,
          }),
        ]}
        opts={{
          loop: true,
          skipSnaps: false,
          dragFree: false,
        }}
      >
        <CarouselContent className="select-none">
          <CarouselItem className="pl-0">
            <div className="relative h-[680px] w-full overflow-hidden lg:h-[734px]">
              <picture>
                <source srcSet="/images/webp/cakery_banner_1.webp" type="image/webp" />
                <img
                  src="/images/cakery_banner_1.jpg"
                  alt="Bakery Hero Banner"
                  loading="eager"
                  className="fade-in-image absolute inset-0 h-full w-full object-cover object-center"
                  onLoad={(e) => (e.target as HTMLImageElement).classList.add("loaded")}
                />
              </picture>

              <motion.div
                className="absolute bottom-6 left-[calc(50%+8px)] flex max-w-[540px] -translate-x-1/2 flex-col items-center space-y-6 p-2.5 sm:bottom-[146px] sm:left-[50px] sm:translate-x-0 sm:items-start lg:max-w-[697px]"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className={quoteStyle}>
                  <span className="font-medium">Baker</span> with love,
                  <br /> served with a <span className="font-medium">Smile</span>
                </h1>

                <p className="hidden text-justify text-lg font-light text-[#F8F4F0] sm:block">
                  Baked with passion, delivered with joy, our artisanal treats embody the essence of
                  our bakery. A delightful blend of love and warmth, served with a smile, inviting
                  you to savor every moment of indulgence.
                </p>

                <div className="flex items-center gap-2.5">
                  <Button className="h-[35px] rounded-[2px] bg-primary_btn p-1 hover:bg-hover-outline_btn">
                    <Link
                      to="/"
                      className="rounded-[2px] border border-primary-50/40 px-5 py-1.5 text-xs font-medium"
                    >
                      Let's Eat
                    </Link>
                  </Button>

                  <Button className="h-[34px] rounded-[2px] border-2 border-primary-50 bg-transparent px-6 py-2 hover:bg-hover-outline_btn">
                    <Link to="/" className="text-xs font-medium">
                      Book now
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </CarouselItem>
          <CarouselItem className="pl-0">
            <div className="relative h-[680px] w-full overflow-hidden lg:h-[734px]">
              <picture>
                <source srcSet="images/webp/login_banner.webp" type="image/webp" />
                <img
                  src="/images/login_banner.jpg"
                  alt="Bakery Hero Banner"
                  loading="eager"
                  className="fade-in-image absolute inset-0 h-full w-full object-cover object-center"
                  onLoad={(e) => (e.target as HTMLImageElement).classList.add("loaded")}
                />
              </picture>

              <motion.div
                className="absolute bottom-6 left-[calc(50%+8px)] flex max-w-[540px] -translate-x-1/2 flex-col items-center space-y-6 p-2.5 sm:bottom-[146px] sm:left-[50px] sm:translate-x-0 sm:items-start lg:max-w-[697px]"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className={quoteStyle}>
                  <span className="font-medium">Baker</span> with love, <br /> served with a{" "}
                  <span className="font-medium">Smile</span>
                </h1>

                <p className="hidden text-justify text-lg font-light text-[#F8F4F0] sm:block">
                  Baked with passion, delivered with joy, our artisanal treats embody the essence of
                  our bakery. A delightful blend of love and warmth, served with a smile, inviting
                  you to savor every moment of indulgence.
                </p>

                <div className="flex items-center gap-2.5">
                  <Button className="h-[35px] rounded-[2px] bg-primary_btn p-1 hover:bg-hover-outline_btn">
                    <Link
                      to="/"
                      className="rounded-[2px] border border-primary-50/40 px-5 py-1.5 text-xs font-medium"
                    >
                      Let's Eat
                    </Link>
                  </Button>

                  <Button className="h-[34px] rounded-[2px] border-2 border-primary-50 bg-transparent px-6 py-2 hover:bg-hover-outline_btn">
                    <Link to="/" className="text-xs font-medium">
                      Book now
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default BannerCarousel;
