import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import uniqid from "uniqid";
import { projects } from "../portfolio";
import CustomLink from "./ui/CustomLink";

const ProjectContainer = ({ project }: { project: (typeof projects)[0] }) => (
  <Card variant="outlined" color="primary">
    <CardContent>
      <div className="flex items-baseline space-x-1 flex-wrap">
        <h3 className="font-display text-2xl">{project.name}</h3>
        <span className="font-display"> - {project.year}</span>
      </div>

      <p className="mt-1 leading-relaxed">{project.description}</p>
      {project.stack && (
        <div className="mt-3">
          <div className="flex flex-wrap items-center gap-1">
            {project.stack.map((item, index) => (
              <span key={uniqid()}>
                <span className="text-xs bg-[#0B7EBD] text-white px-2 py-1 rounded font-medium">
                  {item}
                </span>
                {index < project.stack.length - 1 && (
                  <span className="mx-1 text-gray-300">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      <CardActions>
        {project.sourceCode && (
          <CustomLink
            href={project.sourceCode}
            aria-label="source code"
            variant="icon"
            target="_blank"
          >
            <GitHubIcon />
          </CustomLink>
        )}

        {project.liveUrl && (
          <CustomLink
            href={project.liveUrl}
            aria-label="live preview"
            variant="icon"
            target="_blank"
          >
            <LaunchIcon />
          </CustomLink>
        )}

        {project.projectUrl && (
          <CustomLink
            href={project.projectUrl}
            aria-label="project preview"
            variant="icon"
          >
            <VisibilityIcon />
          </CustomLink>
        )}
      </CardActions>
    </CardContent>
  </Card>
);

export default ProjectContainer;
