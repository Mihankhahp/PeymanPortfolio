export const initialState = {
    name: "Peyman ",
    summary: "Self-educated, Solution-oriented, and problem solver with an independent personality. Highly enthusiastic about communication, and collaboration. hard-working in learning, launching, and iterating to build new knowledge with skills in the improvement and transformation of systems.",
    projects: [
        {
            title: 'Travel Advisor',
            description: "Travel advisor model based on tracking Google Maps location for advice and show accommodation, restaurants, attractions, and weather prediction on the map.",
            image: './images/Travel Ad.png',
            tags: ['React.js', 'Redux', 'Travel Advisor API', 'Google Map'],
            visit: 'https://github.com/Mihankhahp/Travel-Advisor-React-Redux',
            id: 0,
        },
        {
            title: 'Pinterest Model',
            description: "Pinterest Model using dynamic API, Search bar, and Infinite Scroll.",
            image: './images/Pinterest Model.png',
            tags: ['React.js', "Redux", 'JavaScript', "tailwindcss", "masonry"],
            source: 'https://front-end-competition-v02.vercel.app/',
            visit: 'https://github.com/Mihankhahp/FrontEndCompetitionV02',
            id: 1,
        },
        {
            title: 'Simple Chat Manager',
            description: "Using React and Redux to create a simple chat manager which has Search, Send message, Delete Message, close chat window and ... ",
            image: './images/ReactChatManager.png',
            tags: ['React.js', "Redux", 'JavaScript', "Css", "react-bootstrap", "fortawesome"],
            source: 'https://react-chat-manager.vercel.app/',
            visit: 'https://github.com/Mihankhahp/ReactChatManager',
            id: 2,
        },
        {
            title: 'data-table-ajax-pagination',
            description: "Using Nuxt.js, Vuetify and ajax to Do the Data table as a best peractice ",
            image: './images/data-table-ajax-pagination.png',
            tags: ['Vue.js', "Nuxt", 'JavaScript', "Vuetify", "ajax"],
            source: 'https://data-table-ajax-pagination.vercel.app/',
            visit: 'https://github.com/Mihankhahp/DataTable_Ajax_pagination',
            id: 3,
        }

    ],
    timeLine: [
        { year: 2020, title: "UI", text: 'Start learning HTML/CSS' },
        { year: 2020, title: "JS", text: 'Start learning JavaScript' },
        { year: 2020, title: "React", text: 'Start learning React' },
        { year: 2020, title: "Modeling", text: 'Start Modeling Web Apps' },
        { year: 2021, title: "Python", text: 'Start learning Python' },
        { year: 2022, title: "Data Analytics", text: 'Take Google Data Analytics Professional Certificate - Coursera' }
    ],
    technologies: [
        {

            title: 'Front End libraries',
            subtitle: ["React.js",
                "Vue.js"]
        },
        {

            title: 'Programming Languages',
            subtitle: ["JavaScript",
                "Python", "R", "SQL (Data Query)"]
        },
        {

            title: 'UI',
            subtitle: ["HTML/CSS", "Bootstrap",
                "Vuetify", "TailwindCss", "M-UI", "Styled-Components"]
        }
    ]
}