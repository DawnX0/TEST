import { ActionType } from "@rbxts/simplelibrary/out/SimpleLibrary/Action";
import { SimpleHeavyATK } from "@rbxts/simplelibrary/out/Utility/SimpleWeaponFunctions";

const HeavyATKAction: ActionType = {
	Name: "HeavyATK",
	InputMethod: "UserInput",
	Gesture: Enum.KeyCode.R,
	Throttle: 0.2,

	ClientOnStart: (player) => {
		SimpleHeavyATK(player.Character!);
	},

	ServerOnStart: (player) => {
		SimpleHeavyATK(player.Character!);
	},
};

export = HeavyATKAction;
