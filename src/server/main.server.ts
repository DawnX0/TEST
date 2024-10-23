import { Players } from "@rbxts/services";
import SimpleInput from "@rbxts/simpleinput";
import SimpleTimer from "@rbxts/simpletimer";
import DCS from "@rbxts/dcs";

const DeathTimer = SimpleTimer.CreateTimer("DeathTimer", 5, 1, true);

const DashSkill = DCS.CreateSkill({
	Name: "Dash",
	CooldownTime: 0.5,
	CastTime: 1,
	Cast: (entries) => {
		print(entries.Name);
	},
});

DCS.RegisterSkill(DashSkill);

const BurnEffect = DCS.CreateStatusEffect("Burn", 5, 1, (entries) => {
	const Model = entries.Model;
	const Humanoid = Model.FindFirstChildWhichIsA("Humanoid");
	if (!Humanoid) return;

	Humanoid.Health = Humanoid.Health - 5;
});

DCS.AddStatusEffect(BurnEffect);

const DefaultBinds = new Map<Enum.KeyCode | Enum.UserInputType, string>([
	[Enum.KeyCode.Q, "Dash"],
	[Enum.KeyCode.E, "Equip"],
]);

const Responses = new Map<string, (player: Player) => void>([
	[
		"Dash",
		(player) => {
			const character = player.Character;
			if (character) {
				const actor = DCS.GetActor(character);
				if (actor) {
					actor.CastSkill("Dash");
				}
			}
		},
	],
	["Equip", () => print("Server Equiping!")],
]);

const Server = SimpleInput.Server;
Server.Listen();

Server.SetDefaultBinds(DefaultBinds);
Server.SetServerResponses(Responses);

Players.PlayerAdded.Connect((player: Player) => {
	print(`${player} has joined.`);
	player.CharacterAdded.Connect((character: Model) => {
		DCS.AddActor(character);

		const actor = DCS.GetActor(character);
		if (actor) {
			actor.ApplyStatusEffect("Burn");
			task.wait(1);
			actor.RemoveStatusEffect("Burn");
		}
	});
});
