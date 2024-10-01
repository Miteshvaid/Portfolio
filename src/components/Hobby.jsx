import Section from "./Section";
import { Heart } from "lucide-react";
import List from "./List";
const Hobbies = () => {
  const hobbies = [
    "Photography",
    "Hiking",
    "playing guitar",
    "Reading sci-fi novels",
  ];
  return (
    <Section icon={<Heart />} sectionTitle="Hobbies & Interests ">
      <List items={hobbies} />
    </Section>
  );
};
export default Hobbies;
