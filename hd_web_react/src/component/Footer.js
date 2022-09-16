import FamilyLink from "./FamilyLink";
import ServiceLink from "./ServiceLink";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="ft_top">
        <div className="inner">
          <ul className="left">
            <li>
              <a href="#!">개인정보처리방침</a>
            </li>
            <li>
              <a href="#!">윤리경영 사이버신문고</a>
            </li>
            <li>
              <a href="#!">
                현대 고객케어센터 <span>1577-0603</span>
              </a>
            </li>
          </ul>
          <div className="right">
            <ServiceLink />
          </div>
        </div>
      </div>
      <div className="ft_bottom">
        <div className="inner">
          <address className="left"></address>
          <div className="right">
            <FamilyLink />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
