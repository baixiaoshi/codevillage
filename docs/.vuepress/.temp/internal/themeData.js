export const themeData = JSON.parse("{\"logo\":\"/imgs/code.png\",\"home\":\"/opsys\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"开始\",\"link\":\"/get-started\"},{\"text\":\"操作系统\",\"link\":\"/opsys\"}],\"sidebar\":[{\"text\":\"开始\",\"link\":\"/get-started\"},{\"text\":\"操作系统\",\"link\":\"/opsys\",\"children\":[{\"text\":\"vfs\",\"link\":\"/vfs\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
