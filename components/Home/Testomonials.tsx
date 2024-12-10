import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Testomonials() {

    const testimonials = [
        {
            name: "Gaurang Purwar",
            designation: "Head of Partnerships, Rapido",
            quote: "Rapido's partnership with BoomPanda has been nothing short of exceptional. Their deep insights into youth behavior and trends have helped us tailor our marketing efforts for maximum impact and reach.",
            src: "/images/ourclients/rapido.webp"
        },
        {
            name: "Sameer Khanna",
            designation: "Marketing Lead, Zomato",
            quote: "BoomPanda's expertise in youth marketing has been invaluable to us at Zomato. Their strategic approach and deep understanding of the millennial mindset have helped us craft campaigns that resonate with our audience.",
            src: "/images/ourclients/zomato.webp"
        },
        {
            name: "Udit Bhatia",
            designation: "Growth Manager, Paytm Insider",
            quote: "BoomPanda's platform has been instrumental in helping us at Paytm Insider connect with our target audience. Their innovative campaigns and data-driven insights have significantly contributed to our growth.",
            src: "/images/ourclients/insider.webp"
        },
        {
            name: "Poorvi Jain",
            designation: "Sr. Growth Manager, Eatclub",
            quote: "At Eatclub, we've found BoomPanda to be an invaluable partner in reaching our target demographic. Their creative approach and attention to detail have helped us elevate our brand's presence among young food enthusiasts.",
            src: "/images/ourclients/eatclub.webp"
        },
        {
            name: "Thomas Babu",
            designation: "Lead Marketing, Swiggy",
            quote: "BoomPanda's tailored solutions have been a game-changer for us at Swiggy. Their deep understanding of student behavior and preferences has helped us craft campaigns that drive engagement and loyalty.",
            src: "/images/ourclients/swiggy.webp"
        },
        {
            name: "Prajna Dash",
            designation: "Marketing Director, Hipi",
            quote: "“As a platform catering to the youth, we recognize the importance of effective marketing strategies. BoomPanda's innovative solutions have been instrumental in helping us connect with our audience in meaningful ways.",
            src: "/images/ourclients/hipi.webp"
        },
        {
            name: "Prem Desai",
            designation: "Marketing and Sales Head, Sunburn India",
            quote: "BoomPanda's platform offers a unique opportunity for brands to engage with the youth market. Their seamless execution and strategic approach have helped us at Sunburn India amplify our brand's message and drive ticket sales.",
            src: "/images/ourclients/sunburn.webp"
        },
        {
            name: "Mithil Khandare",
            designation: "Sr. VP TM Ventures, Ex-VP Nodwin Gaming",
            quote: "As someone deeply entrenched in the gaming and entertainment industry, I've seen firsthand the impact BoomPanda has had. Their ability to seamlessly integrate brands into the fabric of youth culture is unmatched.",
            src: "/images/ourclients/tmventure.svg"
        }
    ];
    return <AnimatedTestimonials testimonials={testimonials} />;
}
