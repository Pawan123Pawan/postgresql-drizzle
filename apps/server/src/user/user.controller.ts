import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { db } from '../db';
import {  userTable } from '../db/schema';
import { eq } from 'drizzle-orm';

@Controller('users')
export class UserController {

  @Get()
  async getAllUsers() {
    const result = await db.select().from(userTable);
    return result;
  }


  @Post()
  async createUser( 
    @Body() data: { name: string; email: string },
  ) {

    const user : typeof userTable.$inferInsert = {
        name: data.name,
        email: data.email,
    }

    const result = await db.insert(userTable).values(user).returning();
    return result;
  }   


  @Patch()
  async updateUser(
    @Body() data: { name?: string; email?: string },
    @Param('id') id: number,
  ) {
    const result = await db
      .update(userTable)
      .set({
        name: data.name,
        email: data.email,
      })
      .where(eq(userTable.id, id))
      .returning();
    return result;
  } 
 
 
}
