const fetchAndPrintNBAdata = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0cc4c302acmsh1319b32e08bcd0ep178f40jsn0adb7f951f53",
        "X-RapidAPI-Host": "free-nba.p.rapidapi.com",
      },
    };

    let response = await fetch(
      `https://free-nba.p.rapidapi.com/teams?page=1`,
      options
    );
    let response2 = await fetch(
        `https://free-nba.p.rapidapi.com/teams?page=2`,
        options
      );
   //Print data to a template
    if (response.status === 200) {
      response = await response.json();
      //Adding data back to HTML
      const listofTeams = response.data;
      if(listofTeams.length > 0) {
        listofTeams.forEach(team => {
          AddTeam(team);
        })
      }
    }
    if (response2.status === 200) {
        response2 = await response2.json();
        //Adding data back to HTML
        const listofTeams = response2.data;
        if(listofTeams.length > 0) {
          listofTeams.forEach(team => {
            AddTeam(team);
          })
        }
      }
};
const AddTeam = (team) => {
    const template = document
      .getElementById("card-template")
      .content.cloneNode(true);

    template.querySelector(".card-title").innerText = team.name;
    template.querySelector(".card-text").innerText = team.city;
         
    document.querySelector("#car-list").appendChild(template);
};
fetchAndPrintNBAdata();