import { ShoppingCart } from "lucide-react";

export function Topbar() {
	return (
		<div className="flex justify-between topbar-wrapper">
			<h1>Logo</h1>

			<div className="shopping-cart-icon-wrapper">
				<ShoppingCart
					className="shopping-cart-icon"
				/>
			</div>
			
		</div>
	)
}