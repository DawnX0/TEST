import { ActionType } from "@rbxts/simplelibrary/out/SimpleLibrary/Action";
import { PlayAnimation, StopAnimation } from "@rbxts/simplelibrary/out/Utility/Animation";
import { GetAnimator } from "@rbxts/simplelibrary/out/Utility/GetAnimator";

const RunAction: ActionType = {
	Name: "Run",
	InputMethod: "UserInput",
	Gesture: Enum.KeyCode.W,
	DoubleTap: true,
	DoubleTapThreshold: 0.3,
	Restricitons: ["attacking"],

	ClientOnStart: (player: Player) => {
		const character = player.Character as Model;
		const humanoid = character.FindFirstChildWhichIsA("Humanoid");

		if (humanoid && character) {
			PlayAnimation(character, "rbxassetid://18495070753", "run");
			humanoid.WalkSpeed = 32;
		} else error(`Couldn't find humanoid in ${character.Name}`);
	},

	ClientOnEnd: (player: Player) => {
		const character = player.Character as Model;
		const humanoid = character.FindFirstChildWhichIsA("Humanoid");
		const animator = GetAnimator(character);

		if (humanoid && animator) {
			StopAnimation(animator, "run");
			humanoid.WalkSpeed = 16;
		} else error(`Couldn't find humanoid in ${character.Name}`);
	},

	ServerOnStart: (player: Player) => {
		player.Character!.SetAttribute("running", true);
	},

	ServerOnEnd: (player: Player) => {
		player.Character!.SetAttribute("running", undefined);
	},
};

export = RunAction;
