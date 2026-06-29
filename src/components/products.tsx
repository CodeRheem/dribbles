import React from "react"
import { type CarouselApi } from "@/components/ui/carousel"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Products() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <>
      <div className="relative mx-auto mt-26 min-h-160 rounded-3xl border border-black bg-black bg-cover bg-center p-4 shadow-[0_8px_15px_-3px_rgba(0,0,0,0.4)]">
        <div>
          <h1 className="absolute top-1/6 left-[18em] font-[Outfit] text-3xl text-gray-500">
            Discover Our Smart{" "}
            <span className="text-white dark:text-white">Products</span>
          </h1>
          <div>
            <Carousel
              setApi={setApi}
              className="absolute top-1/2 left-1/2 mt-13 h-96 w-3xl -translate-x-1/2 -translate-y-1/2"
            >
              <CarouselContent>
                <CarouselItem className="h-99 max-w-4xl shrink-0 overflow-hidden">
                  <div className="h-full overflow-hidden rounded-3xl">
                    <img
                      src="/nicolas-lafargue-Fj7l30GcAEQ-unsplash.jpg"
                      alt="Bluetooth speaker"
                      className="block h-full w-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="h-99 max-w-4xl shrink-0 overflow-hidden">
                  <div className="h-full overflow-hidden rounded-3xl">
                    <img
                      src="/public/mika-baumeister-7grkBahrEUs-unsplash.jpg"
                      alt="Blueetooth speaker"
                      className="h-full block w-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="h-99 max-w-4xl shrink-0 overflow-hidden">
                  <div className="h-full overflow-hidden rounded-3xl">
                    <img
                      src="/public/trude-jonsson-stangel-Bt4EUmDwghg-unsplash.jpg"
                      alt="Blueetooth speaker"
                      className="h-full block w-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="h-99 max-w-4xl shrink-0 overflow-hidden">
                  <div className="h-full overflow-hidden rounded-3xl">
                    <img
                      src="/public/nelly-antoniadou-0GCw3lAsfT0-unsplash.jpg"
                      alt="Blueetooth speaker"
                      className="h-full block w-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="h-99 max-w-4xl shrink-0 overflow-hidden">
                  <div className="h-full overflow-hidden rounded-3xl">
                    <img
                      src="/public/omar-flores-eMw1fBx4_Wk-unsplash.jpg"
                      alt="Blueetooth speaker"
                      className="h-full block w-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem className="h-99 max-w-4xl shrink-0 overflow-hidden">
                  <div className="h-full overflow-hidden rounded-3xl">
                    <img
                      src="/howard-bouchevereau-876c-F8YBrg-unsplash.jpg"
                      alt="Blueetooth speaker"
                      className="h-full block w-full object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </>
  )
}
