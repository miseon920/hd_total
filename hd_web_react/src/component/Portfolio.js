import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const PTF = [
    {id:1,title:"서울시청"},
    {id:2,title:"서울드래곤시티(용산호텔)"},
    {id:3,title:"부산 파크하얏트"},
    {id:4,title:"송도 G타워"},
    {id:5,title:"롯데월드몰"},
    {id:6,title:"파라다이스시티호텔"},
    {id:7,title:"명동 대신증권 신사옥"},
    {id:8,title:"동대구복합환승센터"},
    {id:9,title:"VARYAP MERIDIAN"},
]
    
const a = PTF.slice(0, 1);
const b = PTF.slice(1, 9);
const NPTF = b.concat(a);
//console.log(NPTF);

const Portfolio = () => { 
    
    const LS = useRef();
    const RS = useRef();

    const [LSS,setLSS] = useState();
    const [RSS, setRSS] = useState();
    
    useEffect(() => { 
        setLSS(LS.current);
        setRSS(RS.current);
    }, [])

    const setting1 = {
        dots: false,
        arrows: false,
        fade: true,
        asNavFor:RSS
    };
    const setting2 = {
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false, 
        asNavFor: LSS,
    };
    return (
        <section className="Portfolio csc">
            <div className="container">
                <div className="left">
                    <div className="slide">
                        <Slider {...setting1} ref={LS}>
                            {
                                PTF.map((building, idx) => (
                                    <figure key={building.id}>
                                        <div className="box">
                                            <img src={`${process.env.PUBLIC_URL}/assets/img/main_m0${building.id}.jpg`} alt="" />
                                            <div className="des">{building.title}</div>
                                        </div>
                                </figure>
                            )) 
                            }
                        </Slider>
                    </div>
                </div>
                <div className="right">
                    <h2>건물의 가치를 높이는 현대엘리베이터</h2>
                    <p>특별한 기술을 실현할수록 여러분의 삶의 무대도 특별해 집니다.</p>
                    <div className="arrows">
                        <i className="xi-angle-left" onClick={()=>LSS.slickPrev()}></i>
                        <i className="xi-angle-right" onClick={()=>LSS.slickNext()}></i>
                    </div>
                    <div className="slide">
                        <Slider {...setting2} ref={RS}>
                            {
                                NPTF.map((building, idx) => (
                                    <figure key={building.id}>
                                        <div className="box">
                                            <img src={`${process.env.PUBLIC_URL}/assets/img/main_m0${building.id}.jpg`} alt="" />
                                            <div className="des">{building.title}</div>
                                        </div>
                                </figure>
                            )) 
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Portfolio;