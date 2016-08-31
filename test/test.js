var request = require('request');
var cheerio = require('cheerio')
var chai = require("chai");
var expect = chai.expect;

it("can use cheerio to match on css", function (done) {
    request("http://help.websiteos.com/websiteos/example_of_a_simple_html_page.htm", function (error, response, body) {
        $ = cheerio.load(body)
        data = $($('h1')).text();
        expect(data).to.match(/Example of a simple HTML page/)
        done();
    });
});
