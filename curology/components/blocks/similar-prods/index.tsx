import {Button, ButtonVariant} from 'components/atoms/button'
import PriceHighlight from 'components/atoms/price-highlight';

const SimilarProducts = () => {
    return (
        <div className="flex flex-row">
            <SimilarProducts />
            <SimilarProducts />
            <SimilarProducts />
        </div>
    )
};


const SimilarProduct = () => {
    return (
        <div className="p-3 rounded-lg shadow flex flex-col">
            <div className="h-4">
                <img className="h-full" src="/flower_one.jpef" alt="recomended product"/>
            </div>
            <div className="flex flex-col">
                <PriceHighlight>
                    -30%
                </PriceHighlight>
                <Button
                    variant={ButtonVariant.PURPLE}
                >
                    Buy now
                </Button>
            </div>
        </div>
    )
}


export default SimilarProducts;