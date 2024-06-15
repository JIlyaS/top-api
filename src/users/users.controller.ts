import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
// import { ConfigService } from '@nestjs/config';
// import { TopPageModel } from './top-page.model';

@Controller('users')
export class UsersController {
	constructor(private readonly userService: UsersService) {}
	@Post('create')
	async create(@Body() dto: any) {
		// Omit<TopPageModel, '_id'>
	}

	@Get()
	async get() {
		return this.userService.getAll();
	}

	@Get(':id')
	async getOne(@Param('id') id: string) {
		//  this.configServise.get('TEST')
	}

	@Delete(':id')
	async delete(@Param('id') id: string) {}

	@Patch(':id')
	async patch(@Param('id') id: string, @Body() dto: any) {
		// TopPageModel
	}
}
