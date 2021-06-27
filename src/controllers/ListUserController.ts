import { ListUserService } from "../services/ListUserService";

class ListUsersController{
    async handle(request:Request, response:Response){
        const listUserService = new ListUserService();
        const users = await listUserService.execute();
    }
}

export { ListUserController }