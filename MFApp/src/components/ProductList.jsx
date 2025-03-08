import React, {lazy, Suspense} from "react";
const TodoApp = lazy(() => import("TodoAppHost/TodoApp"));

const ProductList = (props) => {
    return (
        <div className="todo-list-container">
            <Suspense fallback={null}>
            <TodoApp title="Product List from Parent" cart={props.cart} />
            </Suspense>
        </div>
    )
}

export default ProductList;
