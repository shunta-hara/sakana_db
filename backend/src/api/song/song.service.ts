import { Injectable } from '@nestjs/common';

@Injectable()
export class SongService {
  getSong(id: string) {
    // 仮実装: 実際はDBから取得
    return { id, title: 'Sample Song', artist: 'Sample Artist' };
  }

  getAllSongs() {
    // 仮実装: 実際はDBから取得
    return [
      { id: '1', title: 'Sample Song 1', artist: 'Artist 1' },
      { id: '2', title: 'Sample Song 2', artist: 'Artist 2' },
    ];
  }
}
