import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const categories = [
    { name: "Computer & Laptop", img: "/Computer.png" },
    { name: "SmartPhone", img: "/SmartPhone.png" },
    { name: "Headphones", img: "/HEadphoneCatagory.png" },
    { name: "Accessories", img: "/Accessories.png" },
    { name: "Camera & Photo", img: "/cameraCetagory.png" },
    { name: "TV & Homes", img: "/TV.png" },
    { name: "SmartPhone", img: "/SmartPhone.png" },
    { name: "Accessories", img: "/Accessories.png" },
    { name: "Computer & Laptop", img: "/Computer.png" },
    // add more if needed
];

const CategorySlider = () => {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        const { current } = scrollRef;
        if (direction === "left") {
            current.scrollBy({ left: -300, behavior: "smooth" });
        } else {
            current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <div className="relative w-full overflow-hidden">
            {/* Left Arrow */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-400 text-white p-2 z-10 rounded-full"
            >
                <FaArrowLeft />
            </button>

            {/* Scrollable Container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto overflow-y-hidden scrollbar-hide space-x-4 px-10 py-4"
            >
                {categories.map((cat, idx) => (
                    <div
                        key={idx}
                        className="flex-shrink-0 max-w-[205px] px-3 py-6 bg-white shadow rounded-lg flex flex-col items-center justify-center gap-x-[18px] "
                    >
                        <img src={cat.img} alt={cat.name} className="mb-4" />
                        <p className="text-center text-base leading-6 font-medium text-[#191C1F]">{cat.name}</p>
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            <button
                onClick={() => scroll("right")}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-400 text-white p-2 z-10 rounded-full"
            >
                <FaArrowRight />
            </button>
        </div>
    );
};

export default CategorySlider;
