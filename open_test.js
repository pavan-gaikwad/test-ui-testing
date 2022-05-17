Feature('open');

Scenario('Open Page', ({ I }) => {
    I.amOnPage('https://yahoo.com/');
    I.see('IPL');
    I.amOnPage('https://news.google.com');
    I.see('India');
    I.amOnPage('https://news.ycombinator.com');
    I.see('Hacker');
});

Scenario('Open Page 2', ({ I }) => {
    I.amOnPage('https://yahoo.com/');
    I.see('IPL');
    I.amOnPage('https://news.google.com');
    I.see('India');
    I.amOnPage('https://news.ycombinator.com');
    I.see('Hacker');
});

Scenario('Open Page 3', ({ I }) => {
    I.amOnPage('https://yahoo.com/');
    I.see('IPL');
    I.amOnPage('https://news.google.com');
    I.see('India');
    I.amOnPage('https://news.ycombinator.com');
    I.see('Hacker');
});

Scenario('Open Page 4', ({ I }) => {
    I.amOnPage('https://yahoo.com/');
    I.see('IPL');
    I.amOnPage('https://news.google.com');
    I.see('India');
    I.amOnPage('https://news.ycombinator.com');
    I.see('Hacker');
});

