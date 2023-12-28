import { ShoppingCart } from "lucide-react";

export function Topbar() {
	return (
		<div className="flex justify-between items-center p-10 px-20 border-b border-solid border-gray-300 topbar-wrapper">
			<h1>Logo</h1>

			<div className="relative p-6 rounded-full h-15 w-15 bg-gray-300 bg-opacity-90 flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-300 shopping-cart-icon-wrapper ">
				<ShoppingCart
					className="w-5 h-5 shopping-cart-icon"
				/>
			</div>
			
		</div>
	)
}