import { Layout } from "@/components/layout/layout";
import { useSeo } from "@/lib/useSeo";
import { Link } from "wouter";
import { ArrowRight, GraduationCap, Briefcase } from "lucide-react";

const team = [
  {
    initials: "LTN",
    name: "Lionel Takem Nkwanyang",
    role: "Chief Executive Officer",
    credentials: [
      {
        icon: GraduationCap,
        text: "Senior Lecturer, Geology & Environmental Science — University of Bamenda, Cameroon",
      },
      {
        icon: Briefcase,
        text: "Former Chief of Bureau, Mines & Geology — South West Regional Delegation of Mines, Industry & Technological Development, Limbe, Cameroon",
      },
    ],
  },
  {
    initials: "CGM",
    name: "Chongwain Gilbert Mbzighaa",
    role: "Managing Partner",
    credentials: [
      {
        icon: GraduationCap,
        text: "Part-Time Lecturer, Geology — Pan African University, University of Ibadan, Nigeria",
      },
      {
        icon: Briefcase,
        text: "Engineer No. I, Directorate of Industry — Ministry of Mines, Industry & Technological Development, Yaoundé, Cameroon",
      },
    ],
  },
  {
    initials: "BCN",
    name: "Bernard Che Ngu",
    role: "Managing Partner",
    credentials: [
      {
        icon: GraduationCap,
        text: "Geologist, PhD Researcher — University of Bamenda, Cameroon",
      },
    ],
  },
  {
    initials: "ZA",
    name: "Zerubbabel Akongneh",
    role: "Geologist",
    credentials: [
      {
        icon: GraduationCap,
        text: "PhD Researcher in Geoscience",
      },
    ],
  },
];

export default function Team() {
  useSeo({
    title: "Our Team — Geoscience Professionals | GeoSavers",
    description:
      "Meet the GeoSavers leadership team — senior geologists, academic researchers, and former government officials with deep expertise in Cameroonian and African geoscience.",
    canonicalPath: "/team",
  });

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-secondary py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff18_1px,transparent_1px),linear-gradient(to_bottom,#ffffff18_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-[2px] bg-accent" />
            <span className="text-accent text-[11px] uppercase tracking-[0.2em] font-semibold">Our People</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight max-w-2xl">
            Our Team
          </h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
            Experienced geoscientists, academic researchers, and former government
            officials united by a commitment to rigorous, field-based technical
            consulting across Cameroon and Africa.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="border border-border bg-white flex flex-col"
              >
                {/* Avatar + name block */}
                <div className="flex items-start gap-5 p-7 border-b border-border">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary flex items-center justify-center">
                    <span className="text-white font-bold text-lg tracking-widest">
                      {member.initials}
                    </span>
                  </div>
                  <div className="pt-1">
                    <h2 className="text-[17px] font-bold text-foreground leading-snug">
                      {member.name}
                    </h2>
                    <span className="inline-block mt-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Credentials */}
                <div className="p-7 space-y-4 flex-1">
                  {member.credentials.map((c, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <c.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {c.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
            Work with Our Team
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Our principals bring government, academic, and field experience together.
            Get in touch to discuss your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-secondary font-semibold text-sm px-7 py-3.5 transition-opacity hover:opacity-90"
          >
            Request a Consultation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
