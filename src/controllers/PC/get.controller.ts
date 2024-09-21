import { Request, Response } from "express";
import { Pc } from "../../models/pc.model";
import { StatusCodes } from "http-status-codes";

const GetPc = async (req: Request, res: Response): Promise<void> => {
  try {
    const foundedPc = await Pc.find();
    console.log(foundedPc);

    res.status(StatusCodes.OK).send({
      status: StatusCodes.OK,
      data: foundedPc,
      message: "PC records retrieved successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      message:
        "An error occurred while retrieving PC records. Please try again!",
    });
  }
};

export { GetPc };
