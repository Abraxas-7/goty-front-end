import Slider from "react-slick";

export default function ImageCarousel({ images }) {
  if (!images || images.length === 0) return null;

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    swipe: true,
    focusOnSelect: true,
    pauseOnHover: true,
    draggable: true,
    touchMove: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="shadow p-3 py-5" style={{ backgroundColor: "#04060E" }}>
      <Slider {...settings}>
        {images.map(({ gallery_image_path, id }, index) => (
          <div key={id ?? index} className="px-2">
            <img
              src={`${import.meta.env.VITE_STORAGE_URL}/${gallery_image_path}`}
              alt={`screenshot-${index}`}
              className=" rounded-3 w-100 h-100 object-fit-fill"
              style={{
                aspectRatio: "16 / 9",
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
