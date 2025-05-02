import express from 'express';
import UserController from '../controllers/userController';

const userRouter = express.Router();

userRouter.get("/user/:id", async (req, res) => {
    try {
        const user = await UserController.getUserById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
);

userRouter.post("/user", async (req, res) => {
    try {
        UserController.createUser(req.body);
        res.status(201).send("User created successfully");
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
);

userRouter.patch("/user/:id", async (req, res) => {
    try {
        const updatedUser = await UserController.updateUser(req.params.id, req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
);

userRouter.put("/user/:id", async (req, res) => {
    try {
        const updatedUser = await UserController.updateUser(req.params.id, req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
);

userRouter.delete("/user/:id", async (req, res) => {
    try {
        const deleteUser = UserController.deleteUser(req.params.id);
        res.status(200).send("User deleted successfully");
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
);

export default userRouter;
