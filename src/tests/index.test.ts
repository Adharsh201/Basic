import {describe, it, expect, vi} from 'vitest';
import request from 'supertest';
import {app} from'../index.js';
import { prismaClient } from '../__mocks__/db.js';

console.log(prismaClient.sum.create)

vi.mock('../db');



describe("POST /sum", () => {
    it("should return the sum of two numbers", async () =>{
        const res = await request(app).post("/sum").send({
            a: 0,
            b: 0
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(0);
    })

    it("should return 'Incorrect inputs' when invalid data is sent", async () => {
         const res = await request(app).post("/sum").send({ 
           a: ["adharsh"] });

  expect(res.statusCode).toBe(411);
  expect(res.body.message).toBe("Incorrect inputs"); 
    });

});




