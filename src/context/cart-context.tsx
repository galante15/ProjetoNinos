import { ReactNode, createContext, useState } from 'react';

interface Item {
	id: string;
	name: string;
	price: number;
	quantity: number;
}

interface CartContextType {
	items: Item[];
	total: number;
	addToCart: (item: Item) => void;
	removeCartItem: (id: string) => void;
}

export const CartContext = createContext<CartContextType>({
	items: [],
	total: 0,
	addToCart: () => {},
	removeCartItem: () => {},
});

interface CartContextProviderProps {
	children: ReactNode;
}

export function CartContextProvider(props: CartContextProviderProps) {
	const [items, setItems] = useState<Item[]>([]);

	return (
		<CartContext.Provider>
			{props.children}
		</CartContext.Provider>
	)
};
