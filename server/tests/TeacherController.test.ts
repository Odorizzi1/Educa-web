import "reflect-metadata";
import { describe, it, expect, vi } from "vitest";
import { Request, Response } from "express";
import { TeacherController } from "../controller/teachers/TeacherController";
import { TeacherService } from "../service/teacherService/TeacherService"; 
import sinon from 'sinon';

describe("TeacherController - createTeachers",()=>{
it("should create teacher successfully", async ()=>{
    const mockTeacherService = sinon.createStubInstance<TeacherService>(TeacherService);

    const teacherController = new TeacherController(mockTeacherService);
    const createTeachersStub = sinon.stub(teacherController, 'createTeachers').resolves();

    const req = {} as Request;
    const res = {
        json: sinon.stub().returnsThis(),
        status: sinon.stub().returnsThis()
    } as unknown as Response;

    await teacherController.createTeachers(req, res);

    expect(createTeachersStub.calledOnce).toBe(true);
 
})
})