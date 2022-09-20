import { Link } from "react-router-dom";

const Home = ()=> {
  return (
    <div>
      <h1>홈</h1>
      <p>방문해 주셔서 감사합니다 </p>

      <p>
        {/* a 태그를 사용 하면 페이지를 이동할때 브라우저에서 페이지를 새로 불러오게 되기 때문에 Link 태그를 사용 해야 한다. */}
        <Link to="/about">About으로 이동</Link>
      </p>
    </div>
  );
}
export default Home;