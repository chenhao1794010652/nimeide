import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/dianying',
            name: 'dianying',
            component: () =>
                import ('./views/dianying.vue'),
            children: [{
                    path: 'chengshi1',
                    component: () =>
                        import ('./components/chengshi1.vue'),
                },
                {
                    path: 'reying',
                    component: () =>
                        import ('./components/reying.vue'),
                },
                {
                    path: 'jjsy',
                    component: () =>
                        import ('./components/jjsy.vue'),
                },
                {
                    path: 'sousuo',
                    component: () =>
                        import ('./components/sousuo.vue'),
                },
                {
                    path: '/',
                    redirect: '/dianying/chengshi1'
                }

            ]

        },
        {
            path: '/yingyuan',
            name: 'yingyuan',
            component: () =>
                import ('./views/yingyuan.vue')
        },
        {
            path: '/wode',
            name: 'wode',
            component: () =>
                import ('./views/wode.vue')
        }, {
            path: '/',
            redirect: '/dianying'
        }
    ]
})