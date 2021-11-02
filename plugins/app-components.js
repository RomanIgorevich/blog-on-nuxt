import Vue from "vue"

//UI
import Intro from  "@/components/UI/Intro.vue";
import PostList from "@/components/Blog/PostList.vue";
import Message from "@/components/UI/Message.vue";

//Controls
import AppButton from "@/components/UI/Controls/Button.vue";
import AppInput from "@/components/UI/Controls/Input.vue";
import AppTextAria from "@/components/UI/Controls/TextAria.vue";

//UI
Vue.component("Intro",Intro)
Vue.component("PostList",PostList)
Vue.component("Message",Message)

//Controls
Vue.component("AppButton",AppButton)
Vue.component("AppInput",AppInput)
Vue.component("AppTextAria",AppTextAria)