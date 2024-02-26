const maps = [
    { name: 'BIND', description: 'Binds unique feature is that it doesnt contain a mid section, instead having two one-way teleporters. One takes players from A Short to B Short and the other takes players from B Long to A Lobby. Players use teleporters by walking into the section of wall taken up by the teleport entrance. They will then instantly arrive in a small exit room which players leave by walking towards the door out of the room. This door is closed by default and can only be opened by players inside the exit room walking up to it, at which point they will open automatically. Players outside the exit room cannot open these doors, but they can be penetrated by gunfire.', image: 'Mapimg/BindW.png' },
    { name: 'HAVEN', description: 'Havens features include an additional third spike site. This does not affect the number of ultimate orbs on the map; Havens two ultimate orbs are present in A Long and C Long (Dragon). The doors at Mid also have destructible panels covering them. Whilst intact, they absorb damage and cannot be penetrated by gunfire. The panels however have 400 HP each and can be damaged, with colored indicators on them implying how much health they have left (starts blue, then turns yellow and then red as they take more damage). They can eventually be destroyed to allow players to wallbang through these doors for the rest of the round.', image: 'Mapimg/HavenW.png' },
    { name: 'SPLIT', description: 'Within the Shinjuku district of Japans capital, Tokyo, a split has emerged between two groups. On one side, Kingdom Corporation continues its developments in the area, building plazas alongside its offices and shops there, and all overlooked by its humongous HQ situated further north, towering into the city skyline. On the other side, local residents not only push back against the corporations expansion into their home and removal of their cultural property, but seek to take it back from them.', image: 'Mapimg/SplitW.png' },
    { name: 'ASCENT', description: 'Ascents features include mechanical doors leading into its spike sites. Each site has one door (A Link for A and Market for B) that is opened at the start of each round. Players can use a switch on the site side of the door (Next to the door on A and on a table in Toolshed on B) to close or open the door. These doors are impenetrable while closed but have 500 HP, allowing players to damage and eventually destroy them. Once destroyed, the doorway remains permanently open for the rest of the round. The two walls separating Courtyard from Link also have a destructible panel each to cover them. Whilst intact, they absorb damage and cannot be penetrated by gunfire.', image: 'Mapimg/AscentW.png' },
    { name: 'ICEBOX', description: 'Icebox is the first map to introduce horizontal ziplines, seen at A Site. Each Icebox site is a complex combat space that features plenty of cover and verticality. This map emphasizes skirmishes, sharp aim, and adaptive play. It is also the first map where the plant site has different levels of elevation. Both sites contain nests that players can get into using ropes and then plant the spike on the nest floor.', image: 'Mapimg/IceboxW.png' },
    { name: 'BREEZE', description: 'Breezes features are present on the A side of the map, mostly to do with A Hall. There are ropes to get players into A Hall. On the defending side players can use the rope at the back of A Site to get onto Bridge and into Hall, and on the attacking side players can use the rope in A Lobby to get into Hall. A Site has an impenetrable, indestructible mechanical door leading into A Hall that can be opened and closed using switches on either side. The door is closed at the start of each round. Towards the Attacker side of Hall is a one-way chute that can be used to go to Mid.', image: 'Mapimg/BreezeW.png' },
];

let currentIndex = 0;

function changeMap(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = maps.length - 1;
    } else if (currentIndex >= maps.length) {
        currentIndex = 0;
    }

    updateMap();
}

function updateMap() {
    const mapImage = document.getElementById('mapImage');
    const mapDescription = document.getElementById('mapDescription');

    const currentMap = maps[currentIndex];
    mapImage.src = currentMap.image;
    mapDescription.innerHTML = `<h2>${currentMap.name}</h2><p>${currentMap.description}</p>`;
}
updateMap();
