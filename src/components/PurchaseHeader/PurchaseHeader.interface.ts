export interface PurchaseHeaderProps {
  product: ProductProps
}

interface ProductProps {
  providerName?: string;
  planName?: string;
  price?: number;
}
