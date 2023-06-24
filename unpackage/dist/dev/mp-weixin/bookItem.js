"use strict";
const common_vendor = require("./common/vendor.js");
const _sfc_main = {
  props: {
    book: {
      type: Object,
      require: true,
      deafult: () => ({})
    }
  },
  data() {
    return {};
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.book.pic,
    b: common_vendor.t($props.book.title),
    c: common_vendor.t($props.book.author),
    d: common_vendor.t($props.book.price)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/mima123/Documents/HBuilderProjects/test/pages/bookItem/bookItem.vue"]]);
exports.MiniProgramPage = MiniProgramPage;
