import {Router, Request, Response} from "express"

const router  = Router();

router.get("/", (req:Request, res: Response) : void => {
    let users = ["Good", "Trust", "Joy"];
    res.status(200).send(users)
})


export {router}
