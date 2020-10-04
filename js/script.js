let body = document.querySelector("body");
let container = document.createElement('div');
container.setAttribute('class' , 'container');
body.appendChild(container);

let site_header_clearfix = document.createElement('div');
site_header_clearfix.setAttribute('class' , 'site-header clearfix');
container.appendChild(site_header_clearfix);

let star = document.createElement('span');
star.setAttribute('class', 'star');
star.innerHTML = '★';

let site_logo = document.createElement('div');
site_logo.setAttribute('class', 'site-logo');
site_header_clearfix.appendChild(site_logo);
site_logo.innerHTML += 'HTML5 ';
site_logo.appendChild(star);
site_logo.innerHTML += ' Boilerplate';

let site_nav_inline_block_list = document.createElement('ul');
site_nav_inline_block_list.setAttribute('class' , 'site-nav inline-block-list');
site_header_clearfix.appendChild(site_nav_inline_block_list);
//
let source_code_li = document.createElement('li');
site_nav_inline_block_list.appendChild(source_code_li);

let source_code_lien = document.createElement('a');
source_code_li.appendChild(source_code_lien);
source_code_lien.setAttribute('href', 'https://github.com/h5bp/html5-boilerplate');
source_code_lien.innerHTML ='Source code';
//
let docs_li = document.createElement('li');
site_nav_inline_block_list.appendChild(docs_li);

let docs_lien = document.createElement('a');
docs_li.appendChild(docs_lien);
docs_lien.setAttribute('href', 'https://github.com/h5bp/html5-boilerplate/blob/v8.0.0/dist/doc/TOC.md');
docs_lien.innerHTML ='Docs';
//
let other_projects_li = document.createElement('li');
site_nav_inline_block_list.appendChild(other_projects_li);

let other_projects_lien = document.createElement('a');
other_projects_li.appendChild(other_projects_lien);
other_projects_lien.setAttribute('href', 'https://h5bp.org/');
other_projects_lien.innerHTML +='Other projects';
// site-header clearfix fini

let site_promo = document.createElement('div');
site_promo.setAttribute('class', 'site-promo');
container.appendChild(site_promo);

let the_web_most = document.createElement('h1');
site_promo.appendChild(the_web_most);
the_web_most.innerHTML += "The web's most popular front-end template";

let description = document.createElement('p');
site_promo.appendChild(description);
description.setAttribute('class', 'description');
description.innerHTML +='HTML 5 Boilerplate helps you build fast, robust, and adaptable web apps or sites. Kick-start yout project with the combines knowledge and effort of 100s of developers, all in one little package.';
// Manque strong

let cta_option = document.createElement('div');
cta_option.setAttribute('class', 'cta-option');
site_promo.appendChild(cta_option);

let btn_btn_download = document.createElement('a');
btn_btn_download.setAttribute('class', 'btn btn-download');
btn_btn_download.setAttribute('href', 'https://github.com/h5bp/html5-boilerplate/releases/download/v8.0.0/html5-boilerplate_v8.0.0.zip');
cta_option.appendChild(btn_btn_download);

let download = document.createElement('strong');
cta_option.appendChild(download);
download.innerHTML += 'Download ';

// Manque strong

let version = document.createElement('span');
version.setAttribute('class', 'version');
cta_option.appendChild(version);
version.innerHTML += 'v8.0.0';

// Manque CHANGELOG
// Fin container

let site_section = document.createElement('div');
site_section.setAttribute('class', 'site-section');
site_section.appendChild(container);
body.appendChild(site_section);

let save_time = document.createElement('h2');
container.appendChild(save_time);
save_time.innerHTML += 'Save time. Create with confidence.';

let grid = document.createElement('div');
grid.setAttribute('class', 'grid');
container.appendChild(grid);


let grid_cell = document.createElement('div');
grid_cell.setAttribute('class', 'grid-cell');
grid.appendChild(grid_cell);

let analytics = document.createElement('h3');
grid_cell.appendChild(analytics);
analytics.appendChild(star);
analytics.innerHTML += 'Analytics, icons, and more';

let a_lean = document.createElement('p');
grid_cell.appendChild(a_lean);
a_lean.innerHTML = 'A lean, mobile-friendly HTML template; optimized Google Analytics snippet; placeholder touch-device icon; and docs covering dozens of extra tips and tricks.';

// //

grid.appendChild(grid_cell);

let normalize = document.createElement('h3');
grid_cell.appendChild(normalize);
normalize.appendChild(star);
normalize.innerHTML += 'Normalize.css and helpers';

let includes = document.createElement('p');
grid_cell.appendChild(includes);
let normalize_href = document.createElement('a');
normalize_href.setAttribute('href', 'https://necolas.github.io/normalize.css/');
normalize_href.innerHTML = 'Normalize.css';
includes.innerHTML += 'Includes ';
includes.appendChild(normalize_href);
includes.innerHTML += ' a modern, HTML5-ready alternative to CSS resets — and further base styles, helpers, media queries, and print styles.';


// grid.appendChild(grid_cell);

let modernizr = document.createElement('h3');
grid_cell.appendChild(modernizr);
modernizr.appendChild(star);
modernizr.innerHTML += 'Modernizr';

let get_the_latest = document.createElement('p');
grid_cell.appendChild(get_the_latest);
let http_modernizr = document.createElement('a');
http_modernizr.setAttribute('href', 'https://modernizr.com/');
http_modernizr.innerHTML += 'Modernizr';
get_the_latest.innerHTML += 'Get the latest minified versions of Modernizr: ';
get_the_latest.appendChild(http_modernizr);
get_the_latest.innerHTML += ' feature detection library, complete with a custom build configuration';

//

grid.append(grid_cell);
let performance = document.createElement('h3');
grid_cell.appendChild(performance);
performance.appendChild(star);
performance.innerHTML += 'High performance';

let apache = document.createElement('p');
grid_cell.appendChild(apache);
let server_config = document.createElement('a');
server_config.setAttribute('href', 'https://github.com/h5bp/server-configs');
server_config.innerHTML += 'server config';
apache.innerHTML += 'Apache settings to help you deliver excellent site performance. We independently maintain ';
apache.appendChild(server_config);
apache.innerHTML += ' for multiple forms';

// // Site section fini


////////////////////////////////////////////////////////////////////////


// Site section site-section-video fini


let who_uses = document.createElement('h2');
site_section.appendChild(who_uses);
body.appendChild(site_section);
who_uses.innerHTML += 'Who uses HTML5 Boilerplate?';


let in_the_wild = document.createElement('p');
in_the_wild.setAttribute('class', 'in-the-wild');
site_section.appendChild(in_the_wild);

let microsoft = document.createElement('a');
microsoft.setAttribute('href', 'https://www.microsoft.com/surface/');

let nasa = document.createElement('a');
nasa.setAttribute('href', 'https://data.nasa.gov/');

let nike = document.createElement('a');
nike.setAttribute('href', 'http://www.nikeskateboarding.com/');

let barack_obama = document.createElement('a');
barack_obama.setAttribute('href', 'https://www.barackobama.com/');

let itv_news = document.createElement('a');
itv_news.setAttribute('href', 'https://www.itv.com/news/');

let creative_commons = document.createElement('a');
creative_commons.setAttribute('href', 'https://creativecommons.org/');

let australia_post = document.createElement('a');
australia_post.setAttribute('href', 'https://auspost.com.au/');

let many_more = document.createElement('a');
many_more.setAttribute('href', 'https://github.com/h5bp/html5-boilerplate/wiki/sites'),

in_the_wild.appendChild(microsoft);
microsoft.innerHTML += 'Microsoft';
in_the_wild.innerHTML += ", ";

in_the_wild.appendChild(nasa);
nasa.innerHTML += 'Nasa';
in_the_wild.innerHTML += ", ";

in_the_wild.appendChild(nike);
nike.innerHTML += 'Nike';
in_the_wild.innerHTML += ", ";

in_the_wild.appendChild(barack_obama);
barack_obama.innerHTML += 'Barack Obama';
in_the_wild.innerHTML += ", ";

in_the_wild.appendChild(itv_news);
itv_news.innerHTML += 'ITV News';
in_the_wild.innerHTML += ", ";

in_the_wild.appendChild(creative_commons);
creative_commons.innerHTML += 'Creative Commons';
in_the_wild.innerHTML += ", ";

in_the_wild.appendChild(australia_post);
australia_post.innerHTML += 'Australia Post';
in_the_wild.innerHTML += ", and";

in_the_wild.appendChild(many_more);
many_more.innerHTML += ' many more';
in_the_wild.appendChild(many_more);

in_the_wild.innerHTML += ".";

site_section.appendChild(cta_option);
cta_option.appendChild(btn_btn_download);


let aside = document.createElement('div');
container.appendChild(aside);

let inline_block_list = document.createElement('ul');
inline_block_list.setAttribute('class', 'inline-block_list');
container.appendChild(inline_block_list);

let report_issues = document.createElement('li');
inline_block_list.appendChild(report_issues);
let report_issues_a = document.createElement ('a');
report_issues_a.setAttribute('href', 'https://github.com/h5bp/html5-boilerplate/issues');
let icon_icon__gihthub = document.createElement('span');
icon_icon__gihthub.setAttribute('class', 'Icon Icon--github');
icon_icon__gihthub.innerHTML += '';
report_issues_a.innerHTML += 'Report issues';




let site_section_site_section_video = document.createElement('div');
site_section_site_section_video.setAttribute('class', 'site-section site-section-video');
body.appendChild(site_section_site_section_video);

let introduction = document.createElement('h2');
introduction.innerHTML += 'Introduction to v8';
site_section_site_section_video.appendChild(introduction);


let content = document.createElement('div');
content.setAttribute('class', 'content');
site_section_site_section_video.appendChild(content);

let whats_new = document.createElement('p');
whats_new.setAttribute('class','new');
whats_new.innerHTML += 'What\'s new ?';
content.appendChild(whats_new);


let whats_new_ul = document.createElement('ul');
whats_new_ul.setAttribute('class', 'new');
content.appendChild(whats_new_ul);

let whats_new_li1 = document.createElement('li');
whats_new_ul.appendChild(whats_new_li1);
whats_new_li1.innerHTML += 'Added a sample package.json with basic Parcel commands to jump start your app development';


let whats_new_li2 = document.createElement('li');
whats_new_ul.appendChild(whats_new_li2);
whats_new_li2.innerHTML += 'Added sample Open Graph metadata';

let whats_new_li3 = document.createElement('li');
whats_new_ul.appendChild(whats_new_li3);
whats_new_li3.innerHTML += 'Updated Modernizr and main.css';


let whats_new_li4 = document.createElement('li');
whats_new_ul.appendChild(whats_new_li4);
whats_new_li4.innerHTML += 'Removed jQuery';


let whats_new_li5 = document.createElement('li');
whats_new_ul.appendChild(whats_new_li5);
whats_new_li5.innerHTML += 'Set anonymizeIp to true in Google Analytics snippet';


let whats_new_li6 = document.createElement('li');
whats_new_ul.appendChild(whats_new_li6)
whats_new_li6.innerHTML += 'Removed Browser Upgrade Prompt';


let whats_new_li7 = document.createElement('li');
whats_new_ul.appendChild(whats_new_li7);
let whats_new_li7_href = document.createElement('a');
whats_new_li7_href.innerHTML += 'Check out the Changelog for all the details.';
whats_new_li7_href.setAttribute('href', 'https://github.com/h5bp/html5-boilerplate/blob/master/CHANGELOG.md');
whats_new_li7.innerHTML += 'That\'s just the start of all the goodness. ';
whats_new_li7.appendChild(whats_new_li7_href);










