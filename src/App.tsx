import React, { useState } from 'react';
import { 
  Server, 
  Globe, 
  GitBranch, 
  Cloud, 
  Database,
  Shield,
  CheckCircle2,
  MapPin,
  Mail,
  Github,
  Linkedin,
  FileText,
  ChevronRight,
  Download,
  ExternalLink,
  Cpu,
  Terminal as TerminalIcon,
  Award,
  GraduationCap
} from 'lucide-react';

interface Job {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  stack: string[];
}

interface Project {
  name: string;
  description: string;
  tags: string[];
  status: 'Production' | 'Migration' | 'Automation';
}

export default function App() {
  const profile = {
    name: "Pragadeesh K",
    title: "Senior Software Engineer | DevOps & Cloud",
    summary: "Senior Software Engineer with 4+ years of experience specializing in DevOps and Cloud Infrastructure. Expert in architecting AWS environments, building Kubernetes clusters from scratch, and automating CI/CD pipelines. Proficient in leveraging AI-assisted engineering tools (Cursor, Copilot) to accelerate infrastructure coding and delivery.",
    location: "Chennai, India",
    email: "k.pragadeesh30@gmail.com", 
    github: "[github.com/KPragadeesh](https://github.com/KPragadeesh)",
    linkedin: "[linkedin.com/in/kpraga](https://linkedin.com/in/kpraga)"
  };

  const skills = {
    cloud: ["AWS (EC2, S3, Lambda, IAM, VPC)", "Azure DevOps", "Route53", "CloudWatch"],
    containerization: ["Kubernetes", "Docker", "Helm", "Istio Service Mesh"],
    iac: ["Terraform", "Ansible", "CloudFormation"],
    cicd: ["Jenkins", "GitHub Actions", "Git", "Groovy"],
    scripting: ["Python", "Bash", "Java", "YAML"],
    monitoring: ["Prometheus", "Grafana", "Dynatrace"],
    tools: ["Cursor IDE", "GitHub Copilot", "Claude", "Selenium", "JMeter"]
  };

  const experience: Job[] = [
    {
      company: "Freshworks",
      role: "Senior Software Engineer",
      period: "Aug 2025 - Present",
      location: "Chennai",
      description: "Leading infrastructure automation and cloud provisioning for production environments.",
      stack: ["AWS", "Terraform", "Kubernetes", "Jenkins", "Python", "Groovy", "Istio"],
      achievements: [
        "Designed and provisioned AWS cloud infrastructure using Terraform (VPC, EC2, RDS, S3, Auto Scaling).",
        "Built and operated Kubernetes clusters from scratch, implementing Istio service mesh for traffic management.",
        "Reduced release cycles by 70% by developing end-to-end CI/CD pipelines using Jenkins and GitHub Actions.",
        "Leveraged AI-assisted tools (Cursor AI, Copilot) to accelerate infrastructure coding and automation scripting.",
        "Optimized Docker builds using multi-stage builds and distroless images, enhancing productivity."
      ]
    },
    {
      company: "Chargebee",
      role: "Software Engineer",
      period: "Mar 2024 - Aug 2025",
      location: "Chennai",
      description: "Focused on CI/CD automation and AWS infrastructure for SaaS billing platforms.",
      stack: ["AWS", "Terraform", "GitHub Actions", "Bash", "Python", "Docker"],
      achievements: [
        "Automated AWS infrastructure provisioning using Terraform for high-availability billing services.",
        "Developed Python-based automation tools for large-scale customer and invoice data migration.",
        "Streamlined deployment workflows and operational health checks using Bash and Shell scripts.",
        "Provided 24/7 production support for SaaS billing workloads and incident resolution."
      ]
    },
    {
      company: "Agilysys Inc",
      role: "Software Analyst - SDET",
      period: "Jun 2021 - Mar 2024",
      location: "Chennai",
      description: "Led test automation and performance engineering for SaaS products.",
      stack: ["Java", "Selenium", "RestAssured", "Azure DevOps", "Dynatrace"],
      achievements: [
        "Led UI Automation Testing for 4 SaaS products using Selenium + Java, reducing regression time by 35%.",
        "Contributed to Backend API Test Automation Suite using RestAssured and JMeter.",
        "Configured performance monitoring via Dynatrace, catching critical backend issues pre-release.",
        "Recognized for increasing test cycle efficiency by 20% and contributing to a 30% revenue increase."
      ]
    },
    {
      company: "Amazon",
      role: "Digital Associate - Cloud Support Team",
      period: "July 2020 - June 2021",
      location: "Chennai",
      description: "Managed IAM policies and security compliance for AWS resources.",
      stack: ["AWS IAM", "CloudWatch", "Terraform", "AWS CLI"],
      achievements: [
        "Assisted in creating and managing AWS IAM users, groups, and roles.",
        "Implemented least-privilege access policies to secure AWS resources.",
        "Monitored IAM activities using AWS CloudWatch for security compliance."
      ]
    }
  ];

  const projects: Project[] = [
    {
      name: "AWS Serverless Migration",
      description: "Architected a serverless migration strategy for Freshworks, designing VPC architecture and reducing monthly infrastructure costs by 40%.",
      tags: ["AWS Lambda", "Terraform", "VPC Peering"],
      status: "Migration"
    },
    {
      name: "K8s Cluster & Istio Mesh",
      description: "Built Kubernetes clusters from scratch with Istio service mesh for traffic management, security, and Route53 DNS management.",
      tags: ["Kubernetes", "Istio", "Helm", "Docker"],
      status: "Production"
    },
    {
      name: "SaaS Billing CI/CD",
      description: "Developed comprehensive CI/CD pipelines using GitHub Actions for Chargebee's billing platform, automating validations and deployments.",
      tags: ["GitHub Actions", "Jenkins", "SaaS"],
      status: "Automation"
    }
  ];

  const awards = [
    { title: "Best Rookie Award", org: "Chargebee", date: "Nov 2024", desc: "For outstanding performance within the first 6 months." },
    { title: "Squad Recognition", org: "Agilysys", date: "Oct 2023", desc: "20% increase in Build efficiency." },
    { title: "Quarterly Award", org: "Agilysys", date: "Apr 2023", desc: "30% boost in team targets." },
    { title: "Ownership & Innovation", org: "Agilysys", date: "Oct 2021", desc: "15% productivity rise via cloud automation." }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-300 font-sans selection:bg-cyan-900 selection:text-white">
      <div className="border-b border-slate-800 bg-[#0a0a0a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-cyan-500/10 p-2 rounded-lg border border-cyan-500/20">
              <TerminalIcon className="w-5 h-5 text-cyan-400" />
            </div>
            <span className="font-bold text-slate-100 tracking-tight">{profile.name}</span>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
             <a href="#about" className="hidden sm:block hover:text-cyan-400 transition-colors">About</a>
             <a href="#experience" className="hidden sm:block hover:text-cyan-400 transition-colors">Experience</a>
             <a href="#projects" className="hidden sm:block hover:text-cyan-400 transition-colors">Projects</a>
             <a href={`mailto:${profile.email}`} className="px-4 py-2 bg-slate-100 text-slate-900 rounded-md font-semibold hover:bg-white transition-colors">
               Contact Me
             </a>
          </div>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-20">
        <section id="about" className="flex flex-col md:flex-row gap-12 items-start pt-8">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/30 border border-cyan-900 text-cyan-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Open to Opportunities
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Senior Software Engineer <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                DevOps & Cloud
              </span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">{profile.summary}</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <ContactBadge icon={<Mail className="w-4 h-4"/>} text={profile.email} />
              <ContactBadge icon={<Github className="w-4 h-4"/>} text="GitHub" />
              <ContactBadge icon={<Linkedin className="w-4 h-4"/>} text="LinkedIn" />
              <ContactBadge icon={<MapPin className="w-4 h-4"/>} text={profile.location} />
            </div>
          </div>
          <div className="w-full md:w-80 bg-slate-900/50 rounded-2xl border border-slate-800 p-6 space-y-6">
            <h3 className="text-sm font-semibold text-slate-100 uppercase tracking-wider">Core Focus</h3>
            <SkillBar name="AWS & Infrastructure" level={95} color="bg-orange-500" />
            <SkillBar name="Kubernetes & Helm" level={90} color="bg-blue-500" />
            <SkillBar name="CI/CD Pipelines" level={88} color="bg-green-500" />
            <SkillBar name="Automation (Python/Bash)" level={85} color="bg-purple-500" />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Cpu className="w-6 h-6 text-cyan-400" /> Technical Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <SkillCard title="Cloud & IAM" skills={skills.cloud} icon={<Cloud className="w-5 h-5 text-orange-400"/>} />
            <SkillCard title="Containerization" skills={skills.containerization} icon={<Server className="w-5 h-5 text-blue-400"/>} />
            <SkillCard title="Infrastructure as Code" skills={skills.iac} icon={<Database className="w-5 h-5 text-purple-400"/>} />
            <SkillCard title="CI/CD & DevOps" skills={skills.cicd} icon={<GitBranch className="w-5 h-5 text-green-400"/>} />
            <SkillCard title="Scripting & AI Tools" skills={skills.tools.concat(skills.scripting.slice(0,3))} icon={<TerminalIcon className="w-5 h-5 text-slate-400"/>} />
            <SkillCard title="Observability" skills={skills.monitoring} icon={<Globe className="w-5 h-5 text-red-400"/>} />
          </div>
        </section>

        <section id="experience" className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <FileText className="w-6 h-6 text-cyan-400" /> Professional Experience
            </h2>
          </div>
          <div className="relative space-y-8 pl-2">
            <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-slate-800" />
            {experience.map((job, index) => (
              <div key={index} className="relative pl-10">
                <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full border-4 border-[#0a0a0a] bg-cyan-500 z-10" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{job.company}</h3>
                  <span className="text-sm font-medium text-slate-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">{job.period}</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mb-3">
                    <span className="text-cyan-400 font-medium">{job.role}</span>
                    <span className="hidden sm:block text-slate-600">•</span>
                    <span className="text-slate-500">{job.location}</span>
                </div>
                <p className="text-slate-400 mb-4">{job.description}</p>
                <ul className="space-y-2 mb-4">
                  {job.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <ChevronRight className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                    {job.stack.map((tech, i) => (
                        <span key={i} className="text-[10px] uppercase font-bold text-slate-500 border border-slate-800 px-2 py-0.5 rounded bg-slate-900/50">{tech}</span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-cyan-400" /> Education
                </h2>
                <div className="bg-slate-900/40 border border-slate-800 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-white">Bachelor of Civil Engineering</h3>
                    <p className="text-cyan-400 mb-2">Thanthai Periyar Government Institute of Technology, Vellore</p>
                    <p className="text-sm text-slate-500 mb-4">2015 - 2019</p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-900/20 text-green-400 text-xs rounded-full border border-green-900/50">
                        Rank Holder: 2nd (CGPA: 8.4/10)
                    </div>
                </div>
            </div>
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Award className="w-6 h-6 text-cyan-400" /> Achievements
                </h2>
                <div className="space-y-3">
                    {awards.map((award, i) => (
                        <div key={i} className="bg-slate-900/40 border border-slate-800 rounded-lg p-4 flex items-start gap-3 hover:border-slate-700 transition-colors">
                            <div className="mt-1 p-1 bg-yellow-500/10 rounded text-yellow-500"><Award className="w-4 h-4" /></div>
                            <div>
                                <h4 className="text-slate-200 font-medium">{award.title} <span className="text-slate-500 text-sm">@ {award.org}</span></h4>
                                <p className="text-xs text-slate-500">{award.date}</p>
                                <p className="text-sm text-slate-400 mt-1">{award.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <footer className="border-t border-slate-800 pt-8 pb-12 text-center text-slate-600">
          <p className="mb-2">Built with React, Tailwind, and Lucide Icons.</p>
          <p className="text-sm">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

function ContactBadge({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 rounded-md border border-slate-800 text-sm text-slate-300 hover:border-slate-700 transition-colors cursor-pointer">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function SkillBar({ name, level, color }: { name: string, level: number, color: string }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs font-medium">
        <span className="text-slate-300">{name}</span>
        <span className="text-slate-500">{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full`} style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

function SkillCard({ title, skills, icon }: { title: string, skills: string[], icon: React.ReactNode }) {
  return (
    <div className="bg-slate-900/30 border border-slate-800 rounded-lg p-5 hover:border-slate-700 transition-colors">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="font-semibold text-slate-200">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span key={i} className="text-xs font-medium text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">{skill}</span>
        ))}
      </div>
    </div>
  );
}