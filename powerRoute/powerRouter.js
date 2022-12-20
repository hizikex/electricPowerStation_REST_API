import express from "express";
import { allPowerStations, createPowerStation, deletePowerStation, onePowerStation, updatePowerStation } from "../powerController/powerController.js";

const powerSupplyRouter = express.Router();

//router to see all power stations in Nigeria
powerSupplyRouter.get('/powerstations', allPowerStations);

//router to see a single power station in Nigeria
powerSupplyRouter.get('/powerstations/:id', onePowerStation);

//router to update power station
powerSupplyRouter.patch('/powerstations/:id', updatePowerStation);

//router to delete powerstation
powerSupplyRouter.delete('/powerstations/:id', deletePowerStation)

//router to create a new power station
powerSupplyRouter.post('/powerstations', createPowerStation)



export default powerSupplyRouter;

