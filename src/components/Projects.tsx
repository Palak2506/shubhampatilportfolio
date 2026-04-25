import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Github, TrendingUp, Zap, Brain, Target, Shield, Utensils } from "lucide-react";

const Projects = () => {
  const projects = [
    
    
    
    {
      title: "Role-Based Row-Level Security for Tableau Dashboards",
      description: "Designed and implemented row-level security for Tableau dashboards, building SQL-based access logic tied to reporting hierarchy so users saw only role-relevant data, strengthening governance and data security across the organisation.",
      icon: <Shield className="w-8 h-8" />,
      achievements: [
        {
          metric: "Enterprise Security",
          description: "Implemented row-level security ensuring users see only role-relevant data across Tableau dashboards"
        },
        {
          metric: "Reporting Hierarchy",
          description: "Built SQL-based access logic tied to organisational reporting structure for precise data governance"
        }
      ],
      technologies: ["Tableau", "SQL", "Row-Level Security", "Data Governance"],
      category: "Data & Analytics",
      gradient: "from-blue-500 to-purple-500",
      githubUrl: "https://github.com"
    },
    {
      title: "Data-Driven Nutrition Recommendation System",
      description: "Identified a gap in personalised health decision-making, designed a data-driven recommendation system that mapped user inputs to structured dietary recommendations, published in JETIR.",
      icon: <Utensils className="w-8 h-8" />,
      achievements: [
        {
          metric: "Published in JETIR",
          description: "Research paper published in Journal of Emerging Technologies and Innovative Research"
        },
        {
          metric: "Personalised Recommendations",
          description: "Built system that maps user inputs to structured dietary recommendations for health decisions"
        }
      ],
      technologies: ["Python", "Machine Learning", "Data Science", "Nutrition Analytics"],
      category: "Machine Learning",
      gradient: "from-green-500 to-emerald-500",
      githubUrl: "https://github.com"
    }
  ];

  const getGradientClasses = (gradient: string) => {
    return `bg-gradient-to-br ${gradient}`;
  };

  return (
    <section id="projects" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative solutions demonstrating expertise in distributed systems, backend development, 
            Android applications, and modern web technologies to solve real-world challenges.
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/2">
                  <div className="h-full min-h-[600px]">
                    <Card className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden h-full flex flex-col">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${getGradientClasses(project.gradient)} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          {project.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {project.category}
                            </Badge>
                          </div>
                          <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-gradient transition-colors">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4 md:space-y-6 flex-grow flex flex-col px-4 md:px-6">
                      <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                        {project.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements</h4>
                        {project.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex gap-3 p-3 bg-background/50 rounded-lg border border-primary/10">
                            <div className="flex-shrink-0 mt-0.5">
                              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                                <Zap className="w-3 h-3 text-primary" />
                              </div>
                            </div>
                            <div>
                              <div className="text-primary font-semibold text-sm">
                                {achievement.metric}
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex-grow">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2 min-h-[60px]">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>
          
          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {projects.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-muted-foreground/30"
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-gradient border-primary/20 shadow-elevated max-w-2xl mx-auto">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-center">
                Interested in <span className="text-gradient">Collaboration?</span>
              </h3>
              <p className="text-muted-foreground mb-6 text-center">
                I'm always excited to work on challenging problems and innovative solutions. 
                Let's discuss how we can build something amazing together.
              </p>
              
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;