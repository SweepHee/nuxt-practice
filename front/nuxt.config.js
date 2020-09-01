module.exports = {
    head: {
        title: "nuxt-aos",
        meta: [
            { charset: "utf-8" },
            // { name: "viewport", content: "width=device-width, initial-scale=1"},
            { hid: "description", name: "description", content: "Nuxt.js project" }
        ],
        script: [

        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "favicon.ico" },
            // {
            //     rel: "stylesheet",
            //     href: "https://cdn.jsdelivr.net/npm/@ajusa/lit@1.0.0/dist/lit.css"
            // }
        ]
    },
    loading: { color: "#3B8070" },
    build: {
      vendor: ["aos", "testing"]
    },
    modules: [
        "~/modules/common", '@nuxtjs/axios'
    ],
    plugins: [
        {src: "~/plugins/aos", ssr: false},
        { src: '~/plugins/vue-flash-message.js', mode: 'client' }
    ],
    css: ["aos/dist/aos.css"],
    axios: {
        browserBaseURL: 'http://localhost:3085',
        baseURL: 'http://localhost:3085',
        https: false,
    },
}