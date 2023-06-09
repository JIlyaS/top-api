import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import { FindTopPageDto } from './dto/find-top-page.dto';
// import { TopPageModel } from './top-page.model';

@Controller('top-page')
export class TopPageController {
    // constructor(private readonly configServise: ConfigService) {}
    @Post('create')
    async create(@Body() dto: any) {  // Omit<TopPageModel, '_id'>
    }
    
    @Get(':id')
    async get(@Param('id') id: string) {
    //  this.configServise.get('TEST')
    }

    @Delete(':id')
    async delete (@Param('id') id: string) {

    }

    @Patch(':id')
    async patch (@Param('id') id: string, @Body() dto: any) { // TopPageModel

    }
    
    @HttpCode(200)
    @Post()
    async find (@Body() dto: FindTopPageDto) {

    }
}
