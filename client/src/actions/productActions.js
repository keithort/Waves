import axios from "axios";
import {
  GET_BRANDS,
  GET_PRODUCTS_BY_ARRIVAL,
  GET_PRODUCTS_BY_SALES,
  GET_PRODUCTS_TO_SHOP,
  GET_WOODS
} from "./types";
import { PRODUCT_ROUTES } from "../Components/utils/misc";

export function getProductsByArrival() {
  const request = axios
    .get(`${PRODUCT_ROUTES}/guitars?sortBy=createdAt&order=desc&limit=4`)
    .then(resp => resp.data);

  return {
    type: GET_PRODUCTS_BY_ARRIVAL,
    payload: request
  };
}

export function getProductsBySales() {
  const request = axios
    .get(`${PRODUCT_ROUTES}/guitars?sortBy=sold&order=desc&limit=4`)
    .then(resp => resp.data);

  return {
    type: GET_PRODUCTS_BY_SALES,
    payload: request
  };
}

// Categories
export function getBrands() {
  const request = axios.get(`${PRODUCT_ROUTES}/brands`).then(resp => resp.data);
  return {
    type: GET_BRANDS,
    payload: request
  };
}

export function getWoods() {
  const request = axios.get(`${PRODUCT_ROUTES}/woods`).then(resp => resp.data);
  return {
    type: GET_WOODS,
    payload: request
  };
}

export function getProductsToShop(
  skip,
  limit,
  filters = [],
  previousState = []
) {
  const data = {
    limit,
    skip,
    filters
  };

  const request = axios.post(`${PRODUCT_ROUTES}/shop`, data).then(resp => {
    let newState = [...previousState, ...resp.data.guitars];
    return {
      size: resp.data.size,
      guitars: newState
    };
  });

  return {
    type: GET_PRODUCTS_TO_SHOP,
    payload: request
  };
}
