import { Injectable } from '@nestjs/common';

@Injectable()
export class ReleaseService {
  getRelease(id: string) {
    // 仮実装: 実際はDBから取得
    return { id, title: 'Sample Release', date: '2025-01-01' };
  }

  getAllReleases() {
    // 仮実装: 実際はDBから取得
    return [
      { id: '1', title: 'Sample Release 1', date: '2025-01-01' },
      { id: '2', title: 'Sample Release 2', date: '2025-02-01' },
    ];
  }
}
