import Header from "./components/Header/Header.component";
import Hero from "./components/Hero/Hero";
import Excuses from "./components/Excuses/Excuses";
import BlockSectionWave from "./components/BlockSectionWave/BlockSectionWave";
import Benefits from "./components/Benefits/Benefits.component";
import BlockSectionCode from "./components/BlockSectionCode/BlockSectionCode.component";
import Lessons from "./components/Lessons/Lessons.component";
import ScrollProgressList from "./components/ScrollProgressList/ScrollProgressList.component";
import Author from "./components/Author/Author.component";
import CourseDescription from "./components/CourseDescription/CourseDescription.component";
import CourseBenefits from "./components/CourseBenefits/CourseBenefits.component";
import CourseComparison from "./components/CourseComparison/CourseComparison.component";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Excuses />
      <BlockSectionWave />  
      <ScrollProgressList />
      <CourseDescription />
      <CourseBenefits />
      <CourseComparison />
      <Author />
      <Lessons />
      <BlockSectionCode />
    </>
  );
}

export default App;
