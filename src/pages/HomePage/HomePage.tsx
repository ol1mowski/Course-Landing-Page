import { memo } from 'react';
import Hero from "../../components/Hero/Hero";
import Excuses from "../../components/Excuses/Excuses";
import BlockSectionWave from "../../components/BlockSectionWave/BlockSectionWave";
import ScrollProgressList from "../../components/ScrollProgressList/ScrollProgressList.component";
import CourseDescription from "../../components/CourseDescription/CourseDescription.component";
import CourseBenefits from "../../components/CourseBenefits/CourseBenefits.component";
import CourseTarget from "../../components/CourseTarget/CourseTarget.component";
import FreeLessons from "../../components/FreeLessons/FreeLessons.component";
import CourseComparison from "../../components/CourseComparison/CourseComparison.component";
import Author from "../../components/Author/Author.component";
import Lessons from "../../components/Lessons/Lessons.component";
import Bonuses from "../../components/Bonuses/Bonuses.component";
import Offer from "../../components/Offer/Offer.component";
import FAQ from "../../components/FAQ/FAQ.component";

const HomePage = memo(() => (
  <>
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
  </>
));

export default HomePage; 