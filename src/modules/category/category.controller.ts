import { Controller, Get } from '@nestjs/common'
import { CategoryService } from './category.service';

@Controller('Category')
export class CategoryController {
    constructor(private readonly service: CategoryService) {}
    @Get()
    findAll() {
        return this.service.findall();
    }
}