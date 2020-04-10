import { loadTournament, checkTournamentName, loadBracket } from "./index";

export const searchTournament = async (userInputTournament, playerName, gameName) =>  {
  const tournamentName = await checkTournamentName(userInputTournament);
  const getTournamentObjectToNumber = await loadTournament(tournamentName, gameName);
  const tournamentObjectToNumber = await Math.ceil(Number(getTournamentObjectToNumber.total_count)/100);
  const result = loadBracket(tournamentObjectToNumber, playerName, userInputTournament, gameName);
  return result;
}
