export interface BikeInfo {
  date_stolen: number;
  description: string | null;
  frame_colors: string[];
  frame_model: string;
  id: number;
  is_stock_img: boolean;
  large_img: string;
  location_found: null;
  manufacturer_name: string;
  external_id: null;
  registry_name: null;
  registry_url: null;
  serial: string;
  status: string;
  stolen: boolean;
  stolen_coordinates: number[];
  stolen_location: string;
  thumb: string;
  title: string;
  url: string;
  year: number;
}

export enum locationEnum {
  berlin = "berlin",
  munich = "munich",
  hamburgo = "hamburgo"
}

export type FormFields = {
  search: string;
  location: locationEnum;
  dateFrom: Date;
  dateTo: Date;
};
