import { ShoppingCart } from "lucide-react";

export function Topbar() {
	return (
		<div className="w-full flex justify-between items-center p-2 px-4 border-b border-gray-300">
			<h1>Logo</h1>

			<div className="relative p-2 rounded-full border bg-opacity-90 flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-300">
				<ShoppingCart
					className="w-4 h-4"
				/>
			</div>
			
		</div>
	)
}