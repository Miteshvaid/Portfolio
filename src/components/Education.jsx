import Graduation from "./Graduation";
import Section from "./Section";
import { BookOpen } from "lucide-react";

const Education = () => {
  return (
    <Section icon={<BookOpen />} sectionTitle="Education">
      <Graduation
        title="Bachelor of Computer Application"
        school="Banarsidas Chandiwala Institute of Information Technology (BCIIT)"
        year="2022-2025"
      />

      <Graduation title="Full Stack " school="Kg coding" year="2024" />
    </Section>
  );
};
export default Education;
