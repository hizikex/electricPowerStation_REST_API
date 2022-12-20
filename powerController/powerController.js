import express from "express";

import { powerModel } from "../powerModel/powerModel.js";

//ASSIGNMENT: CREATE AN API THAT WILL SOLVE ELECTRIC DISTRIBUTION PROBLEM IN NIGERIA.
// This solution will provide several power stations and assign each  power station to some specific
//state they are to supply power to.
//The states they are to  supply power to will be considerably close to these power stations.



//see all power generating station
export const allPowerStations = async (req, res) => {
    try{
        const powerStation = await powerModel.findAll();
        if (powerStation.length > 0) {
            res.status(200).json({
                message: "All Power Stations In Nigeria",
                data: powerStation
            })
        } else {
            res.status(404).json({
                message: "Unable To See All PowerStations"
            })
        }
    } catch (e) {
        res.status(404).json({
            message: e.message
        })
    }
};

//create an API to see powerStation
export const onePowerStation = async (req, res)=>{
    try{
        let id = req.params.id
        const aPowerStation = await powerModel.findAll({
            where: {
                id: id
            }
        });
        if (aPowerStation !== 0) {
            res.status(200).json({
                message: "The Power Station with ID: " + id,
                data: aPowerStation
            })
        } else{
            res.status(400).json({
                message: "Cannot Display The Power Station With ID: " + id
            })
        }
    } catch(e) {
        res.status(404).json({
            message: e.message
        })
    }
};

//logic to update a powerstation
export const updatePowerStation = async (req, res) =>{
    try {
        let id = req.params.id;
        let body =req.body;
        const updatedPowerStation = await powerModel.update(body, {
            where: {
                id:id
            }
        });
        if (updatedPowerStation[0] !== 0) {
            res.status(200).json({
                message: "Power Station with ID: " + " Updated Successfully",
                data: updatedPowerStation
            })
        }
    } catch (e) {
        res.status(404).json({
            message: e.message
        })
    }
};

//logic to delete failed power station
export const deletePowerStation = async (req, res) =>{
    try{
        let id = req.params.id;
        const deletedPowerStation = await powerModel.destroy({
            where: {
                id: id
            }
        });
        if (deletedPowerStation !== 0) {
            res.status(200).json({
                message: "Power Station Deleted",
                data: deletedPowerStation
            })
        } else {
            res.status(404).json({
                message: "Unable to delete power station because, ID: " + id + " not found"
            })
        }
    }catch(e){
        res.status(404).json({
            message: e.message
        })
    }
};

//create a new power station
export const createPowerStation = async (req, res)=>{
    try{
        let body = req.body;
        const newPowerStation = await powerModel.create(body)
        res.status(200).json({
            message: "New Power Station Created",
            data: newPowerStation
        })
    } catch (e) {
        res.status(404).json({
            message: e.message
        })
    }
}