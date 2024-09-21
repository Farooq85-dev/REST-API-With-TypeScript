import { Request, Response } from "express";
import { Pc } from "../../models/pc.model";
import { StatusCodes } from "http-status-codes";

const AddPc = async (req: Request, res: Response): Promise<void> => {
  try {
    const createdPc = await Pc.create(req.body);
    console.log(createdPc);

    res.status(StatusCodes.CREATED).send({
      status: StatusCodes.CREATED,
      data: createdPc,
      message: "Your PC has been added successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      // Also using return here
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "Please try again!",
    });
  }
};

export { AddPc };
