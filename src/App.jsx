// import React from "react";
// import Header from "./layout/Header";
// import Footer from "./layout/Footer";
// import Gallery from "./componets/Gallery";
// import Auth from "./componets/Auth";

// const App = () => {
//   return (
//     <div>
//       <Header />
//       <main>
//         <Gallery />
//         <Auth />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default App;
// import React from "react";
// import SampleHeader from "./layout/SampleHeader";
// // import Footer from "./layout/Footer";
// import ButtonLang from "./layout/ButtonLang";
// import Gal from "./Components/Gal";
// import NInput from "./Components/NInput";
// // import SInput from "./Components/SInput";
// import MQ from "./ex/MQ";
// import Grid from "./ex/Grid";
// import Cal from "./ex/Cal";
// import Detail from "./Components/Detail";
import Header from "./Components2/Header";
import Gallery from "./Components2/Gallery";
import Calendar from "./Components2/Calendar";
import Detail from "./Components2/Detail";
import Input from "./Components2/Input";

const App = () => {
  return (
    <>
      {/* 헤더랑 메인과 푸터를 하나로 묶지 않기위해서 빈태그사용 */}
      {/* <SampleHeader />
      <main>
        <Gal />
        <NInput />
        <Detail /> */}
      {/* <SInput /> */}
      {/* // </main> */}
      {/* <Footer /> */}
      {/* <MQ />
      <Grid /> */}
      {/* <Cal /> */}
      <Header />
      <main>
        <Gallery />
        <Calendar />
        <Detail />
        <Input />
      </main>
    </>
  );
};

export default App;
