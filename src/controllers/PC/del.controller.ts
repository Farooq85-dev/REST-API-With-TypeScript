import { Request, Response } from "express";
import { Pc } from "../../models/pc.model";
import { StatusCodes } from "http-status-codes";

const DelPc = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedPc = await Pc.findByIdAndDelete(id);
    console.log(deletedPc);

    res.status(StatusCodes.OK).send({
      status: StatusCodes.OK,
      data: deletedPc,
      message: "Your PC has been deleted successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      status: StatusCodes.INTERNAL_SERVER_ERROR,
      message: "Please try again!",
    });
  }
};

export { DelPc };
