import {createContext, CSSProperties, ReactElement} from "react";
import {useProduct} from "../hooks/useProduct";
import styles from "../styles/styles.module.css";
import {ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    // children?: ReactElement | ReactElement[];
    children: ( args: ProductCardHandlers ) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: onChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { counter, maxCount, isMaxCountReached, increaseBy, reset } = useProduct({
        product,
        onChange,
        value,
        initialValues
    });

    return (
        <Provider value={{
            counter,
            maxCount,
            product,
            increaseBy
        }}>
            <div
                className={ `${ styles.productCard } ${ className }` }
                style={style}
            >
                {
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount,
                        product,
                        increaseBy,
                        reset
                    })
                }
            </div>
        </Provider>
    )
}
