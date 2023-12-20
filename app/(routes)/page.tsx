import getBillboard from "@/actions/get-billboard"
import getProducts from "@/actions/get-products"
import Billboard from "@/components/billboard"
import ProductList from "@/components/productList"
import Container from "@/components/ui/container"

const HomePage=async() => {
  const products = await getProducts({isFeatured:true})
  
  const billboard = await getBillboard("1fc09c4a-7433-4466-836e-467157c5b63c")
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard}/>
      </div>
      <div className="flex flex-col gap-y-8 sm:px-6 lg:px-8">
        <ProductList title="Featured products" items={products}/>

      </div>

    </Container>
  )
}

export default HomePage