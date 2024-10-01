import { User } from "lucide-react";
import Section from "./Section";
const AboutMe = () => {
  return (
    <div className="mt-8">
      <Section icon={<User />} sectionTitle="About Me">
        <p className="font-serif text-xl ">
          I am a BCA student specializing in Software Development at Banarsidas
          Chandiwala Institute of Information Technology, affiliated with Guru
          Gobind Singh Indraprastha University. With a strong foundation in
          coding and a passion for technology, I am dedicated to crafting
          innovative and efficient software solutions. I am continuously
          learning and evolving in the fast-paced world of software development,
          and I am excited to apply my skills in new and challenging
          environments
        </p>
      </Section>
    </div>
  );
};
export default AboutMe;
