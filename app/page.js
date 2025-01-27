import Articles from "./components/articles";
import ContactForm from "./components/contact-form";
import { ProfileOverview } from "./components/profile-overview";
import Projects from "./components/projects";
import Skills from "./components/skills";
import WorkExperience from "./components/work-experience";

export default function Home() {
  return (
    <>
      <ProfileOverview />
      <Projects />
      <Skills />
      <WorkExperience />
      <Articles />
      <ContactForm />
    </>
  );
}
