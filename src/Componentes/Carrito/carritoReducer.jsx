import { TYPES } from "./actions";

export const carritoInitialState = {
  productos: [],
  carrito: [],
  show: [],
};

export const carritoReducer = (state, action) => {
  switch (action.type) {
    case TYPES.READ_STATE:
      return {
        ...state,
        productos: action.payload,
      };

    case TYPES.SHOW_PRODUCT:
      const vistaPrevia = state.productos.find(
        (producto) => producto.id === action.payload
      );
      return {
        ...state,
        show: { ...vistaPrevia },
      };

    case TYPES.ADD_TO_CART:
      const productoAgregado = state.productos.find(
        (producto) => producto.id === action.payload
      );
      const itemEnCarrito = state.carrito.find(
        (item) => item.id === productoAgregado.id
      );
      return itemEnCarrito
        ? {
            ...state,
            carrito: state.carrito.map((item) =>
              item.id === productoAgregado.id
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
            ),
          }
        : {
            ...state,
            carrito: [...state.carrito, { ...productoAgregado, cantidad: 1 }],
          };

    case TYPES.REMOVE_ITEM:
      const unidadAEliminar = state.carrito.find(
        (item) => item.id === action.payload
      );
      return unidadAEliminar.cantidad > 1
        ? {
            ...state,
            carrito: state.carrito.map((item) =>
              item.id === unidadAEliminar.id
                ? { ...item, cantidad: item.cantidad - 1 }
                : item
            ),
          }
        : {
            ...state,
            carrito: state.carrito.filter(
              (item) => item.id !== unidadAEliminar.id
            ),
          };

    case TYPES.REMOVE_ALL_ITEM:
      const itemAEliminar = state.carrito.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        carrito: state.carrito.filter((item) => item.id !== itemAEliminar.id),
      };

    case TYPES.CLEAR_CART:
      return {
        ...state,
        carrito: [],
      };

    default:
      return state;
  }
};
