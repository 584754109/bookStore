"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: ""
    };
  },
  onLoad() {
  },
  methods: {
    goToAbout() {
      console.log(this.title);
      common_vendor.index.navigateTo({
        url: `/pages/list/list?title=${this.title}`
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.title,
    b: common_vendor.o(($event) => $data.title = $event.detail.value),
    c: common_vendor.o((...args) => $options.goToAbout && $options.goToAbout(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/mima123/Documents/HBuilderProjects/test/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
