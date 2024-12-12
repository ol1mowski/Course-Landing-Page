import Header from "./components/Header/Header.component";
import Hero from "./components/Hero/Hero";
import Excuses from "./components/Excuses/Excuses";
import BlockSectionWave from "./components/BlockSectionWave/BlockSectionWave";
import BlockSectionCode from "./components/BlockSectionCode/BlockSectionCode.component";
import Lessons from "./components/Lessons/Lessons.component";
import ScrollProgressList from "./components/ScrollProgressList/ScrollProgressList.component";
import Author from "./components/Author/Author.component";
import CourseDescription from "./components/CourseDescription/CourseDescription.component";
import CourseBenefits from "./components/CourseBenefits/CourseBenefits.component";
import CourseComparison from "./components/CourseComparison/CourseComparison.component";
import CourseTarget from "./components/CourseTarget/CourseTarget.component";
import FreeLessons from "./components/FreeLessons/FreeLessons.component";
import Bonuses from "./components/Bonuses/Bonuses.component";
import Offer from "./components/Offer/Offer.component";
import FAQ from "./components/FAQ/FAQ.component";

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
      <CourseTarget />
      <FreeLessons />
      <CourseComparison />
      <Author />
      <Lessons />
      <Bonuses />
      <Offer />
      <FAQ />
      <BlockSectionCode />
    </>
  );
}

export default App;
