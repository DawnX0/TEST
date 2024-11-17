import { ActionType } from "@rbxts/simplelibrary/out/SimpleLibrary/Action";
import { SimpleAttack } from "@rbxts/simplelibrary/out/Utility/SimpleAttack";

const AttackAction: ActionType = {
	Name: "Attack",
	InputMethod: "ContextAction",
	Gesture: Enum.UserInputType.MouseButton1,
	Throttle: 0.2,

	ClientOnStart: (player: Player) => {
		SimpleAttack(player.Character!);
	},

	ServerOnStart: (player) => {
		SimpleAttack(player.Character!);
	},
};

export = AttackAction;
