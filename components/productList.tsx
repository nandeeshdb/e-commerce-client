import { Product } from "@/types"
import NoResults from "./noResults"
import ProductCard from "./product-card"

interface ProductListProps{
    items:Product[]
    title:string
}

function ProductList({items,title}:ProductListProps) {
    
  return (
    <div className="space-y-4">
        <h3 className="font-bold text-3xl">{title}</h3>
        {items.length === 0 && <NoResults />}
        <div className="grid grid-cols-2 sm:grid-cols-4  md:grid-cols-3 gap-6 sm:gap-16">
            {items.map((item)=>(
                <div key={item.id}>
                    

                    <ProductCard key={item.id} data={item}/>
                </div>
            ))}

        </div>

    </div>
  )
}

export default ProductList