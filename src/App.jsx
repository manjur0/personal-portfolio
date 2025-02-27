/*
 * @copyrtight 2025 Manjur Al Jubayer
 * License: Apache-2.0
 * Email: sfmanjur21@gmail.com
 */
import About from "./Components/About";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Skill from "./Components/Skill";
import Work from "./Components/Work";



const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
      </main>
    </div>
  );
};

export default App;
