import { Body, Controller, Get, Param, Patch, Post, Delete, HttpCode } from '@nestjs/common';
// import { ProductModel } from './product.model';
import { FindProductDto } from './dto/find-product.dto';

@Controller('product')
export class ProductController {
    
    @Post('create')
    async create(@Body() dto: any) { // Omit<ProductModel, '_id'>
    
    }
    
    @Get(':id')
    async get(@Param('id') id: string) {

    }

    @Delete(':id')
    async delete (@Param('id') id: string) {

    }

    @Patch(':id')
    async patch (@Param('id') id: string, @Body() dto: any) { // ProductModel

    }
    
    @HttpCode(200)
    @Post()
    async find (@Body() dto: FindProductDto) {

    }
}
