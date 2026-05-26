import React from "react"
import { Background } from "../components/Background"
import { ItemBox } from "../components/ItemBox"
import { BuyButton } from "../components/BuyButton"
import { products, type Product } from "../data/products"
import sazonalLogo from "../assets/sazonal-light.png"

function Home() {
  const [selected, setSelected] = React.useState<Product>(products[1])

  return (
    <Background image={selected.image}>
      <div className="p-4 flex flex-col justify-between min-h-screen">
        <div className="flex flex-row md:flex-col">
          <div className="flex w-1/2 md:w-full flex-col gap-4 md:flex-row">
            {products.map((product) => (
              <ItemBox
                key={product.id}
                image={product.image}
                text={product.text}
                onClick={() => setSelected(product)}
              />
            ))}
            <img src={sazonalLogo} alt="Logo" className="h-[150px] hidden md:block" />
          </div>
          <div className="flex text-gray-900 flex-col gap-4 w-1/2 items-end md:self-end md:pt-4">
            <img src={sazonalLogo} alt="Logo" className="h-[30px] md:hidden" />
            <h1 className="text-4xl font-bold text-end uppercase md:py-4">
              {selected.text}
            </h1>
            <p className="text-end mb-2 font-bold md:text-lg">
              {selected.description}
            </p>
            <p className="text-2xl font-bold text-end">
              {selected.price}
            </p>
          </div>
        </div>
        <div className="flex justify-end md:p-4">
          <BuyButton
            phone="5531993966037"
            message={`Olá! Vim pelo site SAZONAL!\nEstou interessado no ${selected.message}`}
          />
        </div>
      </div>
    </Background>
  )
}

export default Home