import { ActionType } from "@rbxts/simplelibrary/out/SimpleLibrary/Action";
import { SimpleEquip } from "@rbxts/simplelibrary/out/Utility/SimpleWeaponFunctions";

const EquipAction: ActionType = {
	Name: "Equip",
	InputMethod: "UserInput",
	Gesture: Enum.KeyCode.E,

	ServerOnStart: (player) => {
		SimpleEquip(player.Character!);
	},
};

export = EquipAction;
