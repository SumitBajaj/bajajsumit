import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="Architecture"
                        icon="/icons/design.svg"
                        description="I design the products keeping resilence, robustness and scalability in mind."
                        projects={7} />
                    <AboutCard
                        title="Software Engineering"
                        icon="/icons/code.svg"
                        description="I adopt all those best practices which can automate the work and provide more time to business development."
                        projects={15} />
                    <AboutCard
                        title="Value proposition"
                        icon="/icons/chart-pie.svg"
                        description="I focus on impact of the craft which can add value for clients and drive success to them."
                        projects={5} />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">Introduce</h5>
                    <h1 className="white">Hello, I&#39;m Sumit Bajaj</h1>
                    <h3 className="white">Architecture is not just what application looks like. Architecture is how application can scale without distruption!</h3>
                    <p className="gray">I am a professional & seasoned architect with hands-on experience. During my 16 years of work, I had the opportunity to enhance my expertise by collaborating with different clients/stakeholders and digitizing their business and growth.<br/><br/>
                    I am an extrovert, confident, innovative and constantly challenging my skills.<br/><br/>
                    Primary skills are Sitecore, .Net, C#, Microservices, Cloud Migration, Microservices, docker, k8s.<br/><br/>
                    Secondry skills are Terraforms, python, reactJS. </p>
                </div>
            </div>

            <div className="flex partners justify-space">
                {/* <Image src="/images/partners/wallety.png" height={45} width={180} alt="wallety" />
                <Image src="/images/partners/artisty.png" height={45} width={180} alt="artisty" />
                <Image src="/images/partners/khedma-lik.png" height={45} width={180} alt="khedma-lik" />
                <Image src="/images/partners/directy.png" height={45} width={180} alt="directy" />
                <Image src="/images/partners/telefy.png" height={45} width={180} alt="telefy" /> */}
            </div>
        </section>
    )
}

type Props = {
    title: string,
    icon: string | StaticImageData,
    description: string,
    projects: number
}

function AboutCard ({title, icon, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <Image src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} projects</span>
        </div>
    )
}