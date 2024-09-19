// src/user.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('users')
export class UserController {
  constructor(private readonly prisma: PrismaService) { }

  @Get()
  async getUsers() {
    return this.prisma.user.findMany();
  }

  @Post()
  async createUser(@Body() userData: { name: string; email: string; age: number }) {
    return this.prisma.user.create({
      data: userData,
    });
  }
}