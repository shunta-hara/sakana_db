import { Song } from "entities/song.entity";

export class GetReleaseResponseDto {
	releaseId: number;
	releaseTitle: string;
	releaseDate: string;
	releaseSongs: Song[];
}
