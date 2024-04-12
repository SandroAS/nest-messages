import { IsString } from "class-validator";

// npm install class-validator
// npm install class-transformer

export class CreateMessageDto {
    @IsString()
    content: string;
}