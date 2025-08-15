import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">B.B</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <Link href="https://www.canva.com/design/DAGv9ARmuMs/lwv-r2wYsIcyHTB5KkdM2g/view?utm_content=DAGv9ARmuMs&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hacf1470663" target="_blank">
            <Button variant="outline" className="ml-auto">
              Resume
            </Button>
          </Link>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Bouzadi Badreddine
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Transforming data into impactful insights with modern tools. Passionate about building intelligent solutions to real-world challenges.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="https://github.com/Bouzadi74" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/badreddine-bouzadi-9bb040333/" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:badreddine.bouzadi@esi.ac.ma">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
                title="Weather script generator"
                description="A local web app that generates weather scripts for TV broadcast in Arabic ,French and English"
                image="/3.png?height=400&width=600"
                link="https://github.com/Bouzadi74/weather-script"
                tags={["RAG", "LLMs", "NLP", "Streamlit", "Prompt Engineering" ]}
              />
              <ProjectCard
                title="AI-Movie Night recommendation system"
                description="An intelligent movie recommender that suggests films based on user preferences using content-based filtering and cosine similarity."
                image="/AI-movie-night.png?height=400&width=600"
                link="https://github.com/Bouzadi74/Build-an-AI-Movie-Night-Recommendation-Tool-Project"
                tags={["Python", "Pandas", "Scikit-learn", "Numpy", "TMDB Dataset"]}
              />
              <ProjectCard
                title="Using Open Source AI Models with Hugging Face"
                description="A real-time task management application with team collaboration features."
                image="/huggingface.png?height=400&width=600"
                link="https://github.com/Bouzadi74/Using-Open-Source-AI-Models-with-Hugging-Face"
                tags={["Python", "PyTorch", "Transformers (by Hugging Face)", "PIL (Python Imaging Library)", "Huggingface Hub"]}
              />
              <ProjectCard
                title="Kids e-learning platform"
                description="An interactive e-learning platform for kids with engaging content and quizzes."
                image="/elearning.png?height=400&width=600"
                link="https://github.com/Bouzadi74/kids-e-learning"
                tags={["PHP", "Laraveel", "TailwindCSS", "MySQL", "HTML", "CSS", "JavaScript", "AlpineJS", "ViteJS","MySQL/MariaDB" ]}
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Bouzadi Badreddine. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
