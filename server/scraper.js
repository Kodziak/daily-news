const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");
let timestamp = new Date();

//Url's for scrapping pages
const testingplusme = "https://testingplus.me";
const testbytes = "https://www.testbytes.net/software-testing-blog/";
const testeye = "http://thetesteye.com/blog/";
const qatech = "http://www.qatech.pl";
const softwaretestinghelp = "https://www.softwaretestinghelp.com";

request(testingplusme, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    let devtoList = [];
    $(".post-item").each((i, el) => {
      devtoList[i] = {
        title: $(el)
          .find(".block-post-overlay")
          .find(".post-thumb")
          .attr("title"),
        url: $(el)
          .find(".block-post-overlay")
          .find(".post-thumb")
          .attr("href"),
        hostnameURL: testingplusme,
        hostname: "testingplus.me",
        timestamp: timestamp
      };
    });
    // Write Row To JSON
    const devtoListTrimmed = devtoList.filter(n => n != undefined);
    fs.writeFile(
      "data/testingplusme.json",
      JSON.stringify(devtoListTrimmed, null, 4),
      err => console.log("Testingplusme file successfully written!")
    );
  }
});

request(testbytes, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    let devtoList = [];
    $(".container .row ._blgNew-02a").each((i, el) => {
      devtoList[i] = {
        title: $(el)
          .find("._blgNew-02ab")
          .children()
          .attr("href"),
        url: $(el)
          .find("._blgNew-02ab")
          .children()
          .attr("href"),
        hostnameURL: testbytes,
        hostname: "testbytes.net",
        timestamp: timestamp
      };
    });
    // Write Row To JSON
    const devtoListTrimmed = devtoList.filter(n => n != undefined);
    fs.writeFile(
      "data/testbytes.json",
      JSON.stringify(devtoListTrimmed, null, 4),
      err => console.log("Testbytes file successfully written!")
    );
  }
});

request(testeye, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    let devtoList = [];
    $(".post .h2title").each((i, el) => {
      devtoList[i] = {
        title: $(el)
          .children()
          .first()
          .text(),
        url: $(el)
          .find("a")
          .attr("href"),
        hostnameURL: testeye,
        hostname: "testeye.com",
        timestamp: timestamp
      };
    });
    // Write Row To JSON
    const devtoListTrimmed = devtoList.filter(n => n != undefined);
    fs.writeFile(
      "data/testeye.json",
      JSON.stringify(devtoListTrimmed, null, 4),
      err => console.log("Testeye file successfully written!")
    );
  }
});

request(qatech, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    let devtoList = [];
    $(".post").each((i, el) => {
      devtoList[i] = {
        title: $(el)
          .find(".entry-header")
          .find(".entry-title")
          .text(),
        url: $(el)
          .find(".entry-header")
          .find(".entry-title")
          .children()
          .attr("href"),
        hostnameURL: qatech,
        hostname: "qatech.pl",
        timestamp: timestamp
      };
    });
    // Write Row To JSON
    const devtoListTrimmed = devtoList.filter(n => n != undefined);
    fs.writeFile(
      "data/qatech.json",
      JSON.stringify(devtoListTrimmed, null, 4),
      err => console.log("QaTech file successfully written!")
    );
  }
});

request(softwaretestinghelp, (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    let devtoList = [];
    $(".post").each((i, el) => {
      devtoList[i] = {
        title: $(el)
          .find(".entry-header")
          .find(".entry-title")
          .text(),
        url: $(el)
          .find(".entry-header")
          .find(".entry-title")
          .children()
          .attr("href"),
        hostnameURL: softwaretestinghelp,
        hostname: "softwaretestinghelp.com",
        timestamp: timestamp
      };
    });
    // Write Row To JSON
    const devtoListTrimmed = devtoList.filter(n => n != undefined);
    fs.writeFile(
      "data/softwaretestinghelp.json",
      JSON.stringify(devtoListTrimmed, null, 4),
      err => console.log("softwaretestinghelp file successfully written!")
    );
  }
});
