import { Controller, Get, Param } from '@nestjs/common';
import { ReleaseService } from './release.service';

@Controller('releases')
export class ReleaseController {
  constructor(private readonly releaseService: ReleaseService) {}

  @Get(':id')
  getRelease(@Param('id') id: string) {
    return this.releaseService.getRelease(id);
  }

  @Get()
  getAllReleases() {
    return this.releaseService.getAllReleases();
  }
}
