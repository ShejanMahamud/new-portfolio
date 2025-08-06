import { about } from "@/portfolio";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CustomLink from "./ui/CustomLink";
import ResumeButton from "./ui/ResumeButton";
import ScrollFadeInWrapper from "./ui/ScrollFadeInWrapper";

const About = () => {
  const { name, role, description, resume, social } = about;

  return (
    <ScrollFadeInWrapper className="flex flex-col justify-center items-center md:pt-10 pb-5">
      {name && (
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-display">
          Hi, I am <span className="opacity-75">{name}.</span>
        </h1>
      )}

      {role && <h2 className="text-2xl mt-2 font-display">A {role}.</h2>}
      <p className="max-w-[600px] mt-6 opacity-75 leading-relaxed">
        {description && description}
      </p>

      <div className="flex space-x-2 items-center mt-8">
        {resume && <ResumeButton resumeUrl={resume} className="rounded-full" />}

        {social && (
          <>
            {social.github && (
              <CustomLink
                href={social.github}
                aria-label="github"
                variant="icon"
                target="_blank"
              >
                <GitHubIcon />
              </CustomLink>
            )}

            {social.linkedin && (
              <CustomLink
                href={social.linkedin}
                aria-label="linkedin"
                variant="icon"
                target="_blank"
              >
                <LinkedInIcon />
              </CustomLink>
            )}
            {social.leetcode && (
              <CustomLink
                href={social.leetcode}
                aria-label="leetcode"
                variant="icon"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#ffffff"
                  fill="none"
                >
                  <path
                    d="M13.8514 3L4.62921 12C3.79026 12.8187 3.79026 14.1462 4.62921 14.9649L10.1841 20.386C11.0231 21.2047 12.3833 21.2047 13.2222 20.386L15.9997 17.6754"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.33203 10.3377L10.1836 6.57889C11.0226 5.76016 12.3828 5.76016 13.2217 6.57889L15.9992 9.28943"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11 13H20"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </CustomLink>
            )}
            {social.medium && (
              <CustomLink
                href={social.medium}
                aria-label="medium"
                variant="icon"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  color="#ffffff"
                  fill="none"
                >
                  <circle
                    cx="6.5"
                    cy="12"
                    r="4.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                  ></circle>
                  <ellipse
                    cx="15.5"
                    cy="12"
                    rx="2.5"
                    ry="4.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                  ></ellipse>
                  <ellipse
                    cx="21"
                    cy="12"
                    rx="1"
                    ry="4.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                  ></ellipse>
                </svg>
              </CustomLink>
            )}
          </>
        )}
      </div>
    </ScrollFadeInWrapper>
  );
};

export default About;
