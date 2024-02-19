const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'JSS ARTS AND COMMERCE COLLEGE',
                degree: 'BBA Bachelor of Business Administration',
                detail: "Bachelor's Degree in Digital Marketing",
                year: '2018-2021'
            },
            {
                id: 1,
                title: 'NIDM ',
                degree: 'National Institute Of Digital Marketing',
                detail: "Advance Digital Marketing Course",
                year: '2021-2022'
            },
            {
                id: 2,
                title: 'MBA JAIN Univarsity',
                degree: 'Master of Business Administration                ',
                detail: "MAster in Figital Marketing with Web Devlopment, [full-stack]",
                year: '2012- present'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'LearnVista Pvt Ltd',
                role: 'Web Devloper',
                url: 'https://www.learnbay.co/',
                desc: 'As a Web developer, I use React, Next & JavaScript  to build user interfaces for web applications.',
                year: '06/2022 - Present',
                location: 'Karnataka, Bangalore'
            },
            // {
            //     id: 2,
            //     title: 'HauzaTech',
            //     role: 'Internee',
            //     url: 'no website',
            //     desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
            //     year: '02/2023 - Present',
            //     location: 'Peshawar, Pakistan'
            // },
            // {
            //     id: 3,
            //     title: 'Encoder Bytes',
            //     role: 'PHP Developer',
            //     url: 'https://www.encoderbytes.com/',
            //     desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
            //     year: '09/2020 - 02/2021',
            //     location: 'Peshawar, Pakistan'
            // },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
