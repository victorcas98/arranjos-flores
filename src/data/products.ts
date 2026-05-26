import sznl1 from "../assets/sznl-1.png"
import sznl2 from "../assets/sznl-2.png"
import sznl3 from "../assets/sznl-3.png"

export interface Product {
  id: string;
  image: string;
  text: string;
  price: string;
  description: string;
  message: string;
}

export const products: Product[] = [
  {
    id: "kit-completo",
    image: sznl3,
    text: "Arranjo + Vela + Mini",
    price: "R$ 230,00",
    description: "Kit completo com arranjo de flores, vela aromática e mini arranjo.",
    message: "Kit arranjo + vela + mini arranjo",
  },
  {
    id: "akemi",
    image: sznl2,
    text: "Arranjo + Vela Akemi",
    price: "R$ 160,00",
    description: "Arranjo de flores combinado com a exclusiva vela Akemi.",
    message: "Combo arranjo + vela Akemi",
  },
  {
    id: "basico",
    image: sznl1,
    text: "Arranjo Básico",
    price: "R$ 90,00",
    description: "Arranjo de flores frescas perfeito para qualquer ocasião.",
    message: "Arranjo básico",
  },
]