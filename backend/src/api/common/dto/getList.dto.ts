import { IsInt, Min } from 'class-validator';

/**
 * DTO for pagination parameters in list retrieval requests.
 */
export class GetListDto {
  @IsInt()
  @Min(1)
  limit: number;

  @IsInt()
  @Min(0)
  offset: number;
}
