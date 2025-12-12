import { Mail, Linkedin, Github, Code, Cloud, Database, Globe, Trophy, Target } from "lucide-react";

const Index = () => {
  const skills = {
    "Programming & Development": ["HTML", "CSS", "JavaScript", "Angular", "Node.js", "Java", "Python", "R"],
    "Web & App Development": ["Responsive Web Design", "UI/UX Implementation", "Frontend Development"],
    "Cloud & Data": ["Google Cloud Platform", "Microsoft Azure", "Data Mining", "Machine Learning"],
    "Other Tools": ["Git & GitHub", "VS Code", "IntelliJ IDEA", "Figma"]
  };

  const projects = [
    {
      title: "Multimodal Emotion Recognition + Song Recommendation",
      description: "Developed a system that detects user emotions using unimodal and multimodal inputs. Integrated song recommendation based on detected emotion.",
      tools: ["R", "Python", "Machine Learning"]
    },
    {
      title: "Stock Management System",
      description: "Built a complete inventory management application with CRUD operations. Implemented user-friendly UI for efficient stock tracking.",
      tools: ["Java", "DBMS"]
    },
    {
      title: "Football Match Prediction",
      description: "Developed a predictive model for football match outcomes. Applied statistical techniques and data mining algorithms.",
      tools: ["R", "Data Mining"]
    },
    {
      title: "Neighborhood Service Finder",
      description: "Created a web application to find local services and shops. Features include search, location-based filtering, and responsive design.",
      tools: ["HTML", "CSS", "JavaScript", "Angular"]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-5xl font-bold text-primary-foreground shadow-2xl">
              S
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Shatiyaa B
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2">
            Computer Science Engineering Student
          </p>
          <p className="text-lg text-primary font-medium mb-8">
            Placed at Accenture (ASE)
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:shatiyaa2004@gmail.com" className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/shatiyaa-b-360369289/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/Shatiyaa" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate Computer Science Engineering student with a strong foundation in programming, web development, cloud computing, and data science. I enjoy building <span className="text-foreground font-medium">efficient, user-friendly applications</span> and exploring innovative solutions using modern technologies.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground mt-4">
              I have hands-on experience in frontend and backend development, cloud platforms, and data-driven projects. I am highly motivated, detail-oriented, and always eager to learn and apply new technologies. My goal is to combine creativity with technical expertise to build meaningful digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <div key={category} className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  {index === 0 && <Code className="w-6 h-6 text-primary" />}
                  {index === 1 && <Globe className="w-6 h-6 text-primary" />}
                  {index === 2 && <Cloud className="w-6 h-6 text-primary" />}
                  {index === 3 && <Database className="w-6 h-6 text-primary" />}
                  <h3 className="text-xl font-semibold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="px-2.5 py-1 bg-primary/10 text-primary rounded-md text-xs font-medium">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Achievements</h2>
          <div className="space-y-4">
            {[
              "Placed at Accenture ASE as a fresher",
              "Successfully completed multiple academic and freelance projects",
              "Experience in integrating machine learning models with web applications",
              "Consistently recognized for clean coding and UI implementation"
            ].map((achievement, index) => (
              <div key={index} className="flex items-start gap-4 bg-card rounded-xl p-5 shadow-md border border-border">
                <Trophy className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-lg">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What I Offer</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "High-quality websites and applications",
              "Efficient and clean code",
              "Freelance web development solutions",
              "Continuous learning and innovation"
            ].map((goal, index) => (
              <div key={index} className="flex items-center gap-3 bg-card rounded-xl p-5 shadow-md border border-border">
                <Target className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="font-medium">{goal}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg mb-8 opacity-90">
            I'm always open to discussing new projects and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:shatiyaa2004@gmail.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-foreground text-primary rounded-full font-medium hover:opacity-90 transition-opacity">
              <Mail className="w-5 h-5" />
              shatiyaa2004@gmail.com
            </a>
            <a href="https://linkedin.com/in/shatiyaa-b-360369289/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-foreground rounded-full font-medium hover:bg-primary-foreground/10 transition-colors">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a href="https://github.com/Shatiyaa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-foreground rounded-full font-medium hover:bg-primary-foreground/10 transition-colors">
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-muted-foreground border-t border-border">
        <p>© 2024 Shatiyaa B. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;

