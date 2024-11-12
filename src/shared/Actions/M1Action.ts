import { ActionType } from "@rbxts/simpleaction";
import simpleWeapon from "@rbxts/simpleweapon";

const M1Action: ActionType = {
	Name: "M1",
	InputMethod: "UserInput",
	Gesture: Enum.UserInputType.MouseButton1,
	ClientOnStart: (player) => {
		if (player.Character) {
			const currentWeapon = player.Character.GetAttribute("currentweapon") as string;
			const weapon = simpleWeapon.getWeapon(currentWeapon);
			if (weapon) {
				simpleWeapon.M1(weapon, player.Character);
			}
		}
	},
	ServerOnStart: (player) => {
		if (player.Character) {
			const currentWeapon = player.Character.GetAttribute("currentweapon") as string;
			const weapon = simpleWeapon.getWeapon(currentWeapon);
			if (weapon) {
				simpleWeapon.M1(weapon, player.Character);
			}
		}
	},
};
export = M1Action;
