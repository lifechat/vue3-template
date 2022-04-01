import { createApp} from 'vue'
import App from '@/App.vue'
import router from '@/routes' // 路由
import vuex from '@/store' // 状态管理
import ElementPlus from 'element-plus'
import 'element-plus/es/components/message/style/css'  //引入element样式

const app = createApp(App);

app.use(vuex).use(router).use(ElementPlus).mount('#app')
