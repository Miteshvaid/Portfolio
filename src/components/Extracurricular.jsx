import Section from "./Section";
import { Award } from "lucide-react";
import List from "./List";

const Extracurricular = () => {
  const items = ["Block A", "Block B", "Block C", "Block D"];
  return (
    <Section icon={<Award />} sectionTitle="Extracurricular">
      <List items={items} />
    </Section>
  );
};
export default Extracurricular;
