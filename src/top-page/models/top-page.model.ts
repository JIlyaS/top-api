import { Prop, Schema } from '@nestjs/mongoose';

export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products
}

@Schema()
export class TopPage {
    @Prop({ enum: TopLevelCategory })
    firstCategory: TopLevelCategory;

    @Prop()
    secondCategory: string;

    @Prop({ unique: true })
    alias: string;

    @Prop()
    title: string;
    
    @Prop()
    category: string;
}