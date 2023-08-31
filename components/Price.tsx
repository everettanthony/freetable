import { PRICE } from '@prisma/client';

export default function Price({ price }: { price: PRICE }) {
    function renderPrice() {
        if (price === PRICE.CHEAP) {
            return (
                <>
                    <span>$$</span><span className="text-gray-300">$$</span>
                </>
            );
        } else if (price === PRICE.REGULAR) {
            return (
                <>
                    <span>$$$</span><span className="text-gray-300">$</span>
                </>
            );           
        } else if (price === PRICE.EXPENSIVE) {
            return (
                <>
                    <span>$$$$</span>
                </>
            );           
        }
    }

    return (
        <div className="flex font-medium mr-3">{renderPrice()}</div>
    )
}
