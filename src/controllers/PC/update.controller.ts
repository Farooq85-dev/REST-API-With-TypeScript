import { Request, Response } from "express";
import { Pc } from "../../models/pc.model";
import { StatusCodes } from "http-status-codes";

const UpdatePc = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const updatedPc = await Pc.findByIdAndUpdate(
      id,
      {
        name: "Z_440",
      },
      { new: true }
    );

    if (!updatedPc) {
      res.status(StatusCodes.NOT_FOUND).send({
        status: StatusCodes.NOT_FOUND,
        message: "PC not found!",
      });
      return;
    }

    res.status(StatusCodes.OK).send({
      status: StatusCodes.OK,
      data: updatedPc,
      message: "Your PC has been updated successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "Please try again!",
    });
  }
};

export { UpdatePc };
