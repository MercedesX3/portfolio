import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "../../components/ui/card"; // adjust path
import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import ImageCarousel from "../ui/imageCarousel"

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Basic focus starter
  useEffect(() => {
    dialogRef.current?.focus();
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      aria-modal="true"
      role="dialog"
      onClick={onClose}
    >
      <Card
        className="relative w-full max-w-3xl max-h-[85vh] p-10 rounded-2xl overflow-y-auto bg-white"
        onClick={(e) => e.stopPropagation()}
        ref={dialogRef}
        tabIndex={-1}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 rounded-full p-2 hover:bg-black/5"
        >
          <X className="h-5 w-5" />
        </button>

        <CardHeader>
          <CardTitle className="text-2xl font-bold">{project.title}</CardTitle>
          <CardDescription className="italic">{project.description}</CardDescription>
        </CardHeader>

        {/* Image */}
        <ImageCarousel className="mt-5" images={project.photosForCarousel}/>

        <CardContent>
          {/* Tech chips */}
          {project.techStack?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span
                  key={t}
                  className="rounded-full border px-3 py-1 text-xs hover:bg-black/5 transition-colors duration-500"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {/* Meta */}
          <div className="mt-6 grid gap-4">
            {project.purpose && (
              <section>
                <h3 className="mb-1 text-sm font-semibold">Purpose</h3>
                <p className="text-sm text-muted-foreground">{project.purpose}</p>
              </section>
            )}
            {project.challenges && (
              <section>
                <h3 className="mb-1 text-sm font-semibold">Challenges</h3>
                <ul
                  role="list"
                  className="list-disc list-inside text-sm text-muted-foreground space-y-1 marker:text-black/60"
                >
                {(Array.isArray(project.challenges) ? project.challenges : [project.challenges])
                  .filter(Boolean)
                  .map((k, i) => (
                    <li key={i}>{k}</li>
                  ))}
                </ul>
              </section>
            )}
            {project.learnings && (
              <section>
                <h3 className="mb-1 text-sm font-semibold">Learnings</h3>
                <ul
                  role="list"
                  className="list-disc list-inside text-sm text-muted-foreground space-y-1 marker:text-black/60"
                >
                {(Array.isArray(project.learnings) ? project.learnings : [project.learnings])
                  .filter(Boolean)
                  .map((k, i) => (
                    <li key={i}>{k}</li>
                  ))}
                </ul>
              </section>
            )}
            {project.date && (
              <p className="text-xs text-muted-foreground">Date: {project.date}</p>
            )}
          </div>
        </CardContent>

        <CardFooter className="justify-between gap-2">
          <div className="mt-4 flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border px-3 py-2 text-sm font-medium hover:bg-black/5"
              >
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:bg-black/90"
              >
                Live
              </a>
            )}
          </div>
          {/* <button
            onClick={onClose}
            className="mt-4 text-sm border-1 border-gray-400 px-5 py-2 rounded-md"
          >
            Close
          </button> */}
        </CardFooter>
      </Card>
    </div>
  );
}
