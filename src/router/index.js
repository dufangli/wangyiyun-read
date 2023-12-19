import Vue from 'vue'
import VueRouter from 'vue-router'
import BookMallView from '../views/BookMallView.vue'
import ClassificationView from '../views/ClassificationView.vue'
import BookshelfView from '../views/BookshelfView.vue'
import MineView from '../views/MineView.vue'
import SelectView from '../views/SelectView.vue'
import FreeView from '../views/FreeView.vue'
import BoyView from '../views/BoyView.vue'
import GirlView from '../views/GirlView.vue'
import ListenToBooksView from '../views/ListenToBooksView.vue'
import PublishView from '../views/PublishView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/bookshelf',
    name: 'bookshelf',
    component: BookshelfView
  },
  {
    path: '/',
    name: 'bookMall',
    component: BookMallView,
    children: [
      {
        path: '/select',
        name: 'select',
        component: SelectView
      },
      {
        path: '/free',
        name: 'free',
        component: FreeView
      },
      {
        path: '/boy',
        name: 'boy',
        component: BoyView
      },
      {
        path: '/girl',
        name: 'girl',
        component: GirlView
      },
      {
        path: '/publish',
        name: 'publish',
        component:PublishView
      },
      {
        path: '/listen',
        name: 'listen',
        component: ListenToBooksView
      },
    ]
  },
  {
    path: '/class',
    name: 'class',
    component: ClassificationView
  },
  {
    path: '/mine',
    name: 'mine',
    component: MineView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
