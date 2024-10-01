import { Globe } from "lucide-react";
import Section from "./Section";
import { Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Twitter } from "lucide-react";
import SocialMedia from "./SocialMedia";

const Contact = () => {
  const socailLinks = [
    { icon: <Linkedin />, title: "Linkedin", url: "http://www.linkedin.com" },

    { icon: <Github />, title: "GitHub", url: "" },

    { icon: <Twitter />, title: "Twitter", url: "" },
  ];

  return (
    <div className="pb-6">
      <Section icon={<Globe />} sectionTitle="Contact">
        <p className="text-sm mb-4 text-gray-700">
          Email: Miteshvaid2020@gmail. <br /> Phone: (+91) xxxxxxxxx4749
        </p>

        {socailLinks.map((social) => (
          <SocialMedia
            icon={social.icon}
            title={social.title}
            url={social.url}
          />
        ))}
      </Section>
    </div>
  );
};
export default Contact;
