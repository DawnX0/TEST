import { ActionType } from "@rbxts/simplelibrary/out/SimpleLibrary/Action";
import { SimpleBasicATK } from "@rbxts/simplelibrary/out/Utility/SimpleWeaponFunctions";

const BasicATKAction: ActionType = {
	Name: "BasicATK",
	InputMethod: "UserInput",
	Gesture: Enum.UserInputType.MouseButton1,
	Throttle: 0.2,

	ClientOnStart: (player) => {
		SimpleBasicATK(player.Character!);
	},

	ServerOnStart: (player) => {
		SimpleBasicATK(player.Character!);
	},
};

export = BasicATKAction;
