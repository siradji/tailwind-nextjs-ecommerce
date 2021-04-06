import ProductDesc from "components/blocks/product-desc";
import ProductOverview from 'components/blocks/overview';
import SimilarProducts from 'components/blocks/similar-prods';
import ProductImage, {ProductImageCarousel} from 'components/blocks/product-img';

const ProductInfo = () => {

    return (
        <>
        <section className="flex md:flex-row flex-col sm:justify-between md:space-x-10">
            <div>
                <ProductImage />
                <ProductImageCarousel />
            </div>
            <div>
                <ProductDesc  />
                <ProductOverview  />
            </div>
            <div>
                <SimilarProducts />
            </div>
        </section>
        </>
    )
}

export default ProductInfo;