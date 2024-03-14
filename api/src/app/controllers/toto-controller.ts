import Service from "../services/service";
import TotoService from "../services/toto-service";
import Controller from "./controller";
import Toto from "../models/toto";
//import { Request, Response } from "express";

        
class TotoController extends Controller {
        
    constructor(service: Service) {
        super(service);
    }
}

export default new TotoController(new TotoService(Toto));
