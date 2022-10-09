import "./App.css"
import json from "./Json/selectCity.json";
// Comporents links start
import Nav from "./Components/nav/nav";
import Banner from "./Components/banner/banner";
import Choose from "./Components/choose/choose";
import About from "./Components/about/about";
import Footer from "./Components/footer/footer";
// Comporents lins end
const App = () => {
  const navLinksText = json[0].navLinks;
  const bannerText = json[0].heroSection;
  const aboutText = json[0].about;
  // console.log();
  return (
    <div>
      <Nav navtext={navLinksText} />
      <Banner bantext={bannerText} />
      <Choose data={json} />
      <About data={aboutText} />
      <Footer locationstext={json[0].foorer.locations}
        menu={json[0].foorer.menu}
        icons={json[0].foorer.icons} />
    </div>
  );
}
export default App;
