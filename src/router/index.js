import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Company from "../views/Company.vue";
import ContacUs from "../views/ContactUs.vue";
import Product from "../views/Product.vue";
import Brands from "../views/Brands.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/a-empresa",
    name: "Company",
    component: Company,
  },
  {
    path: "/fale-conos",
    name: "ContactUs",
    component: ContacUs,
  },
  {
    path: "/produtos",
    name: "Product",
    component: Product,
  },
  {
    path: "/marcas",
    name: "Brands",
    component: Brands,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
