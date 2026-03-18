import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { TrendingUp, DollarSign, Clock, Users, Zap, Target } from "lucide-react";

const KeyAchievements = () => {
  const achievements = [
    {
      title: "Best Employee of the Month",
      description: "Recognized as Best Employee of the Month at Tata Consultancy Services for consistent delivery, stakeholder collaboration, and quality reporting solutions.",
      icon: <Target className="w-8 h-8" />,
      company: "TCS",
      category: "Award",
      gradient: "from-blue-500 to-sky-500",
      metrics: ["Best Employee", "TCS", "Delivery Excellence"]
    },
    {
      title: "Grade A Rating in Annual Appraisal",
      description: "Received Grade A performance rating at TCS for measurable impact on analytics delivery and process improvement.",
      icon: <TrendingUp className="w-8 h-8" />,
      company: "TCS",
      category: "Performance",
      gradient: "from-teal-500 to-cyan-500",
      metrics: ["Grade A", "Annual Appraisal", "Performance Excellence"]
    },
    {
      title: "Employability Award",
      description: "Awarded Employability Award at University of Galway for strong analytics skills and industry-ready project delivery.",
      icon: <Zap className="w-8 h-8" />,
      company: "University of Galway",
      category: "Recognition",
      gradient: "from-purple-500 to-fuchsia-500",
      metrics: ["Employability Award", "University of Galway", "Analytics Competency"]
    }
  ];

  const getGradientClasses = (gradient: string) => {
    return `bg-gradient-to-br ${gradient}`;
  };

  return (
    <section id="achievements" className="py-24 px-4 bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Key <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Recognition and achievements demonstrating strong problem-solving skills, 
            competitive programming excellence, and innovation in national-level competitions.
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
              {achievements.map((achievement, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`p-3 rounded-xl ${getGradientClasses(achievement.gradient)} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {achievement.category}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {achievement.company}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-foreground group-hover:text-gradient transition-colors">
                            {achievement.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {achievement.description}
                      </p>

                      {/* Key Metrics */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-foreground">Key Metrics</h4>
                        <div className="flex flex-wrap gap-2">
                          {achievement.metrics.map((metric, metricIndex) => (
                            <Badge key={metricIndex} variant="outline" className="text-xs">
                              {metric}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4" />
            <CarouselNext className="right-2 md:right-4" />
          </Carousel>
          
          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {achievements.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-muted-foreground/30"
              />
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16">
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">Best Employee</div>
                  <div className="text-sm text-muted-foreground">TCS Award</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">Grade A</div>
                  <div className="text-sm text-muted-foreground">Annual Appraisal</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">Employability</div>
                  <div className="text-sm text-muted-foreground">University of Galway</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">2024</div>
                  <div className="text-sm text-muted-foreground">AWS Cloud Certified</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default KeyAchievements;
