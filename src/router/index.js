import Vue from "vue";
import VueRouter from "vue-router";
import Brands from "../views/Brands.vue";
import Company from "../views/Company.vue";
import ContacUs from "../views/ContactUs.vue";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/marcas",
    name: "Brands",
    component: Brands,
  },
  {
    path: "/a-empresa",
    name: "Company",
    component: Company,
  },
  {
    path: "/fale-conosco",
    name: "ContactUs",
    component: ContacUs,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/produtos",
    name: "Product",
    component: Product,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
