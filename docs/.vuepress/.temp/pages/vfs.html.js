import comp from "/Users/lion/code/js/codevillage/docs/.vuepress/.temp/pages/vfs.html.vue"
const data = JSON.parse("{\"path\":\"/vfs.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"字符设备（Character Devices）\",\"slug\":\"字符设备-character-devices\",\"link\":\"#字符设备-character-devices\",\"children\":[]},{\"level\":3,\"title\":\"块设备（Block Devices）\",\"slug\":\"块设备-block-devices\",\"link\":\"#块设备-block-devices\",\"children\":[]},{\"level\":3,\"title\":\"/proc 虚拟文件系统：\",\"slug\":\"proc-虚拟文件系统\",\"link\":\"#proc-虚拟文件系统\",\"children\":[]},{\"level\":3,\"title\":\"/sys 虚拟文件系统：\",\"slug\":\"sys-虚拟文件系统\",\"link\":\"#sys-虚拟文件系统\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"vfs.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
