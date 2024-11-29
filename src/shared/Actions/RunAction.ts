import { ActionType } from "@rbxts/simplelibrary/out/SimpleLibrary/Action";
import { PlayAnimation, StopAnimation } from "@rbxts/simplelibrary/out/Utility/SimpleMiscFunctions";
import { GetAnimator } from "@rbxts/simplelibrary/out/Utility/SimpleMiscFunctions";

const RunAction: ActionType = {
	Name: "Run",
	InputMethod: "UserInput",
	Gesture: Enum.KeyCode.W,
	DoubleTap: true,
	DoubleTapThreshold: 0.3,
	Restrictions: ["attacking", "blocking"],

	ClientOnStart: (player: Player) => {
		const character = player.Character as Model;
		const humanoid = character.FindFirstChildWhichIsA("Humanoid");

		if (humanoid && character) {
			PlayAnimation(character, "rbxassetid://18495070753", "run", Enum.AnimationPriority.Action2);
		} else error(`Couldn't find humanoid in ${character.Name}`);
	},

	ClientOnEnd: (player: Player) => {
		const character = player.Character as Model;
		const humanoid = character.FindFirstChildWhichIsA("Humanoid");
		const animator = GetAnimator(character);

		if (humanoid && animator) {
			StopAnimation(player.Character!, "run");
		} else error(`Couldn't find humanoid in ${character.Name}`);
	},

	ServerOnStart: (player: Player) => {
		player.Character!.SetAttribute("running", true);
		const humanoid = player.Character!.FindFirstChildWhichIsA("Humanoid");
		humanoid!.WalkSpeed = 32;
	},

	ServerOnEnd: (player: Player) => {
		player.Character!.SetAttribute("running", undefined);
		const humanoid = player.Character!.FindFirstChildWhichIsA("Humanoid");
		humanoid!.WalkSpeed = 16;
	},
};

export = RunAction;
