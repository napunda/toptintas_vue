import Vue from "vue";
import VueRouter from "vue-router";
import AllProducts from "../views/AllProducts.vue";
import Brands from "../views/Brands.vue";
import Company from "../views/Company.vue";
import ContacUs from "../views/ContactUs.vue";
import Home from "../views/Home.vue";
import Product from "../views/Product.vue";
import ProductsGlaze from "../views/ProductsGlaze.vue";
import ProductsPaints from "../views/ProductsPaints.vue";
import ProductsVarnish from "../views/ProductsVarnish.vue";
import ProductsComplements from "../views/ProductsComplements.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/produtos/todos-produtos",
    name: "AllProducts",
    component: AllProducts,
  },
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
  {
    path: "/produtos/esmaltes",
    name: "ProductsGlaze",
    component: ProductsGlaze,
  },
  {
    path: "/produtos/tintas",
    name: "ProductsPaints",
    component: ProductsPaints,
  },
  {
    path: "/produtos/vernizes",
    name: "ProductsVarnish",
    component: ProductsVarnish,
  },
  {
    path: "/produtos/complementos",
    name: "ProductsComplements",
    component: ProductsComplements,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
