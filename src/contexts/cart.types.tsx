export type CategoryItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
};

export type CartItemType = CategoryItem & {
  quantity: number;
};
