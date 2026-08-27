import { ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionWrapper from "../ui/SectionWrapper";

function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-line bg-ink px-6 text-paper">
      <SectionWrapper><div className="mx-auto max-w-6xl">
        <p className="eyebrow !text-paper/50">04 / Contact</p>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_22rem] lg:items-end lg:gap-20">
          <div><h2 className="max-w-4xl text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[.95] tracking-[-.06em]">I’m ready to learn, contribute, and build.</h2><p className="mt-8 max-w-2xl text-lg leading-8 text-paper/65">I’m open to internships, junior software engineering roles, and thoughtful collaborations. If the work involves useful products and good people, I’d like to hear about it.</p><a href="mailto:kalvinkiprop@gmail.com" className="mt-10 inline-flex items-center gap-3 rounded-full bg-paper px-5 py-3 font-semibold text-ink transition hover:-translate-y-0.5">Start a conversation <ArrowUpRight size={18} /></a></div>
          <div className="space-y-4 border-t border-paper/15 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <a href="mailto:kalvinkiprop@gmail.com" className="social-link"><Mail size={18} /> Email</a>
            <a href="https://www.linkedin.com/in/kalvinbaranga" target="_blank" rel="noreferrer" className="social-link"><FaLinkedin size={18} /> LinkedIn</a>
            <a href="https://github.com/TheeBaranga" target="_blank" rel="noreferrer" className="social-link"><FaGithub size={18} /> GitHub</a>
          </div>
        </div>
        <footer className="mt-24 flex flex-col gap-3 border-t border-paper/15 pt-7 text-sm text-paper/45 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Kalvin Baranga</p><p>Designed and built in Nairobi.</p></footer>
      </div></SectionWrapper>
    </section>
  );
}
export default Contact;
