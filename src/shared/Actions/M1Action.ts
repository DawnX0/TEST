import { ActionType } from "@rbxts/simpleaction";
import simpleWeapon from "@rbxts/simpleweapon";

const M1Action: ActionType = {
	Name: "M1",
	InputMethod: "UserInput",
	Gesture: Enum.UserInputType.MouseButton1,
	ClientOnStart: (player) => {
		if (player.Character) {
			const currentWeapon = player.Character.GetAttribute("CurrentWeapon") as string;
			if (currentWeapon) {
				simpleWeapon.executeClientAttack(currentWeapon, player.Character);
			}
		}
	},
	ServerOnStart: (player) => {
		if (player.Character) {
			const currentWeapon = player.Character.GetAttribute("CurrentWeapon") as string;
			if (currentWeapon) {
				simpleWeapon.executeServerAttack(currentWeapon, player.Character);
			}
		}
	},
};
export = M1Action;
