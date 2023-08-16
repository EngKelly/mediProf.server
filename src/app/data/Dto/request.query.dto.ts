export interface PaginationQueryDto {
  page: number;

  limit: number;

  year?: number;

  month?: number;

  IsFetchByMonth?: string;

  keyword: string;
}
