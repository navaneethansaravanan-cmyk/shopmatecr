
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch"


export const ProductList = (apiPath) => {
    const {data:products} = useFetch(apiPath);
    

  return (
    <main>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => 
          <Card product={product} key={product.id} />
        )}
      </section>
    </main>
  )
}
