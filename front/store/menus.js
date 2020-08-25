export const state = () => ({
    menu: [
        {
            idx: 1,
            name: "COMPANY",
            href: "/",
        },
        {
            idx: 2,
            name: "BUSINESS",
            href: "/board",
        },
        {
            idx: 3,
            name: "MEDIA",
            href: "/MEDIA",
        },
        {
            idx: 4,
            name: "CAREER",
            href: "/CAREER",
        }
    ],
    dropdown: [
        [
             {
                idx: 1,
                group: 1,
                name: "About",
                href: "/COMPANY/About",
            },
            {
                idx: 2,
                group: 1,
                name: "CI/BI",
                href: "/COMPANY/CI",
            },
            {
                idx: 3,
                group: 1,
                name: "Partners&Investors",
                href: "/COMPANY/PartnersNInvestors",
            }
        ],
        [
            {
                idx: 1,
                group: 2,
                name: "C2C Marketplace",
                href: "/BUSINESS/C2CMarketplace",
            },
            {
                idx: 2,
                group: 2,
                name: "Game",
                href: "/BUSINESS/Game",
            }
        ],
        [
            {
                idx: 1,
                group: 3,
                name: "Media",
                href: "/Media",
            },
            {
                idx: 2,
                group: 3,
                name: "News",
                href: "/News",
            },
        ],
        [
            {
                idx: 1,
                group: 4,
                name: "Our culture",
                href: "/CARRER/OurCulture",
            },
            {
                idx: 2,
                group: 4,
                name: "Team",
                href: "/CARRER/Team",
            },
            {
                idx: 3,
                group: 4,
                name: "Recruit",
                href: "/CARRER/Recruit",
            }
        ],
    ]
})

export const mutations = {
    
}


export const actions = {

}