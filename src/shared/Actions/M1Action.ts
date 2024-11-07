import { ActionType } from "@rbxts/simpleaction";
import simpleWeapon from "@rbxts/simpleweapon";

const M1Action: ActionType = {
	Name: "M1",
	InputMethod: "UserInput",
	Gesture: Enum.UserInputType.MouseButton1,
	ClientOnStart: (player) => {
		if (player.Character) {
			simpleWeapon.executeClientAttack("Fist", player.Character);
		}
	},
	ServerOnStart: (player) => {
		if (player.Character) {
			simpleWeapon.executeServerAttack("Fist", player.Character);
		}
	},
};
export = M1Action;
