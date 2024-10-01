import Section from "./Section";
import { Code } from "lucide-react";
import Pill from "./Pills";
const Skills = () => {
  const SkillTitles = [
    "Javascript",
    "React",
    "Node.js",
    "Express.js",
    "Java",
    "Git",
    "GitHub",
  ];

  return (
    <Section icon={<Code />} sectionTitle="Skills">
      {SkillTitles.map((title) => (
        <Pill title={title} />
      ))}
    </Section>
  );
};
export default Skills;
