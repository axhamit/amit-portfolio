const portfolio = [
    {
        id: 0,
        projectName: "LearnVista",
        url: "https://www.learnbay.co/",
        image: "projects/learnbay.png",
        projectDetail: " Learnvista EdTech is a dynamic educational technology company that has evolved from a promising start-up to a seasoned industry player with years of experience in delivering cutting-edge digital solutions. Dedicated to serving a wide range of educational institutions and organizations, we leverage our expertise in innovative EdTech services to drive growth and maximize the impact on students and educators alike.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "next.js"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "Mongo DB"
            },
            {
                tech: "Ecpress JS"
            },
            {
                tech: "NODE JS"
            },
        ]
    },
    {
        id: 0,
        projectName: "ALSN",
        url: "https://elmsafeer.co/",
        image: "projects/alsn.png",
        projectDetail: "ASLN drives digital transformation with certified document translation services. In an interconnected world where seamless communication is imperative, they are strategically positioned to cater to the needs of businesses, individuals, and organizations.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: ".net"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "FirmSanad",
        url: "https://firmsanad.invogen.co/",
        image: "projects/firmsanad.png",
        projectDetail: "Invest in Saudi Arabia, Streamline Your Business Setup Process in Saudi Arabia with FirmSanad Simplify the process of obtaining licenses and starting a business in Saudi Arabia with our streamlined platform.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: ".net"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Fateh Al Mustaqbil",
        url: "https://fatehtour.com/",
        image: "projects/fateh.png",
        projectDetail: "Fateh Al Mustaqbil is a one-of-a-kind travel agency designed to cater to the interests of travelers across the globe, founded in 2023 in Riyadh, Saudi Arabia. Their expertise lies in crafting exceptional journeys tailored to each client's unique requirements, whether it be ticketing, hotel bookings, or visa assistance.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: ".net"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Tojjar",
        url: "https://tojjar.jmmtest.com/",
        image: "projects/tojjar.png",
        projectDetail: "Tojjar is ecommerce website,  where you can open your own store and sell products of different brands!",
        technologiesUsed: [
            {
                tech: "Nextjs with SSR"
            },
            {
                tech: "Laravel"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 1,
        projectName: "Otawix",
        url: "https://b2c.otawix.com/",
        image: "projects/otawix.png",
        projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            {
                tech: "NodeJS"
            },
            {
                tech: "MUI"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 2,
        projectName: "Spatay",
        url: "https://spatay.com/",
        image: "projects/spatay.png",
        projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "NodeJS"
            },
            {
                tech: "Ant Design"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    // {
    //     id: 2,
    //     projectName: "Culyte",
    //     url: "https://culyte.com",
    //     image: "projects/culyte.png",
    //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    //     technologiesUsed: [
    //         {
    //             tech: "ReactJS"
    //         },
    //         {
    //             tech: "NodeJS"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
