import { createRouter, createWebHistory } from "vue-router";
import PageHome from "./../pages/PageHome.vue";
import PageCookiePolicy from "./../pages/PageCookiePolicy.vue";
import PageRoadmap from "./../pages/PageRoadmap.vue";
import PageSendFeedback from "./../pages/PageSendFeedback.vue";

const routes = [
  {
    path: "/",
    component: PageHome,
  },
  {
    path: "/cookie-policy",
    component: PageCookiePolicy,
  },
  {
    path: "/send-feedback",
    component: PageSendFeedback,
  },
  {
    path: "/roadmap",
    component: PageRoadmap,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});

export default router;
