const path = require("path");

module.exports = {
	title: "AntDocs",
	theme: path.resolve(__dirname, "../../antdocs"),
	description: "a Ant Design style theme for VuePress.",
	base: "/",
	head: [
    ["link", { rel: "icon", href: "/assets/logo.png" }],
  ],
	markdown: {
		lineNumbers: false
	},
	themeConfig: {
		smoothScroll: true,
		logo: "/assets/logo.png",
		nav: require("./config/nav"),
		sidebar: require("./config/sidebar"),
		sidebarDepth: 3,
		lastUpdated: "Last Updated",
		repo: "https://github.com/zpfz/vuepress-theme-antdocs",
		editLinks: false
	}
};
