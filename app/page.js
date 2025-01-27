import { ProfileOverview } from "@/app/components/profile-overview";
import Projects from "@/app/components/projects";
import Skills from "./components/skills";
import WorkExperience from "@/app/components/work-experience";
import Articles from "@/app/components/articles";
import ContactForm from "./components/contact-form";

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
