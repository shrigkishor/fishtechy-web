import "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    accessTokenOverride?: string | null;
    skipRefreshOn401?: boolean;
    _retry?: boolean;
  }
}

export {};
