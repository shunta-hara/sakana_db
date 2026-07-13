import { HttpStatus } from '@nestjs/common';

/**
 * BaseController provides small helpers for common controller patterns.
 * - handleList: runs a list handler and wraps the response with paging meta
 */
export abstract class BaseController {
  protected async handleList<T>(
    itemsPromise: Promise<T[]>,
    limit: number,
    offset: number,
  ) {
    const items = await itemsPromise;
    return {
      statusCode: HttpStatus.OK,
      data: items,
      meta: {
        limit,
        offset,
        count: items.length,
      },
    };
  }
}
