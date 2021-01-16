import { Listing, PagingData } from '../../../lib/types';

export enum ListingsFilter {
  PRICE_LOW_TO_HIGH = 'PRICE_LOW_TO_HIGH',
  PRICE_HIGH_TO_LOW = 'PRICE_HIGH_TO_LOW',
}

export interface ListingArgs {
  id: string;
}

export interface ListingsArgs {
  location: string | null;
  filter: ListingsFilter;
  limit: number;
  page: number;
}

export interface ListingsData extends PagingData<Listing> {
  region: string | null;
}

export interface ListingsQuery {
  country?: string;
  state?: string;
  city?: string;
}
