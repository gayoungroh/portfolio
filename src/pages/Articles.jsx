import { Link, Outlet } from "react-router-dom";

// const boxStyle = {
//   height:50,
//   lineHeight : '50px',
//   textAlign: 'center',
//   backgroundColor : '#ccc'
// };

const Articles = ()=>{
  return (
    <>
     {/* <header style={boxStyle}>아티클즈 헤더영역</header> */}
     {/* Outlet 사용 - <Route path=':id' element={<Article />} /> 가져옴. 
     중첩된 라우터와 Outlet은 페이지끼리 공통적으로 보여줘야 하는 레이아웃이 있을때 사용*/}
      <Outlet /> 
      <ul>
        <li><Link to="/articles/1">게시글-1</Link></li>
        <li><Link to="/articles/2">게시글-2</Link></li>
        <li><Link to="/articles/3">게시글-3</Link></li>
      </ul>    

      {/* <footer style={boxStyle}>아티클즈 푸터영역</footer> */}
    </>

  );
}

export default Articles;