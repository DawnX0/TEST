import { ActionType } from "@rbxts/simpleaction";

const RunAction: ActionType = {
	Name: "Run",
	InputMethod: "UserInput",
	Gesture: Enum.KeyCode.LeftShift,
	ClientOnStart: (player: Player) => {
		print(`Client: ${player.Name} is sprinting`);

		const character = player.Character;
		if (character) {
			const lastTick = (character.GetAttribute("sprintTick") as number) || 0;
			if (lastTick && tick() - lastTick < 0.25) {
				const humanoid = character.FindFirstChildWhichIsA("Humanoid");
				if (humanoid) {
					humanoid.WalkSpeed = 32;
				}
			}
			character.SetAttribute("sprintTick", tick());
		}
	},
	ClientOnEnd: (player: Player) => {
		const character = player.Character;
		if (character) {
			const humanoid = character.FindFirstChildWhichIsA("Humanoid");
			if (humanoid) {
				humanoid.WalkSpeed = 16;
			}
		}
	},
	ServerOnStart: (player: Player) => {
		print(`Server: ${player.Name} is sprinting`);
		const character = player.Character;
		if (character) {
			character.SetAttribute("running", true);
		}
	},
	ServerOnEnd: (player: Player) => {
		const character = player.Character;
		if (character) {
			character.SetAttribute("running", undefined);
		}
	},
	TouchButton: false,
};
export = RunAction;
