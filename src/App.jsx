/*
 * @copyrtight 2025 Manjur Al Jubayer
 * License: Apache-2.0
 * Email: sfmanjur21@gmail.com
 */
import About from "./Components/About";
import Header from "./Components/Header";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default App;
