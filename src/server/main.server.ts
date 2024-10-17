import { Players } from "@rbxts/services";
import SimpleInput from "@rbxts/simpleinput";
import SimpleTimer from "@rbxts/simpletimer";
import DCS from "@rbxts/dcs";

const Server = SimpleInput.Server;
Server.Listen();

const DefaultBinds = new Map<Enum.KeyCode | Enum.UserInputType, string>([
	[Enum.KeyCode.Q, "Dash"],
	[Enum.KeyCode.E, "Equip"],
]);

const Responses = new Map<string, () => void>([
	["Dash", () => print("Dash server")],
	["Equip", () => print("Server Equiping!")],
]);

Server.SetDefaultBinds(DefaultBinds);
Server.SetServerResponses(Responses);

Players.PlayerAdded.Connect((player: Player) => {
	print(`${player} has joined.`);
});

const DeathTimer = SimpleTimer.CreateTimer("DeathTimer", 5, 1, true);

const BurnEffect = DCS.CreateStatusEffect("Burn", 5, 1, (entries) => {
	const Model = entries.Model;
	const Humanoid = Model.FindFirstChildWhichIsA("Humanoid");
	if (!Humanoid) return;

	Humanoid.Health = Humanoid.Health - 5;
});

DCS.AddStatusEffect(BurnEffect);

const DashSkill = DCS.CreateSkill("Dash", (entries) => {
	const Model = entries.Model;
	const RootPart = Model.FindFirstChild("HumanoidRootPart") as BasePart;

	if (RootPart) {
		RootPart.AssemblyLinearVelocity = RootPart.CFrame.LookVector.mul(40);
	}
});

DCS.RegisterSkill(DashSkill);

Players.PlayerAdded.Connect((player: Player) => {
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
