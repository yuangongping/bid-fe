import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import mock from '@/mock';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

var BID_TYPE = {
    "974": "公开招标",
    "975": "询价公告",
    "978": "竞争性谈判",
    "977": "单一来源",
    "979": "资格预审",
    "976": "邀请公告",
    "982": "中标公告",
    "981": "更正公告",
    "990": "其他公告",
    "984": "其他公告",
    "985": "其他公告",
    "2653": "竞争性磋商",
    "2655": "成交公告",
    "2656": "废标终止",
    "998": "公开招标",
    "997": "询价公告",
    "1000": "竞争性谈判",
    "999": "单一来源",
    "1001": "资格预审",
    "996": "邀请公告",
    "1004": "中标公告",
    "1003": "更正公告",
    "1012": "其他公告",
    "1006": "其他公告",
    "1007": "其他公告",
    "2654": "竞争性磋商",
    "2657": "成交公告",
    "2658": "废标终止"
}

var BID_TYPE_CN = {};
for (const key in BID_TYPE) {
    const val = BID_TYPE[key];
    if (BID_TYPE_CN[val] == undefined) {
        BID_TYPE_CN[val] = [];
    }
    BID_TYPE_CN[val].push(key);
}

Vue.prototype.$BID_TYPE = BID_TYPE
Vue.prototype.$BID_TYPE_CN = BID_TYPE_CN

Vue.prototype.$REGIONS = ["河北", "山西", "辽宁", "吉林", "黑龙江", "江苏", "浙江", "安徽", "福建", "江西", "山东", "河南",
    "湖北", "湖南", "广东", "海南", "四川", "贵州", "云南", "陕西", "甘肃", "青海", "台湾", "北京",
    "天津", "上海", "重庆", "香港", "澳门", "内蒙古", "广西", "西藏", "宁夏", "新疆"
]

Vue.prototype.$IT_LEVELS = [{
        level: '初级',
        tip: '信息管理系统、OA等非智能系统建设阶段',
    },
    {
        level: '中级',
        tip: '带有智能、智慧等关键字的大数据建设初期',
    },
    {
        level: '高级',
        tip: '明显的大数据、人工智能建设项目',
    }
]


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')