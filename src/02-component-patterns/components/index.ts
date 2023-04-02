import {ProductCard as ProductCardHOC} from "./ProductCard";
import {ProductButtons, ProductImage, ProductTitle} from "./";
import {ProductCardHOCProps} from "../interfaces/interfaces";

export * from './ProductButtons';
export * from './ProductImage';
export * from './ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
});

export default ProductCard;
