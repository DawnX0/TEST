import { ActionType } from "@rbxts/simplelibrary/out/SimpleLibrary/Action";
import { SimpleBlock } from "@rbxts/simplelibrary/out/Utility/SimpleWeaponFunctions";

const BlockAction: ActionType = {
	Name: "Block",
	InputMethod: "UserInput",
	Gesture: Enum.KeyCode.F,
	Throttle: 0.2,

	ClientOnStart: (player) => {
		SimpleBlock(player.Character!);
	},

	ServerOnStart: (player) => {
		SimpleBlock(player.Character!);
	},

	ClientOnEnd: (player) => {
		SimpleBlock(player.Character!);
	},

	ServerOnEnd: (player) => {
		SimpleBlock(player.Character!);
	},
};

export = BlockAction;
