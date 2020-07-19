async function getTeams(year, k) {
    // write your code here

    let pageCount = 1;
    
    const response = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${pageCount}`);

    console.log(response.json());
    // API endpoint template: https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=<YEAR>&page=<PAGE_NUMBER>
}

getTeams(2015, 13);