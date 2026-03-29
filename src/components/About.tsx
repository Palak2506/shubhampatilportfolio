import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Database, Zap } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Analysis & Problem Solving",
      skills: ["Requirements Analysis", "Stakeholder Management", "Process Mapping", "Business Process Improvement", "Decision Support"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Data & Reporting",
      skills: ["SQL", "Power BI", "Tableau", "Excel Advanced", "Snowflake", "KPI Design"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Delivery & Collaboration",
      skills: ["Agile", "UAT", "Sprint Planning", "Backlog Management", "Cross-functional Collaboration"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Tools & Platforms",
      skills: ["JIRA", "Azure DevOps", "ServiceNow", "Power BI", "Tableau"]
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Business analytics professional with a BE in Computer Science and a Master’s in Business Analytics (University of Galway). I connect modelling, visualization, and Agile delivery—SQL, BI, and stakeholder reporting from my work at TCS—to decisions teams can act on.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          {/* Professional Summary */}
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Over three years in analyst and client-facing delivery roles—most recently as Assistant System Engineer (Analyst) at TCS—building KPI dashboards and reports with SQL, Power BI, Tableau, and Snowflake, and tuning queries and ETL flows to shorten reporting cycles.
                </p>
                <p>
                  Comfortable owning the bridge from workshops and stakeholder needs to structured documentation (BRDs, user stories) and testable outcomes, including UAT coordination and backlog work in JIRA and Azure DevOps.
                </p>
                <p>
                  Coursework and projects span business modelling, strategic management, big data and data science, and a strong CS base in software engineering, databases, and machine learning—so I can work credibly with both business teams and technical owners.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center">
            Areas of <span className="text-gradient">Expertise</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary group-hover:text-accent transition-colors">
                      {category.icon}
                    </div>
                    <h4 className="font-bold text-lg">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Core Skills */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold mb-4 text-muted-foreground">Core Skills & Tools</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {["Requirements Analysis", "Stakeholder Management", "Process Mapping", "Business Process Improvement", "Data Interpretation", "Decision Support", "SQL", "Power BI", "Tableau", "Excel (Advanced)", "Snowflake", "KPI Design & Performance Reporting", "Agile", "UAT", "Cross-functional Collaboration", "Sprint Planning & Backlog Management", "JIRA", "Azure DevOps", "ServiceNow"].map((concept, index) => (
              <Badge key={index} variant="outline" className="text-sm px-4 py-2">
                {concept}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;