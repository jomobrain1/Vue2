import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Not from "../views/Not.vue";
import DeleteRequest from "../components/DeleteRequest.vue"
import PostRequest from "../components/PostRequest.vue"
import Login from "../components/Login.vue"
import Parent from "../Parent.vue"
import User from "../components/User.vue"
import FormSubmit from "../components/FormSubmit.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/delete",
    name: "DeleteRequest",
    component: DeleteRequest,
  },
  {
    path: "/post",
    name: "PostRequest",
    component: PostRequest,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/parent",
    name: "Parent",
    component: Parent,
  },
  {
    path: "/form",
    name: "FormSubmit",
    component: FormSubmit,
  },
  {
    path: "/user/:id",
    name: "User",
    component: User,
  },
  {
    path: '/:catchAll(.*)',
    name: "Not",
    component: Not,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;