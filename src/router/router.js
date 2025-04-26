import { createRouter, createWebHistory } from "vue-router";
import PageHome from "./../pages/PageHome.vue";
import PageCookiePolicy from "./../pages/PageCookiePolicy.vue";
import PageTerms from "./../pages/PageTerms.vue";
import PageSendFeedback from "./../pages/PageSendFeedback.vue";

const routes = [
  {
    path: "/",
    component: PageHome,
  },
  {
    path: "/privacy-policy",
    component: PageCookiePolicy,
  },
  {
    path: "/send-feedback",
    component: PageSendFeedback,
  },
  {
    path: "/terms",
    component: PageTerms,
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
