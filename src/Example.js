import { useState } from "react";
import { StarIcon, XIcon } from "@heroicons/react/solid";
import { RadioGroup } from "@headlessui/react";
import { CurrencyDollarIcon, GlobeIcon } from "@heroicons/react/outline";

import { Carousel } from "react-daisyui";

import EdiText from "react-editext";

import SelectDropdown from "./components/forms/SelectDropdown";
import SelectDropdownWeight from "./components/forms/SelectDropdownWeight";

import Weight from "./components/forms/Weight";

const product = {
  name: "Basic Tee",
  price: "$35",
  rating: 3.9,
  reviewCount: 512,
  href: "#",
  images: [
    {
      id: 1,
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
  ],
  colors: [
    { name: "Black", bgColor: "bg-gray-900", selectedColor: "ring-gray-900" },
    {
      name: "Heather Grey",
      bgColor: "bg-gray-400",
      selectedColor: "ring-gray-400",
    },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: false },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  return (
    <div>
      <div className="pt-16 sm:pb-24 ">
        <div className="mt-8 max-w-2xl mx-auto px-2 sm:px-4 lg:max-w-7xl lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
            <div className="lg:col-start-8 lg:col-span-5">
              <div className="flex justify-between">
                <h1 className="text-xl font-medium text-gray-900">
                  {product.name}
                </h1>
                <button
                  type="button"
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Close panel</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              {/* Reviews */}
              <div className="mt-4">
                <div className="flex items-center">
                  <button
                    type="button"
                    className="text-gray-500 bg-white border border-gray-300 mr-2 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-full px-2 py-1"
                  >
                    <p className={`capitalize text-xs`}>Exercise</p>
                  </button>
                  <button
                    type="button"
                    className="text-gray-500 bg-white border border-gray-300 mr-2 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-full px-2 py-1"
                  >
                    <p className={`capitalize text-xs`}>Exercise Body</p>
                  </button>
                  <button
                    type="button"
                    className="text-gray-500 bg-white border border-gray-300 mr-2 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-full px-2 py-1"
                  >
                    <p className={`capitalize text-xs`}>Exercise Upper Body</p>
                  </button>
                </div>
              </div>
            </div>

            {/* Image gallery */}
            <div className="mt-8 lg:mt-0 lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
              <h2 className="sr-only">Images</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                {product.images.map((image) => (
                  <img
                    key={image.id}
                    src={image.imageSrc}
                    alt={image.imageAlt}
                    className={classNames(
                      image.primary
                        ? "lg:col-span-2 lg:row-span-2"
                        : "hidden lg:block",
                      "rounded-lg"
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8 lg:col-span-5">
              <form>
                {/* Color picker */}
                <div className="flex justify-between">
                  <div className="flex-auto ">
                    <h2 className="text-sm font-medium text-gray-900 mb-2">
                      Sets
                    </h2>

                    <SelectDropdown />
                  </div>
                  <div className="flex-auto"></div>
                  <div className="flex-auto ">
                    <h2 className="text-sm font-medium text-gray-900 mb-2">
                      Reps
                    </h2>

                    <SelectDropdown />
                  </div>
                </div>

                {/* Size picker */}
                <div className="mt-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-sm font-medium text-gray-900 mb-4">
                      Weights
                    </h2>
                  </div>
                  <div className="flex">
                    <Carousel className=" w-96 ">
                      <Carousel.Item className=" w-96">
                        <Weight />
                      </Carousel.Item>
                      <Carousel.Item className=" w-96">
                        <Weight />
                      </Carousel.Item>
                    </Carousel>
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  View Cart
                </button>
              </form>

              {/* Product details */}
              {/* <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">
                  Description
                </h2>
              </div> */}

              <div className="mt-8 border-t border-gray-200 pt-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
