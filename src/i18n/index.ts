import { createI18n } from "vue-i18n";
import { chinese } from "./lang/zh";
import { english } from "./lang/en";
const i18n = createI18n({
  locale: "zh-CN", // 语言标识, 通过切换locale的值来实现语言切换,this.$i18n.locale
  messages: {
    "zh-CN": chinese, // 中文语言包
    "en-US": english, // 英文语言包
  },
});

export default i18n;
