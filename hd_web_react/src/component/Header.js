import { useEffect, useRef, useState } from "react";
import TopBanner from "./TopBanner";

const NavLink = [
  {
    id: 1,
    menu: "기업정보",
    link: "/sub01",
    submenu: [
      {
        id: 1,
        smenu: "기업현황",
        slink: "/sub0101",
      },
      {
        id: 2,
        smenu: "개요",
        slink: "/sub0102",
      },
    ],
  },
  {
    id: 2,
    menu: "솔루션",
    link: "/sub02",
    submenu: [
      {
        id: 1,
        smenu: "투자정보",
        slink: "/sub0201",
      },
      {
        id: 2,
        smenu: "재무정보",
        slink: "/sub0202",
      },
    ],
  },
  { id: 3, menu: "서비스", link: "/sub03" },
  { id: 4, menu: "혁신기술", link: "/sub04" },
  { id: 5, menu: "고객지원", link: "/sub05" },
];
const Header = ({parentFunction,pstate}) => {
  const [TG, setTG] = useState(false);
  const HL = useRef();
  useEffect(() => { 
    window.addEventListener('scroll', function () { 
      let sct = window.scrollY;
      sct > 0 ? HL.current.classList.add("on")
      : HL.current.classList.remove("on")
    });
  }, [])
  //useEffect는 선택할수없는 곳에 스크립트를 넣을때 / 데이터를 한번만 실행할때 거의 사용
  function TST(e) {
    const val = e.currentTarget.parentElement;
    val.classList.toggle("on");
  }
  return (
    <header className="Header" ref={HL}>
      <TopBanner parentFunction={parentFunction} pstate={pstate}/>
      <div className="hd_wrap">
        <h1>
          <a href="/">
            {/* <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt="" /> */}
            현대엘리베이트
          </a>
        </h1>
        <nav className="Gnb inner">
          <ul>
            {NavLink.map((el, idx) => (
              <li key={el.id}>
                <a href={el.link}>{el.menu}</a>
                {el.submenu ? (
                  <div className="submenu">
                    <ul>
                      {el.submenu.map((smenu, idx) => (
                        <li key={smenu.id}>
                          <a href={smenu.slink}>{smenu.smenu}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
        <div className="top_service">
          <ul className="project">
            <li>
              <a href="#!">주요프로젝트</a>
            </li>
            <li>
              <a href="#!">IR</a>
            </li>
          </ul>
          <div className={`lang`}>
            <strong onClick={TST}>
              <i className="xi-globus"></i> KOR
              <i className="xi-angle-down arrow"></i>
            </strong>
            <ul className="lang_box">
              <li>
                <a href="#!">KOR</a>
              </li>
              <li>
                <a href="#!">ENG</a>
              </li>
              <li>
                <a href="#!">CHN</a>
              </li>
            </ul>
          </div>
          <div className={`top_search`}>
            <strong onClick={TST}>
              <i className="xi-search"></i>
            </strong>
            <div className="search_box">
              <form action="#!">
                <input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  required=""
                />
                <button>
                  <i className="xi-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
