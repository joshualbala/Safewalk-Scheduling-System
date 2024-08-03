import { sql } from '@vercel/postgres';
const { PrismaClient } = require('@prisma/client')
const { user } = require('./data.ts')
const prisma = new PrismaClient();

const load = async () => {
    try {
      await prisma.user.deleteMany();
      console.log('Deleted records in category table')

     await prisma.$queryRaw`ALTER TABLE User ALTER COLUMN BIGSERIAL 1`
     console.log('reset product auto increment to 1')

      await prisma.user.createMany({
        data: user,
      });

      console.log('Added category data')

      console.log('Added product data')
    } catch (e) {
      console.error(e)
      process.exit(1)
    } finally {
      await prisma.$disconnect()
    }
  }
  
  load()