import { Players } from "@rbxts/services";
import SimpleInput from "@rbxts/simpleinput";
import SimpleTimer from "@rbxts/simpletimer";
import DCS from "@rbxts/dcs";

const Server = SimpleInput.Server;
Server.Listen();

Server.SetDefaultBinds(
	new Map<Enum.KeyCode | Enum.UserInputType, string>([
		[Enum.KeyCode.Q, "Dash"],
		[Enum.KeyCode.E, "Equip"],
	]),
);
Server.SetServerResponses(
	new Map([
		["Dash", (player: Player) => {}],
		["Equip", (player: Player) => {}],
	]),
);

const BurnEffect = DCS.CreateStatusEffect({
	Name: "Burn",
	Duration: 10,
	Tick: 0.5,
	Effect: (entries) => {
		const Model = entries.Model;
		const Humanoid = Model.FindFirstChildWhichIsA("Humanoid");

		if (Humanoid) {
			Humanoid.Health -= 1;
		}
	},
});

DCS.AddStatusEffect(BurnEffect);

const DashSkill = DCS.CreateSkill({
	Name: "Dash",
	CastTime: 1,
	Cooldown: 1,
	Cast: (entries) => {
		const Model = entries.Model;
		const RootPart = Model.FindFirstChild("HumanoidRootPart") as BasePart;

		if (RootPart) {
			print(Model);
		}
	},
});

DCS.AddSkill(DashSkill);

Players.PlayerAdded.Connect((player: Player) => {
	print(`${player} has joined.`);
	player.CharacterAdded.Connect((character: Model) => {
		DCS.AddActor(character);

		const actor = DCS.GetActor(character);
		if (actor) {
			actor.ApplyStatusEffect("Burn");
			task.wait(3);
			actor.RemoveStatusEffect("Burn");
		}
	});
});
