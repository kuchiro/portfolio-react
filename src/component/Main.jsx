import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import Background from "./Background"
export default function Main({language}) {
  return (<main>
    <About language={language}/>
    <Skills language={language}/>
    <Projects language={language}/>
    <Background language={language}/>
  </main>);
}
