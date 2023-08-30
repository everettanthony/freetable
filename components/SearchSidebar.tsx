export default function SearchSideBar() {
    return (
        <div className="w-1/5 pr-5">
            <div className="border-b pb-4">
                <h2 className="mb-2">Region</h2>
                <ul className="group font-light text-reg">
                    <li>Toronto</li>
                    <li>Ottawa</li>
                    <li>Montreal</li>
                    <li>Hamilton</li>
                    <li>Kingston</li>
                    <li>Niagara</li>
                </ul>
            </div>
            <div className="border-b pb-4 mt-3">
                <h2 className="mb-2">Cuisine</h2>
                <ul className="group font-light text-reg">
                    <li>Mexican</li>
                    <li>Italian</li>
                    <li>Chinese</li>
                </ul>
            </div>
            <div className="mt-3 pb-4">
                <h2 className="mb-2">Price</h2>
                <div className="flex group text-reg font-light">
                    <button className="border rounded-l w-full p-2">$</button>
                    <button className="border-r border-t border-b w-full p-2">$$</button>
                    <button className="border-r border-t border-b rounded-r w-full p-2">$$$</button>
                    </div>
            </div>
        </div>
    )
}