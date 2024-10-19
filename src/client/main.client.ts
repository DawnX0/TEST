import { Players } from "@rbxts/services";
import SimpleInput from "@rbxts/simpleinput";

const player = Players.LocalPlayer;

const Client = SimpleInput.Client;
Client.Listen(player);

const DefaultBinds = new Map<Enum.KeyCode | Enum.UserInputType, string>([
	[Enum.KeyCode.Q, "Dash"],
	[Enum.KeyCode.E, "Equip"],
]);

const Responses = new Map<string, () => void>([
	["Dash", () => print("Dashing!")],
	["Equip", () => print("Equipping!")],
]);

Client.SetClientBinds(DefaultBinds);
Client.SetClientResponse(Responses);
