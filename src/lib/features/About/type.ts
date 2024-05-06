export interface About {
    description_az: string;
    description_en: string;
    description_de: string;
}

export interface AboutState {
  error: boolean;
  data: About | null;
  loading: boolean;
}