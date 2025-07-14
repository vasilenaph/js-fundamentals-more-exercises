function tsTeamAccount(array) {
    let gamesSequence = array.shift().split(" ");

    for (let i = 0; i < array.length; i++) {
        let line = array[i];
        let [command, data] = line.split(" ");
        let index = gamesSequence.indexOf(data);

        if (line === "Play!") break;

        if (command === "Install") {
            if (index === -1) {
                gamesSequence.push(data);
            }
        } else if (command === "Uninstall") {
            if (index !== -1) {
                gamesSequence.splice(index, 1);
            }
        } else if (command === "Update") {
            if (index !== -1) {
                gamesSequence.splice(index, 1);
                gamesSequence.push(data);
            }
        } else if (command === "Expansion") {
            let [game, expansion] = data.split("-");
            let gameIndex = gamesSequence.indexOf(game);

            if (gameIndex !== -1) {
                gamesSequence.splice(gameIndex + 1, 0, `${game}:${expansion}`);
            }
        }
    }

    console.log(gamesSequence.join(" "));
}

tsTeamAccount([
    'CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
)
