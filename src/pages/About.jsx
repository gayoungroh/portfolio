import { Link } from "react-router-dom";

const About = ()=> {
  return (
    <div>
      <h1>소개</h1>
      <p>웹퍼블리셔, 프론트엔드 개발자를 꿈꾸고 있습니다.</p>

      <p>
        {/* a 태그를 사용 하면 페이지를 이동할때 브라우저에서 페이지를 새로 불러오게 되기 때문에 Link 태그를 사용 해야 한다. */}
        <Link to="/">Home으로 이동</Link>
      </p>
    </div>
  );
}
export default About;