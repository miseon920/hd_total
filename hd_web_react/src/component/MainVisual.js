import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const SLIDE = [
    { id: 1, content: <span>01 The world expands <br />along the new path created</span>, desc: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.", link: "https://my.matterport.com/show/?m=yEdf9FWaNav", title: "The world expands" },
    { id: 2, content: "02 The world expands along the new path created", desc: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.", link: "https://my.matterport.com/show/?m=yEdf9FWaNav", title: "New path created" },
    { id: 3, content: "03 The world expands along the new path created", desc: "현대엘리베이터가 만든 새로운 길을 따라 세상은 위로 넓어집니다.", link: "https://my.matterport.com/show/?m=yEdf9FWaNav", title: "World expands" }
];
const MainVisual = () => {
  const [IDX, setIDX] = useState();
  useEffect(() => {
    setIDX(0);
  }, []);
  const settings = {
    dots: false,
    arrows: false,
    afterChange: (index) => setIDX(index),
    autoplay: true,
  };
  const mainSlide = useRef();
  return (
    <section className="MainVisual">
      <Slider {...settings} ref={mainSlide}>
        {SLIDE.map((slide, idx) => (
          <figure
            className={`item item0${slide.id} ${idx === IDX ? "on" : ""}`}
            key={slide.id}
          >
            <div className="inner">
                <p className='tit'>{slide.content}</p>
                <div className='des'>{slide.desc}</div>
                <a href={slide.link} target="_blank" className='cbtn'>
                    VIEW MORE
                </a>
            </div>
          </figure>
        ))}
      </Slider>
      <div className="slideNum">
        0{IDX + 1} <span> 0{SLIDE.length}</span>
      </div>
      <ul className="slideTab">
        {SLIDE.map((dots, idx) => (
          <li
            key={dots.id}
            className={idx === IDX ? "on" : ""}
            onClick={() => {
              mainSlide.current.slickGoTo(idx);
            }}
          >
           {dots.title}
          </li>
        ))}
      </ul>
      <div className="slideArrows">
        <button onClick={() => mainSlide.current.slickPrev()}>
          <i className="xi-arrow-left"></i>
        </button>
        <button onClick={() => mainSlide.current.slickNext()}>
          <i className="xi-arrow-right"></i>
        </button>
      </div>
    </section>
  );
};
export default MainVisual;
